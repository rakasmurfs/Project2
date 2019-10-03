$(function() {
  // Add new employer using user inputs
  $("#add-employer").on("click", function(event) {
    event.preventDefault();
    console.log("yeah click me bitch");

    // Get references to page elements

    var newEmployerName = $("#name-input");
    var newEmployerEmail = $("#email-input");
    var newEmployerPhoneNumber = $("#number-input");
    var newEmployerStreet = $("#street-input");
    var newEmployerCity = $("#city-input");
    var newEmployerState = $("#state-input")
    var newEmployerZipCode = $("#zipcode-input");

    // Create object to store newEmployer data
    var newEmployer = {
      employerName: newEmployerName.val().trim(),
      employerEmail: newEmployerEmail.val().trim(),
      employerStreet: newEmployerStreet.val().trim(),
      employerCity: newEmployerCity.val().trim(),
      employerState: newEmployerState.val().trim(),
      employerZipCode: newEmployerZipCode.val().trim(),
      employerPhoneNumber: newEmployerPhoneNumber.val().trim()
    };

    // Post request to add new employer to database
    $.ajax("/api/employers", {
      type: "POST",
      data: newEmployer
    }).then(function(data) {
      console.log(data);
    });

    newEmployerName.val("");
    newEmployerEmail.val("");
    newEmployerPhoneNumber.val("");
    newEmployerStreet.val("");
    newEmployerCity.val("");
    newEmployerState.val("");
    newEmployerZipCode.val("");
    location.reload();
  });

  $(".edit").on("click", function(event) {
    event.preventDefault();
    $("#edit-employer").css("display", "unset");
    $("#add-employer").hide();
    console.log("edit button works");
    var id = $(this).data("id");
    $.ajax({
      method: "GET",
      url: "/api/employers/" + id
    }).then(function(data) {
      console.log(data);
      $("#name-input").val(data[0].employerName);
      $("#email-input").val(data[0].employerEmail);
      $("#number-input").val(data[0].employerPhoneNumber);
      $("#street-input").val(data[0].employerStreet);
      $("#city-input").val(data[0].employerCity);
      $("#state-input").val(data[0].employerState);
      $("#zipcode-input").val(data[0].employerZipCode);
    });
    $("#edit-employer").on("click", function(event) {
      event.preventDefault();
      console.log("trying crazy stuff");
      //var id = data[0].id;
      console.log(id);
      var newEmployerName = $("#name-input");
      var newEmployerEmail = $("#email-input");
      var newEmployerPhoneNumber = $("#number-input");
      var newEmployerStreet = $("#street-input");
      var newEmployerCity = $("#city-input");
      var newEmployerState = $("#state-input")
      var newEmployerZipCode = $("#zipcode-input");

      // Create object to store newEmployer data
      var newEmployer = {
        employerName: newEmployerName.val().trim(),
        employerEmail: newEmployerEmail.val().trim(),
        employerStreet: newEmployerStreet.val().trim(),
        employerCity: newEmployerCity.val().trim(),
        employerState: newEmployerState.val().trim(),
        employerZipCode: newEmployerZipCode.val().trim(),
        employerPhoneNumber: newEmployerPhoneNumber.val().trim()
      };
      $.ajax({
        method: "PUT",
        url: "/api/employers/" + id,
        data: newEmployer
      }).then(function(data) {
        console.log(data);
      });
      newEmployerName.val("");
      newEmployerEmail.val("");
      newEmployerPhoneNumber.val("");
      newEmployerStreet.val("");
      newEmployerCity.val("");
      newEmployerState.val("");
      newEmployerZipCode.val("");
      location.reload();
    });
  });
});

$("#edit-employer").on("click", function(event) {
  event.preventDefault();
  console.log("trying crazy stuff");
  var id = $(this).data("id");
  console.log(id);
  var newEmployerName = $("#name-input");
  var newEmployerEmail = $("#email-input");
  var newEmployerPhoneNumber = $("#number-input");
  var newEmployerStreet = $("#street-input");
  var newEmployerCity = $("#city-input");
  var newEmployerState = $("#state-input")
  var newEmployerZipCode = $("#zipcode-input");

  // Create object to store newEmployer data
  var newEmployer = {
    employerName: newEmployerName.val().trim(),
    employerEmail: newEmployerEmail.val().trim(),
    employerStreet: newEmployerStreet.val().trim(),
    employerCity: newEmployerCity.val().trim(),
    employerState: newEmployerState.val().trim(),
    employerZipCode: newEmployerZipCode.val().trim(),
    employerPhoneNumber: newEmployerPhoneNumber.val().trim()
  };
  $.ajax({
    method: "PUT",
    url: "/api/employers/" + id,
    data: newEmployer
  }).then(function(data) {
    console.log(data);
  });
});

//PUT request to mark invoices as paidStatus true""
$(".invoicePaid").on("click", function(event) {
  event.preventDefault();
  var id = $(this).data("id");
  var paidStatus = {
    paidStatus: 1
  };
  location.reload();

  // Send the PUT request.
  $.ajax("/api/employers/" + id, {
    type: "PUT",
    data: paidStatus
  }).then(function() {
    console.log("Get your money, bitch!");
  });
});

$(".delete-employer").on("click", function(event) {
  event.preventDefault();
  var id = $(this).data("id");

  // Send the PUT request.
  $.ajax({
    type: "DELETE",
    url: "api/employers/" + id
  }).then(function() {
    console.log("BYEBYE");
    location.reload();
  });
});

//       type: "DELETE"
// });
// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveEmployer: function(results) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/employers",
//       data: newEmployer
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/employers",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick)
