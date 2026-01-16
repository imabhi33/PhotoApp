import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// Create Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log('Email Service Error:', error);
    } else {
        console.log('✅ Email Service Ready');
    }
});

export const sendEmail = async ({ to, subject, html, replyTo }) => {
    try {
        const mailOptions = {
            from: `"Photoshopy" <${process.env.EMAIL_USER}>`,
            to,
            replyTo, // Allow replying to the sender
            subject,
            html,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error: error.message };
    }
};
