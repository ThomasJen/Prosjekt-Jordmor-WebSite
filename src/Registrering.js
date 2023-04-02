const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  
  const email = document.querySelector('#email').value;
  
  const phoneNumber = document.querySelector('#phoneNumber').value;

  const nodemailer = require('nodemailer');

  const registration = { name, email, phoneNumber };
  const registrations = JSON.parse(localStorage.getItem('registrations')) || [];
  
  registrations.forEach((registration, index) => {
  console.log(`#${index + 1}: ${registration.name} (${registration.email}) (${registration.phoneNumber})`);
  });

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: false, // true for 465, false for other ports
    auth: {
    user: 'thomasjen286@gmail.com', // your email address
    pass: 'Shoterman28' // your email password
    }
    });

  // construct the message with the confirmation email
  const message = `Dear ${name},\n\nThank you for registering with us! We have received your registration request with the following details:\n\nName: ${name}\nPhoneNumber: ${phoneNumber}\nEmail: ${email}\n\nWe will process your registration request and get back to you soon with further instructions.\n\nBest regards,\nYour registration team`;

  // send mail with defined transport object
  let mailOptions = {
    from: 'thomasjen286@gmail.com', // sender address
    to: email, // recipient's email address
    subject: 'Registration confirmation', // Subject line
    text: message // plaintext body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
          

  registrations.push(registration);
  localStorage.setItem('registrations', JSON.stringify(registrations));
  alert('Registrering vellykket');
  form.reset();
});