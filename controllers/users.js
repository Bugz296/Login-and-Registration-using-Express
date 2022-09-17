const userModel = require('../models/user');
const Controller = require('./Controller');
class Users extends Controller{
    constructor(){
        super();
    }
    index(req, res){
        res.render('index', {error: ''});
    }
    async login(req, res){
        let post_data = req.body;
        let user = await userModel.login_process(post_data);

        if(user){
            res.render('home', {user});
        }
        else{
            res.render('index', {error: "Invalid Credentials"});
        }
        res.end();
    }
    async register(req, res){
        let post_data = req.body;

        let result = await userModel.register(post_data);
        if(result){
            res.redirect('/home');
        }else{
            res.redirect('/');
        }
        res.end();
    }
    home(req, res){
        res.render('home', {yeah: "HELLO WORLD"});
    }
}
module.exports = new Users;