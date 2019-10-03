$(function() {
  $("#email").on("click", function() {
    console.log("hello");
    var serviceInput = $("#service-input")
      .val()
      .trim();
    var email = $("#email-input")
      .val()
      .trim();
    var password = $("#password-input")
      .val()
      .trim();

    var email = {
      serviceInput: serviceInput,
      email: email,
      password: password
    };
    $.ajax("/email/send", {
      type: "POST",
      data: email
    }).then(function(data) {
      console.log("yes, you did it", data);
      $("#service-input").val("");
      $("#email-input").val("");
      $("#password-input").val("");
    });
  });
});

// var nodemailer = require("nodemailer");

//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: 'rhondakremer@gmail.com',
//           pass: 'hornplaya15'
//         }
//       });

//       var mailOptions = {
//         from: 'rhondakremer@gmail.com',
//         to: 'rhondakremer@gmail.com',
//         subject: "Payment Reminder",
//         text: 'That was easy!'
//       };

//       transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('Email sent: ' + info.response);
//         }
//       });
