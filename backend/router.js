const { getAllLogin, insertLogin } = require('./controller/login');
const { getAllSignup, insertSignup } = require('./controller/signup');

const router = require('express').Router();

router.get("/getAllData", getAllLogin);
router.get("/getAllSignupData",getAllSignup);

router.get('/hi', function (req, res){
    res.send("we are planning to build product api");
})

router.post("/adUser", insertLogin);

router.post("/addSignupData",insertSignup);

module.exports = router;
