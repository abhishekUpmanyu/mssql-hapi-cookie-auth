"use strict";

const register = async ({ mssql, getConnection }) => {
    const checkCredentials = async (username, password) => {
        const cnx = await getConnection();
        const request = await cnx.request();

        request.input("username", mssql.VarChar(50), username);
        request.input("password", mssql.CHAR(60), password);

        const results = await request.execute("checkCredentials")
        console.log(results);
        return results;
    }

    return {
        checkCredentials
    };
};

module.exports = { register };