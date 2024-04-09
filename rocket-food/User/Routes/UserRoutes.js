const express = require('express');
const userController = require('../Controllers/UserController');

const router = express.Router();

router.post('/login', userController.login);
router.post('/users', userController.createUser);

const { authMiddleware } = require('../Middlewares/AuthMiddleware');
router.use(authMiddleware);

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;