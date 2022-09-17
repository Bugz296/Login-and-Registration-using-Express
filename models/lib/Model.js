class Model{
    constructor(){
        var mysql = require('mysql');
        var db_config = require('../../config');
        this.connection = mysql.createConnection(db_config);
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