const jwt = require('jsonwebtoken');
const ArticleModel = require('../Models/ArticleModel');
const bcrypt = require('bcrypt');

exports.createArticle = async (req, res) => {
    try {
        const newArticle = new ArticleModel(req.body);
        await newArticle.save();

        res.status(200).json({ message: "Article Created !" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getArticleByIdRestaurant = async (req, res) => {
    try {
        const idRestaurant = req.params.id;
        const article = await ArticleModel.find({ idRestaurant: idRestaurant });
        res.status(200).json(menu);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.updateArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const articleData = req.body;
        const updatedArticle = await ArticleModel.findByIdAndUpdate(id, articleData, { new: true });
        if (!updatedArticle) throw new Error('Article not found');
        res.status(200).json(updatedArticle);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.deleteArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedArticle = await ArticleModel.findByIdAndDelete(id);
        if (!deletedArticle) throw new Error('Article not found');
        res.status(200).json({ message: 'Article deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};