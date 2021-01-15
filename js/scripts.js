$(document).ready(function() {
  $("form#questions").submit(function(event) {
    const question1 = $("select#question1").val();
    const question2 = $("select#question2").val();
    const question3 = $("select#question3").val();
    const question4 = $("select#question4").val();
    const question5 = $("select#question5").val();

    if (question1 === "Flexibility" || "Complexity" )  {
      $('#ruby').show();
    // } else if (question2 === "Hulu"   "Beets" && "Fishing") {
    //   $('#ruby').show();
    // } else if (question2 === "Dynamic" || "Complexity" && "Google" || "Microsoft" && "Italy" || "Costa Rica" && "Roasted Bell Peppers" || "Beets" && "Hiking" || "Fishing") {
    //   $('#c#').show();
    // } 
    } else {
      $('#python').show();
    }
    event.preventDefault();
  });
});