const Bcrypt = require('bcrypt');
const user = require('../model/user');
var signup = (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var salt = Bcrypt.genSaltSync();
    var temp_password = password
    var encryptedPassword = Bcrypt.hashSync(temp_password, salt);
    // console.log(encryptedPassword);
    var user_to_add = {
        username: username,
        password: encryptedPassword,
        email: email
    }
    user.create(user_to_add, (err, result1) => {
        if (err) {
            console.log(err);
            res.json({
                status: 400,
                success: false,
                err: err
            })
        }
        else {
            // console.log(result1);
            res.json({
                status: 200,
                success: true,
                data: {
                    username: username,
                    email: email
                }
            })
        }
    })
}
module.exports = signup