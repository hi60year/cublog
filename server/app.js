import Koa from "koa2";
import controller from "./src/controller/controller.js";
const app = new Koa();

// 调用controller.routes()来组装匹配好的路由，返回一个合并好的中间件
// 调用controller.allowedMethods()获得一个中间件，当发送了不符合的请求时，会返回 `405 Method Not Allowed` 或 `501 Not Implemented`
app.use(controller.routes()).use(
  controller.allowedMethods({
    throw: true, // 抛出错误，代替设置响应头状态
    notImplemented: () => '不支持当前请求所需要的功能',
    methodNotAllowed: () => '不支持的请求方式',
  })
);

// 启动服务监听本地3000端口
app.listen(3000, () => {
  console.log("[demo] start-quick is starting at port 3000");
});
