const User  = require('../models/User');
const bcrypt = require('bcrypt')
const passport = require('passport');

 exports.login = async (req, res) => {
    console.log('isnide logn');
    try {    
      res.json('try login again, failed login');
    }
    catch(err){
      res.json({ message:err});
      }
  
    }

exports.register= async (req, res) => {
        console.log('isnide logn');
        try {    
          res.json('try login again, failed login');
        }
        catch(err){
          res.json({ message:err});
          }
      
        }   
exports.registerUser = async (req, res) => {
    const {name , email, password, password2} = req.body
    // console.log(req.body);
    let errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  console.log(errors);

  try {  

  if (errors.length > 0) {
      res.send(errors)
    }
    else {
        const newUser = new User({
          name,
          email,
          password
        });

        console.log(newUser, 'new user', errors);
        bcrypt.genSalt(10, (err, salt) => {
            console.log('isihhff', salt);
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
            res.json(newUser);  
          });
        });
  }
}
  catch(err){
    res.json({ message:err});
  }

};

exports.loginUser = async (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: 'http://localhost:3000/api/user/dashboard',
        failureRedirect: 'http://localhost:3000/api/user/login',
        failureFlash: true
      })(req, res, next);  
}



exports.dashboard = async (req, res) => {
    res.send('Succesfully loggedin')
}


exports.logout = async (req, res) => {
    req.logout();
    res.redirect('http://localhost:3000/api/user/login');
    res.send('Succesfully loggedin')
}



 


