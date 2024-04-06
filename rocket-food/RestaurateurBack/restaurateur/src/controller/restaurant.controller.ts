import {NextFunction, Request, Response} from "express";
import restaurantModel from "../model/restaurant.model";

async function createRestaurant(req: Request, res: Response, next: NextFunction){
    try{
        const createRestaurant = new restaurantModel({
            nameRestaurant: req.body.nameRestaurant,
            streetNumber:  req.body.streetNumber,
            street: req.body.street,
            postalCode: req.body.postalCode,
            city: req.body.city,
            creationDate: Date(),
            owner: req.body.owner,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            password: req.body.password,
            categories: req.body.categories
        });
        const saveRestaurant = await createRestaurant.save();
        res.status(200).json(saveRestaurant);
    }
    catch (e)
    {
        console.error(e);
        next(e);
    }
};

export {
    createRestaurant
};