const express = require('express');
const menuController = require('../Controllers/MenuController');

const router = express.Router();

router.post('/menu', menuController.createMenu);
router.get('/menu/:id', menuController.getMenuByIdRestaurant);
router.put('/menu/:id', menuController.updateMenu);
router.delete('/menu/:id', menuController.deleteMenu);

const { authMiddleware } = require('../Middlewares/AuthMiddleware');
router.use(authMiddleware);

module.exports = router;