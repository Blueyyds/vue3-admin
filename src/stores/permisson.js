import router, { asyncRoutes, constantRoutes } from '@/router';
import { defineStore } from 'pinia';

/**
 * Use meta.role to determine if the current user has permission
 * @param {Array} roles
 * @param {Object} route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role));
  } else {
    return true;
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param {Array} routes asyncRoutes
 * @param {Array} roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = [];

  routes.forEach(route => {
    const tmp = { ...route };
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles);
      }
      res.push(tmp);
    }
  });

  return res;
}

const usePermissonStore = defineStore('Permisson', {
  state: () => ({
    routes: [],
    addRoutes: [],
  }),
  getters: {},
  actions: {
    async generateRoutes() {
      let accessedRoutes = asyncRoutes;
      // if (roles === 'admin') {
      //   accessedRoutes = asyncRoutes || [];
      // } else {
      //   accessedRoutes = filterAsyncRoutes(roles);
      // }
      this.addRoutes = accessedRoutes;
      this.routes = constantRoutes.concat(accessedRoutes);

      this.routes.forEach(r => {
        router.addRoute(r);
      });
      return accessedRoutes;
    },
  },
});

export default usePermissonStore;
