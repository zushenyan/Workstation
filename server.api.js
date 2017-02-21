const jsonServer   = require("json-server");
const open         = require("open");
const path         = require("path");
const serverConfig = require("./configs/server-config");
const paths        = require("./configs/webpack.paths.js");

const server      = jsonServer.create();
const router      = jsonServer.router(path.resolve(paths["mock-data"], "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(
  serverConfig.apiServerPort,
  () => {
    console.log("API server now is listening on:");
    console.log(`http://localhost:${serverConfig.apiServerPort}`);
    console.log(`http://127.0.0.1:${serverConfig.apiServerPort}`);
    console.log(serverConfig.apiServerAddress);
    open(serverConfig.apiServerAddress);
  }
);
