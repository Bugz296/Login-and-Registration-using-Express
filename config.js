class Database{
    constructor(){
        this.host = 'localhost';
        this.user = 'root';
        this.pass = '';
        this.database = 'aws_db';
    }
}
module.exports = new Database;