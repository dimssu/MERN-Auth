const bcrypt = require('bcrypt');
const UserModel = require('../Models/User');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
            .json({ message: 'User already exists, you can login', success: false });
        }
        const userModel = new UserModel({
            name,
            email,
            password
        });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201).json({
            message: 'User created successfully',
            success: true
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            success: false
        });

    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMsg = 'Invalid credentials';
        if (!user) {
            return res.status(403)
            .json({ message: errorMsg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403)
            .json({ message: errorMsg, success: false });
        }
        const jwtToken = jwt.sign({
            id: user._id,
            email: user.email
        }, process.env.JWT_SECRET, {
            expiresIn: '10h'
        });
        res.status(200).json({
            message: 'Login successful',
            jwtToken,
            email,
            name: user.name,
            success: true
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            success: false
        });

    }
}

module.exports = {
    signup,
    login
}