const express = require('express');
const deliveryController = require('../Controllers/DeliveryController');

const router = express.Router();

router.post('/deliveryHistory', deliveryController.createDeliveryHistory);
router.get('/deliveryHistory/:id', deliveryController.getDeliveryHistoryByIdDriver);
router.post('/checkCode/', deliveryController.checkCode);

const { authMiddleware } = require('../Middlewares/AuthMiddleware');
router.use(authMiddleware);

module.exports = router;