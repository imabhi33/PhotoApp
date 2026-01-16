import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load env from current directory
dotenv.config({ path: path.join(__dirname, '.env') });

console.log('--- Cloudinary Connection Test ---');
console.log('Reading credentials from:', path.join(__dirname, '.env'));

const cloud_name = process.env.CLOUD_NAME?.trim();
const api_key = process.env.API_KEY?.trim();
const api_secret = process.env.API_SECRET?.trim();

console.log('Cloud Name:', cloud_name);
console.log('API Key:', api_key ? `${api_key.substring(0, 4)}... (Length: ${api_key.length})` : 'MISSING');
console.log('API Secret:', api_secret ? `${api_secret.substring(0, 4)}... (Length: ${api_secret.length})` : 'MISSING');

if (!cloud_name || !api_key || !api_secret) {
    console.error('ERROR: One or more credentials are missing in .env');
    process.exit(1);
}

cloudinary.config({
    cloud_name,
    api_key,
    api_secret
});

// Test Upload
console.log('\nAttempting to verify credentials...');

cloudinary.api.ping((error, result) => {
    if (error) {
        console.error('❌ Connection Failed:', error);
    } else {
        console.log('✅ Connection Successful! Credentials are valid.');
        console.log('Ping Result:', result);
    }
});
