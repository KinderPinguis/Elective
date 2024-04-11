import {Router} from "express";
import {
    createRestaurant,
    deleteRestaurant, getRestaurantByCategories, getRestaurantById,
    getRestaurantByIdRestaurateur,
    updateRestaurant
} from "../controller/restaurant.controller";
import {createCategory, getCategoryById, getCategories} from "../controller/category.controller";


const router = Router()

router.post('/restaurant',  createRestaurant);
router.post('/category',  createCategory);
router.get('/categories', getCategories);
router.get('/category/:id', getCategoryById);
router.get('/restaurant/:id', getRestaurantById);
router.get('/restaurantByIdRestaurateur/:id', getRestaurantByIdRestaurateur);
router.get('/restaurantCategories/:categories', getRestaurantByCategories);
router.put('/restaurant/:id', updateRestaurant);
router.delete('/restaurant/:id', deleteRestaurant);

export default router;