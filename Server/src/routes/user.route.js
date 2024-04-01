const express = require('express');
const bcrypt = require("bcrypt");
const router = express.Router();
const { registerUser, loginUser } = require('../middleware/auth.js');
const User = require('../models/user.model.js');
const isAuthenticated = require('../middleware/cartAuth.js');

 

router.post('/register', async (req, res) => {
    try {
        const { name, email, mobile, password } = req.body;
        const { newUser, token } = await registerUser({ name, email, mobile, password });
        res.status(201).json({ success: true, user: newUser, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


//login user route;

router.post('/login', async (req, res) => {
    try {
        const { emailOrMobile, password } = req.body;
        const { user, token } = await loginUser(emailOrMobile, password);
        res.json({user, token });
    } catch (error) {
        res.status(401).json({error: error.message });
        
    }
});
router.get('/showname',isAuthenticated, async (req, res) => {
    try {
      
      const userId = req.user._id; 
     
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
     
      res.json({ name: user.name });
    } catch (error) {
      console.error('Error fetching user profile:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });





module.exports = router;
