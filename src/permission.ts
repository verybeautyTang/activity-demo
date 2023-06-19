// import { RouteLocationNormalized } from "vue-router";
import NProgress from "nprogress";
// import { useUserStoreHook } from "./store/modules/users";
import router from "@/router";

NProgress.configure({ showSpinner: false });

/** 白名单 */

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  console.log(to, from);
  next();
});

router.afterEach(() => {
  NProgress.done();
});
