## Day1学习笔记
  - TypeScript 装饰器原理
    - 理解 @Controller() 装饰器如何注册路由元数据
      使用reflect-metadata的defineMetadata向被装饰对象注入元数据，然后在创建express实例时使用getMatedata读取所有使用Controller装饰的对象，将路由参数注册到express路由中，实现完整的路由功能
    - NestJS 项目结构
      src -- 根目录
        main.ts -- 项目入口文件
        app.controller.ts -- 项目根控制器
          demo.controller.ts  -- 子控制器
        app.module.ts -- 项目应用根模块
        app.service.ts  -- 服务组件