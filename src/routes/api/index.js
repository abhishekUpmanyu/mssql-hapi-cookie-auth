"use strict";

const auth = require("./auth");

module.exports.register = async server => {
    await auth.register(server);
};