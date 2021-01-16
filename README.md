<font face="Consolas">

# <font face="Cambria Math">cublog</font>
## 项目介绍
### 本项目是Ucalan和Constructor为了练手而创建的项目，使用的技术是Nodejs，旨在创建一个能够供多人使用的博客系统。
## 项目结构
### 使用的开发框架
- 前端：Vue3
- 后端：Koa2
### 前端
暂时无特别设计，是vue-cli创建的默认项目
### 后端的分包设计
- app.js: 程序入口
- ./static: 服务器中存放头像等资源的文件夹
- ./src: 程序源代码
- ./src/config: 数据库等一些东西的配置
- ./src/controller: 控制器，在这里是负责处理路由方面的问题，一个HTTP请求发送到controller处后，由controller进行分发，调用service的函数处理，controller只做路由问题，只能调用service
- ./src/controller/router: 路由管理，负责规定各个路由应当如何调用service
- ./src/orm: 对象映射，这里仅仅处理与数据库交流的问题
- ./src/service: 业务层，HTTP请求在controller处经过筛选后，由controller调用service，在service处进行处理，service可能调用orm(如果需要与数据库交流的话)，或不调用(如果不需要与数据库交流的话)，为了项目结构清晰，禁止service互相调用，需要公用的一些工具，放在./src/share中
- ./src/share: 由于禁止service互相调用，而一些工具可能被广泛需要，所以建立的包
### 数据库设计
目前只是个雏形，暂时无数据库设计
## 项目规范
使用prettier默认的排版格式进行格式化