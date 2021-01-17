import koa_router from "koa-router";
const controller = new koa_router();

// 从子router中读取router
import index from "./router/index.js";
// 指定一个url匹配
controller.use("", index.routes(), index.allowedMethods());

export default controller;
