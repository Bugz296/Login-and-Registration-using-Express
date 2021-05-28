class Model{
    constructor(){
        var mysql = require('mysql');
        var db_config = require('../config');
        this.connection = mysql.createConnection(db_config);
    }
    query(statement){
        let records = [];
        return new Promise((resolve, reject) => {
            this.connection.query(statement, function (err, rows, fields) {
                if(err){
                    return reject(err);
                }else{
                    // for(let i=0; i<rows.length; i++){
                    //     records.push(Object.values(rows[i]));
                    // }
                    // return resolve(records);
                    return resolve(rows);
                }
            });
        });
    }
}
module.exports = Model;