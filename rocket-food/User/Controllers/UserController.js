const { Request, Response } = require('express');
const jwt = require('jsonwebtoken');
const UserModel = require('../Models/UserModel');
const bcrypt = require('bcrypt');

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

        const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_JWT_KEY, { expiresIn: '1h' });

        res.status(200).json({ message: "You are now connected !", accessToken });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        const { password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        req.body.password = hashedPassword;
        const newUser = new UserModel(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
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
        const user = await UserModel.findById(req.params.id);
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