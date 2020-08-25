"use strict";

const auth = require("./auth");
const mssql = require("mssql");

const client = async (server, config) => {
    let pool = null;

    const closePool = async () => {
        try {
            pool.close();
            pool = null;
        } catch (error) {
            console.log(error);
        }
    };

    const getConnection = async () => {
        try {
            if (pool) {
                return pool;
            }
            pool = await mssql.connect(config);
            pool.on("error", async err => {
                console.log(err);
                await closePool();
            });
            return pool;
        } catch (error) {
            console.log(error);
        }
    };

    return {
        auth: await auth.register({mssql, getConnection})
    };

};

module.exports = client;