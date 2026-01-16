import express from 'express';
import multer from 'multer';
import { uploadPhoto, getPhotos, deletePhoto } from '../controllers/galleryController.js';

const router = express.Router();

// Configure Multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Routes
router.post('/upload', upload.single('image'), uploadPhoto);
router.get('/', getPhotos);
router.delete('/:id', deletePhoto);

export default router;
