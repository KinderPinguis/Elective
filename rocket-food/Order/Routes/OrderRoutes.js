const express = require('express');
const orderController = require('../Controllers/OrderController');

const router = express.Router();

router.post('/order', orderController.createOrder);
router.get('/order/:id', orderController.getOrderByIdRestaurant);
router.put('/order/:id', orderController.updateOrder);
router.delete('/order/:id', orderController.deleteOrder);

const { authMiddleware } = require('../Middlewares/AuthMiddleware');
router.use(authMiddleware);

module.exports = router;