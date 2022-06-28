
module.exports = {
    user: "postgres", //enter your postgres user
    password: process.env.PG_ROOT, //enter your postgres password
    host: "localhost",
    port: 5432,
    database: "chessdb" //enter the name of the created database
};
