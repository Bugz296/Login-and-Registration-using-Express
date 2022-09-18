class Model{
    constructor(){
        var mysql = require('mysql');
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            pass: 'password',
            database: 'aws_db'});
    }
    query(statement){
        return new Promise((resolve, reject) => {
            this.connection.query(statement, function (err, rows) {
                return err ? reject(err) : resolve(rows);
            });
        });
    }
}
module.exports = Model;