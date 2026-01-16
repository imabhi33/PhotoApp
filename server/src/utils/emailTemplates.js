// Premium Email Styles
const styles = {
    container: `background-color: #0a0a0a; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; color: #fdfbf7;`,
    wrapper: `max-w-2xl; margin: 0 auto; background-color: #111111; border: 1px solid #333; border-radius: 8px; overflow: hidden;`,
    header: `background-color: #000; padding: 30px; text-align: center; border-bottom: 1px solid #d4af37;`,
    logo: `color: #fdfbf7; font-size: 24px; letter-spacing: 2px; text-transform: uppercase; font-weight: bold; text-decoration: none;`,
    body: `padding: 40px 30px; line-height: 1.6; color: #cccccc;`,
    h1: `color: #d4af37; font-size: 24px; margin-bottom: 20px; font-weight: 300;`,
    h2: `color: #fdfbf7; font-size: 18px; margin-top: 30px; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 1px; font-size: 14px;`,
    p: `margin-bottom: 15px; font-size: 16px;`,
    detailsBox: `background-color: #1a1a1a; padding: 20px; border-left: 2px solid #d4af37; margin: 25px 0;`,
    detailRow: `display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px solid #333; padding-bottom: 5px;`,
    label: `color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;`,
    value: `color: #fff; font-size: 14px; font-weight: 500;`,
    footer: `text-align: center; padding: 30px; font-size: 12px; color: #555; border-top: 1px solid #222;`,
    button: `display: inline-block; padding: 12px 24px; background-color: #d4af37; color: #000; text-decoration: none; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; font-size: 12px; margin-top: 20px; border-radius: 2px;`
};

// Helper for formatted date
const formatDate = (dateStr) => {
    if (!dateStr) return 'TBD';
    return new Date(dateStr).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export const getInquiryReceivedTemplate = ({ name, eventType, eventDate, location }) => {
    return `
    <div style="${styles.container}">
        <div style="max-width: 600px; margin: 0 auto; background-color: #111; border: 1px solid #222;">
            <div style="${styles.header}">
                <a href="#" style="${styles.logo}">Photoshopy</a>
            </div>
            <div style="${styles.body}">
                <h1 style="${styles.h1}">Booking Inquiry Received</h1>
                <p style="${styles.p}">Dear <strong>${name}</strong>,</p>
                <p style="${styles.p}">Thank you for choosing us to capture your story. We have received your request regarding <strong>${eventType}</strong> photography.</p>
                <p style="${styles.p}">We are currently reviewing your details and will get back to you shortly to discuss the possibilities.</p>
                
                <div style="${styles.detailsBox}">
                    <p style="margin:0 0 10px 0; color:#d4af37; font-size:12px; text-transform:uppercase; letter-spacing:2px;">Request Details</p>
                    <div style="margin-bottom:8px;"><span style="color:#666;">Event:</span> <strong style="color:#fff;">${eventType}</strong></div>
                    <div style="margin-bottom:8px;"><span style="color:#666;">Date:</span> <strong style="color:#fff;">${formatDate(eventDate)}</strong></div>
                    <div style="margin-bottom:0;"><span style="color:#666;">Location:</span> <strong style="color:#fff;">${location}</strong></div>
                </div>

                <p style="${styles.p}">If you have any immediate questions, feel free to reply to this email.</p>
                <p style="${styles.p}">Warmly,<br>The Photoshopy Team</p>
            </div>
            <div style="${styles.footer}">
                <p>&copy; ${new Date().getFullYear()} Photoshopy. All rights reserved.</p>
            </div>
        </div>
    </div>
    `;
};

export const getBookingConfirmedTemplate = ({ name, eventType, eventDate, location }) => {
    return `
    <div style="${styles.container}">
        <div style="max-width: 600px; margin: 0 auto; background-color: #111; border: 1px solid #222;">
            <div style="${styles.header}">
                <a href="#" style="${styles.logo}">Photoshopy</a>
            </div>
            <div style="${styles.body}">
                <h1 style="${styles.h1}">Booking Confirmed!</h1>
                <p style="${styles.p}">Dear <strong>${name}</strong>,</p>
                <p style="${styles.p}">We are thrilled to confirm your booking! We are honored to be a part of your journey and look forward to capturing beautiful memories on your special day.</p>
                
                <div style="${styles.detailsBox}">
                    <p style="margin:0 0 10px 0; color:#d4af37; font-size:12px; text-transform:uppercase; letter-spacing:2px;">Confirmed Details</p>
                    <div style="margin-bottom:8px;"><span style="color:#666;">Event:</span> <strong style="color:#fff;">${eventType}</strong></div>
                    <div style="margin-bottom:8px;"><span style="color:#666;">Date:</span> <strong style="color:#fff;">${formatDate(eventDate)}</strong></div>
                    <div style="margin-bottom:0;"><span style="color:#666;">Location:</span> <strong style="color:#fff;">${location}</strong></div>
                </div>

                <p style="${styles.p}">We will be in touch closer to the date to finalize any remaining logistical details.</p>
                <div style="text-align: center;">
                    <a href="#" style="${styles.button}">View Your Booking</a>
                </div>
            </div>
            <div style="${styles.footer}">
                <p>&copy; ${new Date().getFullYear()} Photoshopy. All rights reserved.</p>
            </div>
        </div>
    </div>
    `;
};

export const getBookingDeclinedTemplate = ({ name, eventType, eventDate }) => {
    return `
    <div style="${styles.container}">
        <div style="max-width: 600px; margin: 0 auto; background-color: #111; border: 1px solid #222;">
            <div style="${styles.header}">
                <a href="#" style="${styles.logo}">Photoshopy</a>
            </div>
            <div style="${styles.body}">
                <h1 style="${styles.h1}" style="color: #999;">Update on Your Request</h1>
                <p style="${styles.p}">Dear <strong>${name}</strong>,</p>
                <p style="${styles.p}">Thank you so much for considering Photoshopy for your <strong>${eventType}</strong>.</p>
                <p style="${styles.p}">Unfortunately, we are unable to accept your booking request for <strong>${formatDate(eventDate)}</strong> at this time. This is often due to prior commitments on the requested date.</p>
                <p style="${styles.p}">We sincerely apologize for any inconvenience and wish you the very best for your event.</p>
                <p style="${styles.p}">Warmly,<br>The Photoshopy Team</p>
            </div>
            <div style="${styles.footer}">
                <p>&copy; ${new Date().getFullYear()} Photoshopy. All rights reserved.</p>
            </div>
        </div>
    </div>
    `;
};

export const getContactMessageTemplate = ({ name, email, subject, message }) => {
    return `
    <div style="${styles.container}">
        <div style="max-width: 600px; margin: 0 auto; background-color: #111; border: 1px solid #222;">
            <div style="${styles.header}">
                <a href="#" style="${styles.logo}">Photoshopy</a>
            </div>
            <div style="${styles.body}">
                <h1 style="${styles.h1}">New Contact Message</h1>
                <p style="${styles.p}">You have received a new message via the contact form.</p>
                
                <div style="${styles.detailsBox}">
                    <p style="margin:0 0 10px 0; color:#d4af37; font-size:12px; text-transform:uppercase; letter-spacing:2px;">Sender Details</p>
                    <div style="margin-bottom:8px;"><span style="color:#666;">Name:</span> <strong style="color:#fff;">${name}</strong></div>
                    <div style="margin-bottom:8px;"><span style="color:#666;">Email:</span> <strong style="color:#fff;">${email}</strong></div>
                    <div style="margin-bottom:8px;"><span style="color:#666;">Subject:</span> <strong style="color:#fff;">${subject}</strong></div>
                    <div style="margin-top:15px; border-top:1px solid #333; padding-top:10px;">
                        <span style="color:#666; display:block; margin-bottom:5px;">Message:</span>
                        <div style="color:#fff; white-space: pre-wrap;">${message}</div>
                    </div>
                </div>

                <p style="${styles.p}" style="font-size: 14px; color: #666;">You can reply directly to this email to contact the sender.</p>
            </div>
            <div style="${styles.footer}">
                <p>&copy; ${new Date().getFullYear()} Photoshopy. All rights reserved.</p>
            </div>
        </div>
    </div>
    `;
};
