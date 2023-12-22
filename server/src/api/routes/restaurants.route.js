import express from "express"
import RestaurantsCtrl from "../restaurants.controller.js"

const router = express.Router()
router.route("/").post(RestaurantsCtrl.apiPostRestaurant)
router.route("/").get(RestaurantsCtrl.apiGetRestaurants)
router.route("/").put(RestaurantsCtrl.apiUpdateRestaurant)
router.route("/").delete(RestaurantsCtrl.apiDeleteRestaurant)
router.route("/geotest").post(RestaurantsCtrl.apiGetPostRestaurantByLocation)
router.route("/id/:id").get(RestaurantsCtrl.apiGetRestaurantById)
router.route("/cuisines").get(RestaurantsCtrl.apiGetRestaurantCuisines)

export default router 