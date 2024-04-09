import {NextFunction, Request, Response} from "express";
import restaurantModel from "../model/restaurant.model";

export async function createRestaurant(req: Request, res: Response, next: NextFunction){
    try{
        const newRestaurant = new restaurantModel(req.body);
        await newRestaurant.save();
        res.status(200).json(newRestaurant);
    }
    catch (e)
    {
        console.error(e);
        next(e);
    }
}

export async function getRestaurantByIdRestaurateur(req: Request, res: Response) {
    try {
        const idRestaurateur = req.params.id;
        const restaurant = await restaurantModel.find({ idRestaurateur: idRestaurateur });
        res.status(200).json(restaurant);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

export async function getRestaurantByCategories(req: Request, res: Response) {
    try {
        const categories = req.params.categories;
        const restaurant = await restaurantModel.find({ categories: categories });
        res.status(200).json(restaurant);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

export async function updateRestaurant(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const restaurantData = req.body;
        const updatedRestaurant = await restaurantModel.findByIdAndUpdate(id, restaurantData, { new: true });
        if (!updatedRestaurant) throw new Error('Restaurant not found');
        res.status(200).json(updatedRestaurant);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

export async function deleteRestaurant(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const deletedRestaurant = await restaurantModel.findByIdAndDelete(id);
        if (!deletedRestaurant) throw new Error('Restaurant not found');
        res.status(200).json({ message: 'Restaurant deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error });
    }
};