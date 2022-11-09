import router from './router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import getPageTitle from './utils/get-page-title';
import usePermissStore from '@/stores/permisson';

router.beforeEach(async (to, from, next) => {
  // start loading progress
  NProgress.start();
  // set page title
  document.title = getPageTitle(to.meta.title);

  const permissionStore = usePermissStore();
  const routes = await permissionStore.generateRoutes();
  routes.forEach(r => {
    // console.log(r);
    router.addRoute(r);
  });
  next();
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
