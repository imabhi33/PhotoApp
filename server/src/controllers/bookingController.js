import Booking from '../models/Booking.js';
import { sendEmail } from '../config/email.js';
import {
    getInquiryReceivedTemplate,
    getBookingConfirmedTemplate,
    getBookingDeclinedTemplate
} from '../utils/emailTemplates.js';

export const createBooking = async (req, res) => {
    try {
        const { name, email, phone, eventType, eventDate, location, message } = req.body;

        // Validate required fields
        if (!name || !email || !phone || !eventType || !eventDate || !location) {
            return res.status(400).json({
                success: false,
                message: 'All required fields must be filled'
            });
        }

        // Create new booking
        const booking = new Booking({
            name,
            email,
            phone,
            eventType,
            eventDate,
            location,
            message
        });

        await booking.save();

        // Send Auto-Reply Email
        const emailHtml = getInquiryReceivedTemplate({
            name,
            eventType,
            eventDate,
            location
        });

        await sendEmail({
            to: email,
            subject: `Thank you for your inquiry: ${eventType} Photography`,
            html: emailHtml
        });

        res.status(201).json({
            success: true,
            message: 'Booking request submitted successfully! We will contact you soon.',
            data: booking
        });
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to submit booking. Please try again later.'
        });
    }
};

export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: bookings.length,
            data: bookings
        });
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch bookings'
        });
    }
};

export const updateBookingStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!['pending', 'confirmed', 'cancelled'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid status value'
            });
        }

        const booking = await Booking.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: 'Booking not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Booking status updated successfully',
            data: booking
        });

        // Send Status Update Email
        let emailHtml = null;
        let subject = '';

        if (status === 'confirmed') {
            emailHtml = getBookingConfirmedTemplate({
                name: booking.name,
                eventType: booking.eventType,
                eventDate: booking.eventDate,
                location: booking.location
            });
            subject = 'Booking Confirmed! - Photoshopy';
        } else if (status === 'cancelled') {
            emailHtml = getBookingDeclinedTemplate({
                name: booking.name,
                eventType: booking.eventType,
                eventDate: booking.eventDate
            });
            subject = 'Update regarding your booking request - Photoshopy';
        }

        if (emailHtml) {
            await sendEmail({
                to: booking.email,
                subject,
                html: emailHtml
            });
        }
    } catch (error) {
        console.error('Error updating booking:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update booking status'
        });
    }
};
