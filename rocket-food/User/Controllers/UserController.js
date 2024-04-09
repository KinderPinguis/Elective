const jwt = require('jsonwebtoken');
const UserModel = require('../Models/UserModel');
const bcrypt = require('bcrypt');

const generateAccessToken = (userId) => {
    return jwt.sign({ userId }, process.env.ACCESS_JWT_KEY, { expiresIn: '10min' });
};

const generateRefreshToken = (userId) => {
    return jwt.sign({ userId }, process.env.REFRESH_JWT_KEY, { expiresIn: '1d' });
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email: email });

        if (!user) {
            return res.status(401).json({ message: 'Email not founded' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Wrong password' });
        }

        const userId = user._id;
        const typeUser = user.type;
        const accessToken = generateAccessToken(userId);
        const refreshToken = generateRefreshToken(userId);

        res.status(200).json({ message: "You are now connected !", accessToken, refreshToken, userId, typeUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email: email });

        if (user) {
            return res.status(401).json({ message: 'Email already in use' });
        }
        req.body.password = await bcrypt.hash(password, 10);
        const newUser = new UserModel(req.body);
        await newUser.save();

        const userId = newUser._id;
        const typeUser = newUser.type;
        const accessToken = generateAccessToken(userId);
        const refreshToken = generateRefreshToken(userId);

        res.status(200).json({ message: "You are now connected !", accessToken, refreshToken, userId, typeUser });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.refreshToken = async (req, res) => {
    try {
        const refreshToken = req.body.refreshToken;
        if (!refreshToken) {
            return res.status(400).json({ message: 'Refresh token is required' });
        }

        const decoded = jwt.verify(refreshToken, process.env.REFRESH_JWT_KEY);
        const userId = decoded.userId;

        const accessToken = generateAccessToken(userId);

        res.status(200).json({ accessToken });
    } catch (error) {
        res.status(401).json({ message: 'Invalid refresh token' });
    }
};


exports.getUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await UserModel.findById(userId);
        if (!user) throw new Error('User not found');
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userData = req.body;
        const updatedUser = await UserModel.findByIdAndUpdate(id, userData, { new: true });
        if (!updatedUser) throw new Error('User not found');
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await UserModel.findByIdAndDelete(id);
        if (!deletedUser) throw new Error('User not found');
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};