const { User } = require('../models/user'); // CommonJS version



const signin = async(email, pass) => {
try {
    const user = await User.findOne({email})
    const checkPass = await user.comparePassword(pass)
    if(!checkPass) {
        throw new Error("Enter correct password")
    }
    return user;
} catch(err) {
    throw err; 
}

}




module.exports = {signin};