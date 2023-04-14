const User = require('../models/user.model')


module.exports.signup_get = (req,res) => {
    res.render('signup');
}

module.exports.login_get = (req,res) => {
    res.render('login');
}

module.exports.signup_post = async (req,res) => {
    try {
        const {fname, sname, birth, email, password} = req.body;
        const user = await User.create({fname, sname, birth, email, password});
        console.log(user);
        res.status(201).json(user);
    } catch (error) {
        console.log(err);
        res.status(400).send('Error user not created');
    }
}

module.exports.login_post = (req,res) => {
    //Accessing user data
    const {email, pass} = req.body;
    console.log(email, pass);
    res.send('User login');
}