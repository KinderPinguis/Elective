import {NextFunction, Request, Response} from "express";
import restaurantModel from "../model/restaurant.model";

async function createRestaurant(req: Request, res: Response, next: NextFunction){
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

export {
    createRestaurant
};