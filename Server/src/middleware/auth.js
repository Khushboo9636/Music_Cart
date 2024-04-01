// auth.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model.js');

const registerUser = async ({ name, email, mobile, password }) => {
    try {
        if(!name){
            throw new Error('Name is Required');
        }
        if(!email){
            throw new Error('Email is Required');
        }
        if(!mobile){
            throw new Error('Mobile is Required');
        }
        if(!password){
            throw new Error('Password is Required');
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error('Email already exists. Please use a different email address.');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, mobile, password: hashedPassword });
       
        // Generate token for the newly registered user
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET_KEY);
        newUser.save();
        return { newUser, token };
    } catch (error) {
        throw error;
    }
};

const loginUser = async (emailOrMobile, password) => {
    try {
        console.log("emailOrMobile:", emailOrMobile);
        console.log("password:", password);

        let user = await User.findOne({ email: emailOrMobile });
        
        if (!user) {
            user = await User.findOne({ mobile: emailOrMobile });
        }

        console.log("user:", user);

        if (!user) {
            throw new Error('Invalid email or mobile number');
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            throw new Error('Incorrect password');
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);
        return { user, token };
    } catch (error) {
        throw error;
    }
};

module.exports = { registerUser, loginUser };
