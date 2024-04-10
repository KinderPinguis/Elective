const express = require('express');
const articleController = require('../Controllers/ArticleController');

const router = express.Router();

router.post('/article', articleController.createArticle);
router.get('/article/:id', articleController.getArticleByIdRestaurant);
router.put('/article/:id', articleController.updateArticle);
router.delete('/article/:id', articleController.deleteArticle);

const { authMiddleware } = require('../Middlewares/AuthMiddleware');
router.use(authMiddleware);

module.exports = router;