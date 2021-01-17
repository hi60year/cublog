import koa_router from "koa-router";
const index = new koa_router();

// 导入service
import indexService from "../../service/index.js";
// 指定一个url匹配，controller中和router中指定的url可以叠加，如controller中设定为/a，router中设定为/b，最终需要：网址/a/b才能访问。
index.get("/index.html", async (ctx) => {
  indexService(ctx);
});

export default index;
