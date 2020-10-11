import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

export async function post(req, res, next) {
  /* Initializes */
  res.setHeader('Content-Type', 'application/json');
  /* Retrieves the data */
  var data = req.body;
  await transporter.sendMail({
    from: 'Infos@tcg.be',
    to: data.emailValue,
    subject: 'Email automatique',
    html: `
    <!DOCTYPE html PUBLIC “-//W3C//DTD XHTML 1.0 Transitional//EN” “https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd”>
    <html xmlns=“https://www.w3.org/1999/xhtml”>
      <head>
        <title>Email reçu de Nicolas Decat</title>
        <meta http–equiv=“Content-Type” content=“text/html; charset=UTF-8” />
        <meta http–equiv=“X-UA-Compatible” content=“IE=edge” />
        <meta name=“viewport” content=“width=device-width, initial-scale=1.0 “ />
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .contact {
            background-color: white;
            color: black;
            border-radius: 10px;
            border: 2px solid red;
            margin: 1rem;
            padding: 1rem;
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
          }
          .message {
            background-color: white;
            color: black;
            border-radius: 10px;
            border: 2px solid red;
            margin: 1rem;
            padding: 1rem;
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="contact">
            <h1>Le client:</h1>
            <p>Prénom: ${data.firstNameValue}</p>
            <p>Nom: ${data.lastNameValue}</p>
            <p>Adresse email: <a href="mailto:${data.emailValue}">${data.emailValue}</a></p>
            <p>Numéro de téléphone: <a href="tel:${data.phoneValue}">${data.phoneValue}</a></p>
          </div>
          <div class="message">
            <h1>Message du client:</h1>
            <p>${data.messageValue}</p>
          </div>  
        </div>
      </body>
    </html>
    `,
  });
  /* Returns the result */
  return res.end(JSON.stringify({ success: true }));
}
