import express from 'express';
import { createContact, getAllContacts } from '../controllers/contactController.js';

const router = express.Router();

// POST /api/contact - Create new contact
router.post('/', createContact);

// GET /api/contact - Get all contacts (for admin panel - future)
router.get('/', getAllContacts);

export default router;
