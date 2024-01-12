const Signup = require("../module/signupmodule");

const getAllSignup = (req,res)=>{
    Signup.find().then(function(err,signup){
        if(err){
            res.send(err);
        }
    })
}



const insertSignup = (req, res) => {

    const signup = new Signup({
        username: req.body.username,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,

    })

    signup.save().then(function(err) {
        if (!err) {
          res.send("Successfully Added to th DataBase.");
        } else {
          res.send(err);
        }
      });
}


// insert new data elemen to the database 



module.exports = {
    getAllSignup,
    insertSignup
}