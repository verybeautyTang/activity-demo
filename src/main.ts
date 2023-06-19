import { createApp } from "vue";
import App from "./App.vue";

import { setupElementPlus } from "./plugins/element-plus";
import { setupVant } from "./plugins/vant";

import "@/permission";

import "normalize.css";
import "virtual:windi.css";
import "virtual:windi-devtools";
import "animate.css";

import { setupStore } from "@/store";
import router from "@/router";
// 国际化
import i18n from "@/lang/index";

import "@/styles/index.scss";
import "element-plus/theme-chalk/index.css";

const app = createApp(App);

// 配置store
setupStore(app);
// 使用element-plus插件
setupElementPlus(app);
// 使用vant插件
setupVant(app);

app.config.globalProperties.$$refs = {};

window.$$refs = app.config.globalProperties.$$refs;

app.use(router).use(i18n).mount("#app");
