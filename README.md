# Node.js Email Sender with Attachments

This project is a Node.js application that demonstrates how to send emails with attachments using Nodemailer and Gmail as the SMTP service provider. It supports sending both plain text and HTML emails, and allows you to attach multiple files, such as PDFs and images.

## Features

- **Send Emails**: Supports sending plain text and HTML formatted emails.
- **Attachments**: Attach multiple files, including PDFs and images.
- **Secure Authentication**: Uses environment variables for secure handling of credentials.
- **Gmail SMTP**: Configurable SMTP settings for sending emails through Gmail.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**
   ```bash
   cd <project-directory>
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root directory of the project with the following content:
   ```env
   USER=your-email@gmail.com
   APP_PASSWORD=your-app-password
   ```

   Replace `your-email@gmail.com` with your Gmail address and `your-app-password` with your Gmail app password. If you have two-factor authentication (2FA) enabled, you need to generate an app password from your Google Account.

### Usage

1. **Run the script to send an email:**
   ```bash
   node SendMail.js
   ```

2. **Check your email** to confirm that the message was sent and the attachments are included.

### Code Overview

- **`SendMail.js`**: The main script that sends the email. Configures the Nodemailer transporter, sets up email options, and handles sending the email.

- **`.env`**: Contains environment variables for Gmail credentials. Ensure this file is added to your `.gitignore` to keep your credentials secure.

### Troubleshooting

- **Authentication Errors**: If you encounter authentication errors, ensure your `.env` file is correctly configured and that you have generated an app password if using 2FA.
  
- **Attachment Issues**: Verify that the file paths in `mailOptions` are correct and that the files exist in the specified directory.

### Contributing

If you have suggestions or improvements, feel free to open an issue or submit a pull request.
