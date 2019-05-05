# FunnyFlutterServer

## 使用说明

```shell
yarn install
yarn run # 在本地启动 server
yarn watch # 用 nodemon watch 本地的 server，文件修改后会自动重启 server
yarn release # 用 pkg 将 server 打包为二进制文件，保存在 dist 目录下
```

所有的路由都写在 src/router.js 中，每个路由的 request handler 单独放在 src/api/ 目录中，express 的 request handler 的写法参见：http://www.expressjs.com.cn/4x/api.html#middleware-callback-function-examples
