import router from './router'
import { ElMessage } from 'element-plus'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import getPageTitle from './utils/get-page-title'
import { getToken } from './utils/auth'
import useUserStore from './stores/user'
import usePermissonStore from './stores/permisson'

const whiteList = ['/login', '/auth-redirect']

router.beforeEach(async (to, from, next) => {
  // start loading progress
  NProgress.start()
  const userStore = useUserStore()
  const permissionStore = usePermissonStore()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const token = getToken()
  if (token) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      const hasRoles = userStore.roles && userStore.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          //TODO get user info
          // * roles must be a array! such as: ['admin'] or ,['developer','editor']
          const { roles } = await userStore.getInfo()

          //TODO generate accessible routes map based on roles
          const accessRoutes = await permissionStore.generateRoutes(roles)
          accessRoutes.forEach(route => {
            router.addRoute(route)
          })
          next({ ...to, replace: true })
        } catch (error) {
          //TODO remove token and go to login page to re-login
          userStore.resetToken()
          ElMessage.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    //* has no token
    if (whiteList.includes(to.path)) {
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
