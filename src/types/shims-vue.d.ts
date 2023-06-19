export {};

declare module "vue" {
  interface ComponentCustomProperties {
    $t: any;
  }
}
