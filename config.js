class Database{
    constructor(){
        this.host = 'db-jcb-devops.ch6aewwyy70e.ap-southeast-1.rds.amazonaws.com';
        this.user = 'db_jcb_devops';
        this.pass = 'db-jcb-devops-pw';
        this.database = 'aws_db';
    }
}
module.exports = new Database;