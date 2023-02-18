import express from 'express';
import { verifyAdmin } from '../middleware/verifyToken.js';
import {createTour ,updateTour, deleteTour, getSingleTour, getAllTour, getTourBySearch, getFeaturedTour, getTourCount} from './../controllers/tourController.js'

const router = express.Router();

// create new tour
router.post("/", verifyAdmin, createTour);

// updater tour
router.put("/:id", verifyAdmin, updateTour);

// delete tour
router.delete("/:id",verifyAdmin, deleteTour);

// get single tour
router.get("/search/getTourBySearch/:id", getSingleTour);

// get all tour
router.get("/", getAllTour);

// get tour by search
router.get("", getTourBySearch)
router.get("/search/getFeaturedTours", getFeaturedTour)
router.get("/search/getTourCount", getTourCount)

export default router