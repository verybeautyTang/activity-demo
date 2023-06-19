import { createVisualEditorConfig } from "./visual-editor/visual-editor.utils";
import baseWidgets from "@/packages/base-widgets";
import containerComponent from "@/packages/container-component";

export const visualConfig = createVisualEditorConfig();
// 注册基础控件
Object.entries(baseWidgets).forEach(([name, widget]) =>
  visualConfig.registry("baseWidgets", name, widget)
);
// 注册容器组件
Object.entries(containerComponent).forEach(([name, widget]) =>
  visualConfig.registry("containerComponents", name, widget)
);
