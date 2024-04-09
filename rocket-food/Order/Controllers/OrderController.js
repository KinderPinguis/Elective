const jwt = require('jsonwebtoken');
const OrderModel = require('../Models/OrderModel');
const bcrypt = require('bcrypt');

exports.createOrder = async (req, res) => {
    try {
        const newOrder = new OrderModel(req.body);
        await newOrder.save();

        res.status(200).json({ message: "Order created !" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getOrderByIdRestaurant = async (req, res) => {
    try {
        const idRestaurant = req.params.id;
        const order = await OrderModel.find({ idRestaurant: idRestaurant });
        res.status(200).json(order);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const orderData = req.body;
        const updatedOrder = await OrderModel.findByIdAndUpdate(id, orderData, { new: true });
        if (!updatedOrder) throw new Error('Order not found');
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedOrder = await OrderModel.findByIdAndDelete(id);
        if (!deletedOrder) throw new Error('Order not found');
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};