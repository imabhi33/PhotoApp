import Gallery from '../models/Gallery.js';
import cloudinary from '../config/cloudinary.js';
import streamifier from 'streamifier';

// Helper function to upload to Cloudinary via stream
const uploadToCloudinary = (buffer) => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder: 'photoshopy_gallery',
            },
            (error, result) => {
                if (result) {
                    resolve(result);
                } else {
                    reject(error);
                }
            }
        );
        streamifier.createReadStream(buffer).pipe(uploadStream);
    });
};

export const uploadPhoto = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No image file provided' });
        }

        const { title, category } = req.body;
        if (!title || !category) {
            return res.status(400).json({ message: 'Title and category are required' });
        }

        // Upload to Cloudinary
        const result = await uploadToCloudinary(req.file.buffer);

        // Create DB Record
        const newPhoto = await Gallery.create({
            title,
            category,
            imageUrl: result.secure_url,
            publicId: result.public_id
        });

        res.status(201).json({
            message: 'Photo uploaded successfully',
            photo: newPhoto
        });

    } catch (error) {
        console.error('Upload Error:', error);
        res.status(500).json({ message: 'Server error during upload', error: error.message });
    }
};

export const getPhotos = async (req, res) => {
    try {
        const { category } = req.query;
        let query = {};

        if (category && category !== 'All') {
            query.category = category;
        }

        const photos = await Gallery.find(query).sort({ createdAt: -1 });
        res.json(photos);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch photos', error: error.message });
    }
};

export const deletePhoto = async (req, res) => {
    try {
        const { id } = req.params;
        const photo = await Gallery.findById(id);

        if (!photo) {
            return res.status(404).json({ message: 'Photo not found' });
        }

        // Delete from Cloudinary
        await cloudinary.uploader.destroy(photo.publicId);

        // Delete from DB
        await Gallery.findByIdAndDelete(id);

        res.json({ message: 'Photo deleted successfully' });
    } catch (error) {
        console.error('Delete Error:', error);
        res.status(500).json({ message: 'Failed to delete photo', error: error.message });
    }
};
