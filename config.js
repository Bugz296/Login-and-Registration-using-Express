class Database{
    constructor(){
        this.host = 'localhost';
        this.user = 'root';
        this.pass = '';
        this.database = 'express_login_and_registration';
    }
}
module.exports = new Database;