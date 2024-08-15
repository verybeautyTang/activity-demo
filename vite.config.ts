import path, { resolve } from "path";
import { UserConfig, ConfigEnv, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import legacy from "@vitejs/plugin-legacy";
// import EnvironmentPlugin from "vite-plugin-environment";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import WindiCSS from "vite-plugin-windicss";
import checker from "vite-plugin-checker";
import DefineOptions from "unplugin-vue-define-options/vite";
import {
  ElementPlusResolver,
  VantResolver,
} from "unplugin-vue-components/resolvers";
const pathSrc = path.resolve(__dirname, "src");

const CWD = process.cwd();

const prefix = `monaco-editor/esm/vs`;

export default ({ mode }: ConfigEnv): UserConfig => {
  // 获取 .env 环境配置文件
  const { env } = loadEnv(mode, CWD);
  return {
    base: "./",
    resolve: {
      alias: {
        "@": `${pathSrc}/`,
        store: "/src/store",
      },
    },
    css: {
      modules: {
        localsConvention: "camelCase", // 默认只支持驼峰，修改为同时支持横线和驼峰
      },
      preprocessorOptions: {
        scss: {
          charset: false,
        },
        less: {
          charset: false,
        },
      },
      // TODO 构建包含@charset问题 https://github.com/vitejs/vite/issues/5833
      // charset: false,
      postcss: {
        plugins: [
          {
            postcssPlugin: "internal:charset-removal",
            AtRule: {
              charset: atRule => {
                if (atRule.name === "charset") {
                  atRule.remove();
                }
              },
            },
          },
        ],
      },
    },

    //生产模式打包配置
    build: {
      cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
      sourcemap: false, // 构建后是否生成 source map 文件。如果为 true，将会创建一个独立的 source map 文件
      // target: "modules", // 设置最终构建的浏览器兼容目标。默认值是一个 Vite 特有的值——'modules'  还可设置为 'es2015' 'es2016'等
      chunkSizeWarningLimit: 550, // 单位kb  打包后文件大小警告的限制 (文件大于此此值会出现警告)
      assetsInlineLimit: 4096, // 单位字节（1024等于1kb） 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
      minify: "terser", // 'terser' 相对较慢，但大多数情况下构建后的文件体积更小。'esbuild' 最小化混淆更快但构建后的文件相对更大。
      terserOptions: {
        compress: {
          drop_console: true, // 生产环境去除console
          drop_debugger: true, // 生产环境去除debugger
        },
      },
      rollupOptions: {
        // 增加后既正常
        treeshake: false,
        input: {
          main: resolve(__dirname, "index.html"),
          preview: resolve(__dirname, "preview/index.html"),
        },
        output: {
          manualChunks: {
            jsonWorker: [`${prefix}/language/json/json.worker`],
            cssWorker: [`${prefix}/language/css/css.worker`],
            htmlWorker: [`${prefix}/language/html/html.worker`],
            tsWorker: [`${prefix}/language/typescript/ts.worker`],
            editorWorker: [`${prefix}/editor/editor.worker`],
          },
        },
      },
    },
    preview: {
      host: true,
      port: 4173,
      open: true,
    },
    plugins: [
      vue(),
      vueJsx(),
      // htmlTemplate(),
      // EnvironmentPlugin("all", { prefix: "VITE_APP_" }),
      WindiCSS(),
      // https://github.com/sxzz/unplugin-vue-define-options
      DefineOptions(),
      legacy({
        targets: ["defaults", "not IE 11"],
        // // false时则生成任何polyfill
        // polyfills: true,
        // // 添加自定义导入至基于es语言功能生成的polyfill中,例如额外的DOM API polyfill
        // // additionalLegacyPolyfills: ["resize-observer-polyfill"],
        // // 忽略@babel/preset-env的browserslist检测
        // ignoreBrowserslistConfig: false,
        // // 默认为false，为true时会会分开生成modern polyfill
        // // 自定义可使用polyfill specifiers数组形式：['es.promise.finally', 'es/map', 'es/set', ...]
        // modernPolyfills: false,
        // // 默认为true，一般用在使用modernPolyfill为现代语法构建注入polyfill时设置为false
        // renderLegacyChunks: true,
        // // 默认为false，为true时systemjs/dist/s.min.js将不会包含在polyfills-legacy块中
        // externalSystemJS: false,
      }),
      // https://github.com/antfu/unplugin-auto-import#readme
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        dts: true,
        imports: ["vue", "vue-router"],
      }),
      Components({
        dts: true,
        resolvers: [ElementPlusResolver(), VantResolver()],
      }),
      // https://github.com/fi3ework/vite-plugin-checker
      checker({
        typescript: true,
        // vueTsc: true,
        eslint: {
          lintCommand: 'eslint "./src/**/*.{.vue,ts,tsx}"', // for example, lint .ts & .tsx
        },
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        // 指定symbolId格式
        symbolId: "icon-[dir]-[name]",
      }),
    ],
    optimizeDeps: {
      include: [
        "@vueuse/core",
        "element-plus",
        "vant",
        "lodash-es",
        "vuedraggable",
      ],
    },
    // 本地反向代理解决浏览器跨域限制
    server: {
      host: "0.0.0.0",
      port: 10086, // 设置服务启动端口号
      open: false, // 设置服务启动时是否自动打开浏览器
      cors: true, // 允许跨域
      // proxy: {
      //   [env.VITE_APP_BASE_API_PREFIX]: {
      //     // 线上API地址
      //     // target: "http://10.130.131.111:3000/mock/41/",
      //     // 本地API地址
      //     target: "localhost:3000",
      //     changeOrigin: true,
      //     rewrite: path =>
      //       path.replace(new RegExp("^" + env.VITE_APP_BASE_API_PREFIX), ""),
      //   },
      // },
    },
  };
};
