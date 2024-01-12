const Login = require("../module/loginmodule");

const getAllLogin = (req,res)=>{
    Login.find().then(function(err,login){
        if(err){
            res.send(err);
        }
    })
}



const insertLogin = (req, res) => {

    const login = new Login({
        username: req.body.username,
        password: req.body.password,
    })

    login.save().then(function(err) {
        if (!err) {
          res.send("Successfully Added to th DataBase.");
        } else {
          res.send(err);
        }
      });
}


// insert new data elemen to the database 



module.exports = {
    getAllLogin,
    insertLogin
}