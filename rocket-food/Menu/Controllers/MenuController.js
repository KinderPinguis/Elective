const jwt = require('jsonwebtoken');
const MenuModel = require('../Models/MenuModel');
const bcrypt = require('bcrypt');

exports.createMenu = async (req, res) => {
    try {
        const newMenu = new MenuModel(req.body);
        await newMenu.save();

        res.status(200).json({ message: "Menu Created !" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getMenuByIdRestaurant = async (req, res) => {
    try {
        const idRestaurant = req.params.id;
        const menu = await MenuModel.find({ idRestaurant: idRestaurant });
        res.status(200).json(menu);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.updateMenu = async (req, res) => {
    try {
        const { id } = req.params;
        const menuData = req.body;
        const updatedMenu = await MenuModel.findByIdAndUpdate(id, menuData, { new: true });
        if (!updatedMenu) throw new Error('Menu not found');
        res.status(200).json(updatedMenu);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.deleteMenu = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMenu = await MenuModel.findByIdAndDelete(id);
        if (!deletedMenu) throw new Error('Menu not found');
        res.status(200).json({ message: 'Menu deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};