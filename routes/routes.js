import express from "express";
import {getAllProduct, getProductPerCategory, testFunction} from "../Controllers/ProductController.js";

const app =  express()
const router = express.Router();

router.get("/all",getAllProduct)
router.get("/create",testFunction)
router.get("/category", getProductPerCategory)

export default router;


