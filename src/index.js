"use strict";

const config = require("./config");
const server = require("./server");

const startServer = async() => {
    try {
        const app = await server(config);
        await app.start();

        console.log("Service running at: "+config.host+":"+config.port);

    } catch (error) {
        console.log(error);
    }
};

startServer();