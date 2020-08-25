"use strict";

const dotenv = require("dotenv");
const assert = require("assert");

dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    SQL_USER,
    SQL_PASSWORD,
    SQL_DATABASE,
    SQL_SERVER,
    SQL_ENCRYPT
} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

assert(PORT, "PORT is required");
assert(HOST, "HOST is required");
assert(HOST_URL, "HOST_URL is required");
assert(SQL_USER, "SQL_USER is required");
assert(SQL_PASSWORD, "SQL_PASSWORD is required");
assert(SQL_DATABASE, "SQL_DATABASE is required");
assert(SQL_SERVER, "SQL_SERVER is required");
assert(SQL_ENCRYPT, "SQL_ENCRYPT is required");

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        server: SQL_SERVER,
        user: SQL_USER,
        password: SQL_PASSWORD,
        database: SQL_DATABASE,
        options: {
            encrypt: sqlEncrypt
        }
    }
};