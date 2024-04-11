import {NextFunction, Request, Response} from "express";
import categoryModel from "../model/category.model";

export async function createCategory(req: Request, res: Response, next: NextFunction){
    try{
        const newCategory = new categoryModel(req.body);
        await newCategory.save();
        res.status(200).json(newCategory);
    }
    catch (e)
    {
        console.error(e);
        next(e);
    }
}

export async function getCategoryById(req: Request, res: Response) {
    try {
        const idCategory = req.params.id;
        const category = await categoryModel.findById(idCategory);
        res.status(200).json(category);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export async function getCategories(req: Request, res: Response) {
    try {
        const categories = await categoryModel.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}
