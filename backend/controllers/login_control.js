const User=require('../schemas/user');
const jwt = require('jsonwebtoken');


module.exports.signin = async function(req, res){

    try{
        let user = await User.findOne({email: 'pratyushk039@gmail.com'});
        console.log(user);
        if (!user || user.password != '1'){
            return res.json(422, {
                message: "Invalid username or password"
            });
        }
        console.log('signed in')
        return res.json(200, {
            message: 'Sign in successful, here is your token, please keep it safe!',
            data:  {
                token: jwt.sign(user.toJSON(), 'codeial', {expiresIn:  '100000'})
            }
        })

    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}