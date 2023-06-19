import { createPinia } from "pinia";

import piniaPluginPersist from "pinia-plugin-persist";

import type { App } from "vue";

const store = createPinia();

store.use(piniaPluginPersist);

// 全局挂载store
export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };
