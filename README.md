## Demo

这是我用来练习的项目，主要是自己在掘金上看到一些好的文章，或者一些小创意，的实践运用

有一部分demo会需要登录账号什么的，我会将demo账号放在控制台中，也欢迎大家进行指正

个人博客：www.xiaojunnan.cn



## 前提

- pnpm版本：8.8.0
- 安装环境：`pnpm i`
- 运行：`pnpm start`
- React + TS



## 项目结构

```markdown
├── public
│   └── favicon.ico               # 图标
|   └── index.html                # 根
├── src
│   ├── assets                    # 静态文件
│   ├── components                # 组件
│   ├── router                    # 路由
│   ├── service                   # 前后端交互
│   ├── store                     # 仓库
│   ├── utils                     # 工具
│   ├── views                     # 视图
│   ├── App.tsx
│   ├── index.tsx
│   └── react-app-env.d.ts
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── pnpm-lock.yaml
└── tsconfig.json
```



## 相关设置

- [ ] sql防注入
- [ ] token无感刷新
- [ ] 用户A登录账号，另一个地方再次登录用户A要挤出
- [ ] 路由权限
- [ ] 404



## demo项目

- [ ] Todo List
  - 持久化存储
- [ ] 数字时间滚动
- [ ] 瀑布流
- [ ] 虚拟列表
- [ ] 懒加载
- [ ] Web Worker
- [ ] 大文件上传
- [ ] 类ChatGPT消息推送
  - 单向推送消息的话，HTTP 就有这种功能，它就是 Server Send Event
- [ ] 低代码编辑器
- [ ] 类B站视频播放（速度特别快）



## 要账号登录

- [ ] 实时聊天
  - socket.io
- [ ] 共享画板
  - socket.io
- [ ] 网页web端实现对另一个设备的控制
  - webrtc
- [ ] 双端视频聊天
- [ ] 屏幕共享

