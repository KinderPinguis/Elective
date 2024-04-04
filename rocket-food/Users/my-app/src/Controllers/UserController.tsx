import { Request, Response } from 'express';
import UserModel from '../Models/UserModels';

export const createUser = async (req: Request, res: Response) => {
    try {
        const userData = req.body;
        const newUser = new UserModel(userData);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) throw new Error('User not found');
        res.status(200).json(user);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userData = req.body;
        const updatedUser = await UserModel.findByIdAndUpdate(id, userData, { new: true });
        if (!updatedUser) throw new Error('User not found');
        res.status(200).json(updatedUser);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedUser = await UserModel.findByIdAndDelete(id);
        if (!deletedUser) throw new Error('User not found');
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};