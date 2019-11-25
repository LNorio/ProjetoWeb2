const User = require("../models/UserModel");

class UserController {

  async store(req, res) {
    let login = req.body.login,
        password = req.body.password;
    //if(login !== "" && password !== ""){
        const user = await User.create(req.body);
        return res.json(user);
        //return res.redirect('/');
    //}
    //return res.redirect('/sing');

  }
  async show(req, res) {
    const user = await User.findById(req.params.id);
    return res.json(user);
  }
}

module.exports = new UserController();