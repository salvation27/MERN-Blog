const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const UserSchema = new mongoose.Schema({
    email:{
        type:'string',
        lowercase:true,
        unique:true,
        required:[true,'Cant be blank'],
        match:[/\S+@\S+\.\S+/,'isinvalid'],
        index:true
    },
    password:{
        type:'string',
        required:[true,'Cant be blank'],
    },
    token:[],
    articles:[]
})



UserSchema.pre('save',function(next){
const user = this
if(!user.isModified('password')) return next()

// if user being created,or updated
bcrypt.genSalt(10,function(err,salt){
    if(err) return next(err)
    bcrypt.hash(user.password,salt,function(err,hash){
        if(err) return next(err)
        user.password = hash
        next()
    })
})

})

UserSchema.methods.generateAuthToken = async function() {
    const user = this
    const token = jwt.sign({_id:user._id.toString()},'appSecret')
    user.tokens.concat({token})
    await user.save()
    return
}

UserSchema.statics.findByCredentials = async function (email,password) {
    const user = await User.findOne({email})
    if(!user) throw new Error('Invalid Email or password')
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch) throw new Error('Invalid Email or password')

    // if there is match
    return user
}


const User = mongoose.model('User',UserSchema)

module.exports = User