"use strict";
import Hapi from "hapi";
import path from "path";
import routes from "./routes";
import plugins from "./plugin";
import models from "./models";

const internals = {
  tempPath: "."
};

const server = Hapi.Server({
  host: "localhost",
  port: 8080
});

const databaseConnection = connObject => {
  connObject();
};

server.route(routes);

// TODO: Better way to include good-console plugin
internals.main = async () => {
  await server.start();
  databaseConnection(() => {
    console.log(`Server is running at port ${server.info.uri}`);
  });
};

internals.main();

export default server;
