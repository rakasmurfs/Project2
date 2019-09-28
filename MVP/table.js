/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
$(document).ready(function () {
  
  var employers = [];
  var name = "";
  var lastname = ""
  var email = "";
  var age = 0;
  var comment = "";
  var row = 3

  // Capture Button Click
  $("#add-user").on("click", function () {
    row++;
    event.preventDefault();
    name = $("#name-input")
      .val()
      .trim();
    lastname = $("#name-input2")
      .val()
      .trim();
    email = $("#email-input")
      .val()
      .trim();
    // age = $("#age-input")
    //   .val()
    //   .trim();
    // comment = $("#comment-input")
    //   .val()
    //   .trim();
    if (name && lastname && email) {
      var appendTo = '<tr><th scope="row">' + row + '</th><td>' + name + '</td><td>' + lastname + '</td><td>' + email + '</td><td>$</td><td><button type="button" class="btn btn-success">Success</button></td><td><button type="button" class="btn btn-danger">Threaten</button></td></tr>';
      console.log(appendTo)
      $("#listTable").append(appendTo);
    }
    else {
      alert("you must fill out AT LEAST the name, lastname, and email fields")
    }
    //   alert(name);
  });







  // function loop(){

  //     $("#buttons").html("");
  // for (var i = 0; i < pokemonTeam.length; i++) {

  //     var button=$("<button>"+pokemonTeam[i]+"</button>");
  //     button.attr("class","button");
  //     button.attr("data-pokemon",pokemonTeam[i]);

  // $("#buttons").prepend(button)}};
});