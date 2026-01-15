import express from 'express';
import {
    createBooking,
    getAllBookings,
    updateBookingStatus
} from '../controllers/bookingController.js';

const router = express.Router();

// POST /api/bookings - Create new booking
router.post('/', createBooking);

// GET /api/bookings - Get all bookings (for admin panel - future)
router.get('/', getAllBookings);

// PATCH /api/bookings/:id - Update booking status (for admin panel - future)
router.patch('/:id', updateBookingStatus);

export default router;
