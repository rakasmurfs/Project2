
$(document).ready(function(){


    var employers = [ ];
    
    
    
    
    
    
    
    
    
    
    
    var name = "";
        var email = "";
        var age = 0;
        var comment = "";
    
        // Capture Button Click
        $("#add-user").on("click", function(event) {
            
          event.preventDefault();
        
        
          name = $("#name-input").val().trim();
          email = $("#email-input").val().trim();
          age = $("#age-input").val().trim();
          comment = $("#comment-input").val().trim();
    
        //   alert(name);
          
    
    
    
    })
    
    // $("#full-member-list").append("<div class='well'><span class='member-name'> " +
    //         childSnapshot.val().name +
    //         " </span><span class='member-email'> " + childSnapshot.val().email +
    //         " </span><span class='member-age'> " + childSnapshot.val().age +
    //         " </span><span class='member-comment'> " + childSnapshot.val().comment +
    //         " </span></div>");
    
    
    
    // function loop(){
    
    //     $("#buttons").html("");
    // for (var i = 0; i < pokemonTeam.length; i++) {
    
    //     var button=$("<button>"+pokemonTeam[i]+"</button>");
    //     button.attr("class","button");
    //     button.attr("data-pokemon",pokemonTeam[i]);
    
    // $("#buttons").prepend(button)}};
    })