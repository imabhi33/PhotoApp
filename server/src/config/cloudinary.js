import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

console.log('Cloudinary Config Loading:');
console.log('Cloud Name:', process.env.CLOUD_NAME);
console.log('API Key:', process.env.API_KEY ? 'Loaded' : 'Missing');
console.log('API Secret:', process.env.API_SECRET ? 'Loaded' : 'Missing');

const cloud_name = process.env.CLOUD_NAME?.trim();
const api_key = process.env.API_KEY?.trim();
const api_secret = process.env.API_SECRET?.trim();

console.log('Cloudinary Config Loading:');
console.log('Cloud Name:', cloud_name);
console.log('API Key:', api_key ? 'Loaded' : 'Missing');
console.log('API Secret:', api_secret ? 'Loaded' : 'Missing');

cloudinary.config({
    cloud_name: cloud_name,
    api_key: api_key,
    api_secret: api_secret
});

export default cloudinary;
