"use strict";

const Joi = require("joi");

module.exports.register = async server => {
    server.route({
        method: "POST",
        path: "/api/auth",
        options: {
            validate: {
                payload: Joi.object({
                    username: Joi.string().required(),
                    password: Joi.string().required()
                })
            }
        },
        handler: async request => {
            try {
                const db = request.server.plugins.sql.client;
                const { username, password } = request.payload;
                const res = await db.auth.checkCredentials(username, password);
                if (res.recordset!==undefined) {
                    request.cookieAuth.set({ username: username });
                    return true;
                }
                return false;
            } catch (error) {
                console.log(error);
            }
        }
    });
};