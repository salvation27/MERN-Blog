const router = require('express').Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    await user.generateAuthToken();
    res.status(201).json(user);
  } catch (error) {
    let msg;
    if (error.code == 11000) {
      msg = "Email alredy exists";
    } else {
      msg = error.message;
    }
    res.status(400).json(msg);
  }
});



router.post('/login', async(req,res)=>{
    const{email,password}=req.body
    try {
        const user = await User.findByCredentials(email,password)
        await user.generateAuthToken()
        res.json(user)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

module.exports = router;