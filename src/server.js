"use strict";

const Hapi = require("@hapi/hapi");
const HapiAuthCookie = require("@hapi/cookie");
const plugins = require("./plugins");
const routes = require("./routes");

const app = async config => {
    const { host, port } = config;

    const server = Hapi.server({ host, port });
    server.app.config = config;

    await server.register(HapiAuthCookie);
    
    await plugins.register(server);
    await routes.register(server);

    server.auth.strategy('session', 'cookie', {
        cookie: {
            name: 'sid',
            password: '!wsYhFA*C2U6nz=Bu^%A@^F#SF3&kSR6',
            isSecure: false
        }
    });

    return server;
};

module.exports = app;