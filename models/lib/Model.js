class Model{
    constructor(){
        var mysql = require('mysql');
        this.connection = mysql.createConnection({
            host: 'db-jcb-devops.ch6aewwyy70e.ap-southeast-1.rds.amazonaws.com',
            user: 'db_jcb_devops',
            password: 'db-jcb-devops-pw',
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