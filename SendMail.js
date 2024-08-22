const nodemailer = require('nodemailer');
require('dotenv').config();
const path = require('path');
const fs = require('fs');

// responsible for communication for gmail service provider
const userEmail =  process.env.USER1;
const AppPassword = process.env.APP_PASSWORD;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: userEmail,
        pass: AppPassword,
    },
});

const htmlTemplate = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
const mailOptions = {
    form: {
        name: 'Web Wizard',
        address: process.env.USER
    },
    to: ['subhankarbasfore12@gmail.com'],
    subject: 'IIT confirmation',
    text: 'hello world',
    html: htmlTemplate,
    attachments: [
        {
            filename: 'test.pdf',
            path: path.join(__dirname, 'test.pdf'),
            contentType: 'application/pdf'
        },
        {
            filename: 'sample.jpeg',
            path: path.join(__dirname, 'sample.jpeg'),
            contentType: 'image/jpeg'
        },
    ]
}

const sendMail = async (transporter, mailOptions) => {
    try {
        await transporter.sendMail(mailOptions)
        console.log('Mail has been sent.');
    } catch (error) {
        console.error(error);
    }
}

sendMail(transporter, mailOptions);