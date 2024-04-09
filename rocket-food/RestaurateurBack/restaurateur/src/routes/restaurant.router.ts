import {Router} from "express";
import {createRestaurant} from "../controller/restaurant.controller";


const router = Router()

router.post('/create',  createRestaurant);

export default router;