var nodemailer = require("nodemailer");

module.exports = function(app) {
  app.post("/email/send", function(req, res) {
    var transporter = nodemailer.createTransport({
      service: req.body.serviceInput,
      auth: {
        user: req.body.email,
        pass: req.body.password
      }
    });

    var mailOptions = {
      from: req.body.email,
      to: "rhondakremer@gmail.com",
      subject: req.body.subject,
      text: req.body.message,
      attachments: [
        {
          path: "/Users/macuser/Downloads/invoice.pdf"
        }
      ]
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        res.send("email sent");
      }
    });
  });
};