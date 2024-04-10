const jwt = require('jsonwebtoken');
const DeliveryModel = require('../Models/DeliveryModel');
const bcrypt = require('bcrypt');

exports.createDeliveryHistory = async (req, res) => {
    try {
        const newDeliveryHistory = new DeliveryModel(req.body);
        await newDeliveryHistory.save();

        res.status(200).json({ message: "Delivery History Created !" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getDeliveryHistoryByIdDriver = async (req, res) => {
    try {
        const idDriver = req.params.id;
        const deliveryHistory = await DeliveryModel.find({ idDriver: idDriver });
        res.status(200).json(deliveryHistory);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.checkCode = async (req, res) => {
    try {
        const { id, codeDelivery } = req.body;
        const order = await DeliveryModel.findOne({ _id: id });

        if (!order) {
            return res.status(401).json({ message: 'Order not founded' });
        }

        if(order.codeDelivery === codeDelivery)
        {
            res.status(200).json(true);
        }

        res.status(200).json(false);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};