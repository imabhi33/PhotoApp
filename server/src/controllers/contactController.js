import Contact from '../models/Contact.js';
import { sendEmail } from '../config/email.js';
import { getContactMessageTemplate } from '../utils/emailTemplates.js';

export const createContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Create new contact
        const contact = new Contact({
            name,
            email,
            subject,
            message
        });

        await contact.save();

        // Send Email Notification to Admin
        const emailHtml = getContactMessageTemplate({
            name,
            email,
            subject,
            message
        });

        await sendEmail({
            to: process.env.EMAIL_USER, // Send to site owner
            replyTo: email, // Reply goes to the user
            subject: `New Message from ${name} - Photoshopy Contact`,
            html: emailHtml
        });

        res.status(201).json({
            success: true,
            message: 'Thank you for contacting us! We will get back to you soon.',
            data: contact
        });
    } catch (error) {
        console.error('Error creating contact:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to submit contact form. Please try again later.'
        });
    }
};

export const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts
        });
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch contacts'
        });
    }
};
