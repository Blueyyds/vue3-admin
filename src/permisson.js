// import router from './router'
// import { ElMessage } from 'element-plus'
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style
// import getPageTitle from './utils/get-page-title'
// import { getToken } from './utils/auth'

// // Nprogress.configure({ showSniper: false })

// const whiteList = ['/login', '/auth-redirect']

// router.beforeEach(async (to, from, next) => {
//   // start loading progress
//   NProgress.start()

//   // set page title
//   document.title = getPageTitle(to.meta.title)

//   // determine whether the user has logged in
//   const token = getToken()
//   if (token) {
//     if (to.path === '/login') {
//       // if is logged in, redirect to the home page
//       next({ path: '/' })
//       NProgress.done()
//     } else {
//     }
//   }
// })
