import { _RouteRecordBase } from "vue-router";

declare module "vue-router" {
  interface _RouteRecordBase {
    hidden?: boolean; // router配置的多余字段
  }
}
