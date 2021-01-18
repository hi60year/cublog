import KoaRouter from "koa-router";
const controller = new KoaRouter();

// 从子router中读取router
import index from "./router/index.js";
// 指定一个url匹配
controller.use("", index.routes(), index.allowedMethods());

export default controller;
