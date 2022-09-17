const Model = require('./lib/Model');
const Mysql = require('mysql');
class User extends Model{
    constructor(){
        super();
    }
    async login_process(post_data){
        let [user_data] = await this.getDataByEmail(post_data.email);
        return user_data;
    }

    async register(post_data){
        let exists = await this.getDataByEmail(post_data.email);
        if(exists.length){
            return false;
        }else{
            let values = [
                post_data.first_name, 
                post_data.last_name, 
                post_data.email, 
                post_data.password
            ];
            let query = Mysql.format(`INSERT INTO users 
                (first_name, last_name, email, password) 
                VALUES (?, ?, ?, ?);`, values);
            await this.query(query);
            return true;
        }
    }
    async getDataByEmail(email){
        let query = Mysql.format(`SELECT * FROM users WHERE email = ?`, email);
        let result = await this.query(query);
        return result;
    }
    async login(post_data){
        //this.login();
    }
}
module.exports = new User;