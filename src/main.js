import { createApp } from "vue";
import App from "./App.vue";
import children from "./components/children.vue";
import ElementPlus from "element-plus";
import { h } from "vue";
import { ElMessage } from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// 导入router
import router from "./router";
// 导入stores
import store from "./stores";
import "./style.css";
const app = createApp(App);
window.$message = ElMessage;
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);
app.use(store);
app.component("children", children);
app.mount("#app");
