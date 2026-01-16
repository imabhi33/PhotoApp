import mongoose from 'mongoose';

const gallerySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Wedding Stories', 'Cinematic Films', 'Pre-Wedding', 'Editorial', 'Travel', 'Portraits']
    },
    imageUrl: {
        type: String,
        required: true
    },
    publicId: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const Gallery = mongoose.model('Gallery', gallerySchema);

export default Gallery;
