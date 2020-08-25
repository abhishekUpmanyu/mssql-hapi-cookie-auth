"use strict";

const api = require("./api");

module.exports.register = async server => {
    await api.register(server);
};