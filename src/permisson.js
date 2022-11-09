import router from './router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import getPageTitle from './utils/get-page-title';
import usePermissStore from '@/stores/permisson';
import { getToken } from './utils/auth';
import useUserStore from './stores/user';
import { getInfo } from './api/user';

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  document.title = getPageTitle(to.meta.title);
  const token = getToken();
  const userStore = useUserStore();

  if (token) {
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      const role = userStore.role;
      console.log(role);
      if (role) {
        next();
      } else {
        try {
          const { data: userInfo } = await getInfo();
          console.log(userInfo);
          userStore.commitState(userInfo);
          const permissionStore = usePermissStore();
          await permissionStore.generateRoutes();
          console.log(router.getRoutes());
        } finally {
          next();
        }
      }
    }
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
