// import nodemailer from 'nodemailer';
// import { google } from 'googleapis';
// import 'dotenv/config';

// const oAuth2Client = new google.auth.OAuth2(
//   process.env.CLIENT_ID,
//   process.env.CLEINT_SECRET,
//   process.env.REDIRECT_URI
// );
// oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

// async function sendMail(name, email) {
//   try {
//     const accessToken = await oAuth2Client.getAccessToken();

//     const transport = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         type: 'OAuth2',
//         user: 'project3team2@gmail.com',
//         clientId: process.env.CLIENT_ID,
//         clientSecret: process.env.CLEINT_SECRET,
//         refreshToken: process.env.REFRESH_TOKEN,
//         accessToken: accessToken,
//       },
//     });

//     const mailOptions = {
//       from: 'ClubQ 📧 <project3team2@gmail.com>',
//       to: `${email}`,
//       subject: `It's your turn!`,
//       text: `Hello ${name}, It's your turn now, please arrive back to the site and show this email to the security guard. 
//       Please arrive in 15 mins, failiure to arrive in the set time could result in you loosing your spot in line.
      
//       Hope to see you soon,
//       ClubQ team`,
//       html: `<h3>Hello ${name},</h3><br><h4>It's your turn now, please arrive back to the site and show this email to the security guard.</h4>
//       <h3>Please arrive in 15 mins, failiure to arrive in the set time could result in you loosing your spot in line.</h3><br>
//       <h4>Hope to see you soon,</h4><h4>ClubQ team 🇶</h4>
//       `,
//     };

//     const result = await transport.sendMail(mailOptions);
//     return result;
//   } catch (error) {
//     return error;
//   }
// }

// // sendMail(name, email)
// //   .then((result) => console.log('Email sent...', result))
// //   .catch((error) => console.log(error.message));

// export default sendMail;