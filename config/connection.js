//MYSQL Connection setup
const mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL){
    connection= mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'm7wltxurw8d2n21q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        port: 3306,
        user: 'vzz3vv1lnijg2cjm',
        password: '	e2na97n1qs1fy9zo',
        database: 'burgers_db'
    });
};

//Make connection
connection.connect(function(err){
    if (err) {
        console.log("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;