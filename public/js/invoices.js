$(function() {
  console.log("hellloooo do it girl");
  $("select.selectedEmployer").change(function() {
    var selectedEmployer = $(this)
      .children("option:selected")
      .val();
    $("#employer-id-input").val(selectedEmployer);
    console.log(selectedEmployer);
  });

  // Add new employer using user inputs
  $("#add-invoice").on("click", function(event) {
    event.preventDefault();
    console.log("yeah click me and pay me");

    // Get references to page elements

    var invoiceAmount = $("#invoice-input");
    var EmployerId = $("#employer-id-input");
    console.log($("#employer-id-input"));
    // Create object to store newEmployer data
    var newInvoice = {
      invoiceAmount: invoiceAmount.val().trim(),
      paidStatus: false,
      EmployerId: EmployerId.val().trim()
    };
    //console.log(newInvoice);
    // Post request to add new employer to database
    $.ajax("/api/invoices", {
      type: "POST",
      data: newInvoice
    }).then(function(data) {
      console.log(data);
      invoiceAmount.val("");
    location.reload();
    });

    
  });
});
