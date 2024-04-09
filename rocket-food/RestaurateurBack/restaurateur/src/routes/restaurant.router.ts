import {Router} from "express";
import {
    createRestaurant,
    deleteRestaurant, getRestaurantByCategories,
    getRestaurantByIdRestaurateur,
    updateRestaurant
} from "../controller/restaurant.controller";


const router = Router()

router.post('/restaurant',  createRestaurant);
router.get('/restaurant/:id', getRestaurantByIdRestaurateur);
router.get('/restaurantCategories/:categories', getRestaurantByCategories);
router.put('/restaurant/:id', updateRestaurant);
router.delete('/restaurant/:id', deleteRestaurant);

export default router;