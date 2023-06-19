import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { usePermissionStoreHook } from "@/store/modules/permission";

export const Layout = () => import("@/layout/index.vue");

// 静态路由
export const constantRoutes: any[] = [
  {
    path: "/redirect",
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: { hidden: true },
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404.vue"),
    meta: { hidden: true },
  },

  {
    path: "/",
    component: Layout,
    name: "home",
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        name: "dashboard",
        meta: { title: "首页", icon: "homepage", affix: true },
      },
      {
        path: "401",
        component: () => import("@/views/error-page/401.vue"),
        meta: { hidden: true },
      },
    ],
  },
  {
    path: "/activity",
    component: Layout,
    redirect: "/activity/h5",
    name: "Activiese",
    meta: { title: "活动列表", icon: "homepage" },
    children: [
      {
        path: "h5",
        component: () => import("@/views/activity/h5/index.vue"),
        name: "H5",
        meta: { title: "H5列表", icon: "homepage" },
      },
      {
        path: "cocos",
        component: () => import("@/views/activity/cocos/index.vue"),
        name: "COCOS",
        meta: { title: "COCOS列表", icon: "homepage" },
      },
      {
        path: "backed",
        component: () => import("@/views/activity/pc/index.vue"),
        name: "Backed",
        meta: { title: "后台列表", icon: "homepage" },
      },
      // {
      //   path: "item-home",
      //   component: () => import("@/views/error-page/401.vue"),
      //   name: "ProjectItemHone",
      //   meta: { title: "项目主体", icon: "homepage" },
      // },
    ],
  },
  {
    path: "/project",
    component: Layout,
    redirect: "/project/list",
    name: "Projects",
    meta: { title: "项目管理", icon: "homepage" },
    children: [
      {
        path: "list",
        component: () => import("@/views/projects/list/index.vue"),
        name: "ProjectList",
        meta: { title: "H5管理", icon: "homepage" },
      },
      {
        path: "cocos",
        component: () => import("@/views/projects/cocos/index.vue"),
        name: "ProjectCocos",
        meta: { title: "COCOS管理", icon: "homepage" },
      },
      // {
      //   path: "item-home",
      //   component: () => import("@/views/error-page/401.vue"),
      //   name: "ProjectItemHone",
      //   meta: { title: "项目主体", icon: "homepage" },
      // },
    ],
  },
  {
    path: "/lowcode",
    component: Layout,
    redirect: "/lowcode/list",
    name: "Lowcode",
    meta: { title: "模版管理", icon: "homepage" },
    children: [
      {
        path: "list",
        component: () => import("@/views/dashboard/index.vue"),
        name: "LowCodeList",
        meta: { title: "模版列表", icon: "homepage" },
      },
      {
        path: "editor",
        component: () => import("@/visual-editor/index.vue"),
        name: "LowCodeEditor",
        meta: { title: "自定义框架", icon: "homepage" },
      },
    ],
  },
];

console.log(constantRoutes);
const permissionStore = usePermissionStoreHook();
permissionStore.setRoutes(constantRoutes);

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes as RouteRecordRaw[],
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// 重置路由
export function resetRouter() {
  // const permissionStore = usePermissionStoreHook();
  constantRoutes.forEach(route => {
    const name = route.name;
    if (name && router.hasRoute(name)) {
      router.removeRoute(name);
    }
  });
}

export default router;
