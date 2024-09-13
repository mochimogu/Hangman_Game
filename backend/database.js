const pg = require('pg').Pool;

//THIS WILL USE TO STORE THE USER'S SCORE AND DATA


require('dotenv').config();

const db = new pg({
    connectionString : `${process.env.DATABASE}`,
    ssl : {
        rejectUnauthorized : false
    }
})





