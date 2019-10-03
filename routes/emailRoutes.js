var nodemailer = require("nodemailer");


module.exports = function (app) {
  app.post('/email/send', function (req, res) {

    var transporter = nodemailer.createTransport({
      service: req.body.serviceInput,
      auth: {
        user: req.body.email,
        pass: req.body.password
      }
    });

    var mailOptions = {
      from: req.body.email,
      to: 'rhondakremer@gmail.com',
      subject: "Payment Reminder",
      text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        res.send('email sent');
      }
    });
  });
};