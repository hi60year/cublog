<font face="Consolas">

# <font face="Cambria Math">cublog</font>

## 项目介绍

本项目是 Ucalan 和 Constructor 为了练手而创建的项目，使用的技术是 Nodejs，旨在创建一个能够供多人使用的博客系统。

## 项目结构

### 使用的开发框架

- 前端：Vue3
- 后端：Koa2

### 前端

暂时无特别设计，是 vue-cli 创建的默认项目

### 后端的分包设计

- app.js: 程序入口
- ./static: 服务器中存放头像等资源的文件夹
- ./src: 程序源代码
- ./src/config: 数据库等一些东西的配置
- ./src/controller: 控制器，在这里是负责处理路由方面的问题，一个 HTTP 请求发送到 controller 处后，由 controller 进行分发，调用 service 的函数处理，controller 只做路由问题，只能调用 service
- ./src/controller/router: 路由管理，负责规定各个路由应当如何调用 service
- ./src/orm: 对象映射，这里仅仅处理与数据库交流的问题
- ./src/service: 业务层，HTTP 请求在 controller 处经过筛选后，由 controller 调用 service，在 service 处进行处理，service 可能调用 orm(如果需要与数据库交流的话)，或不调用(如果不需要与数据库交流的话)，为了项目结构清晰，禁止 service 互相调用，需要公用的一些工具，放在./src/share 中
- ./src/share: 由于禁止 service 互相调用，而一些工具可能被广泛需要，所以建立的包

### 数据库设计

目前只是个雏形，暂时无数据库设计。

## 项目规范

使用 prettier 默认的排版格式进行格式化。

### 命名规范

- 变量名规范：每个单词之间使用下划线分割，首字母小写。
- 函数名规范：函数名每个单词之间使用首字母大写分割，首字母小写。
- 类名规范：类名每个单词之间使用首字母大写分割，首字母大写。
