$(document).ready(function() {
  $("form#questions").submit(function(event) {
    const question1 = $("select#question1").val();
    const question2 = $("select#question2").val();
    const question3 = $("select#question3").val();
    const question4 = $("select#question4").val();
    const question5 = $("select#question5").val();

    if (question1 === ("Flexibility" || "Dynamic") && question2 === "Hulu" && question3 === "Thailand" && question4 === "Quinoa" && question5 === "Fishing")  {
      $('#ruby').show();
    } else if (question2 === "Hulu" && question1 === ("Flexibility" || "Dynamic" || "Complexity") && question3 === ("Thailand" || "Italy" || "Costa Rica") && (question4 === "Quinoa" || "Roasted Bell Peppers" || "Beets") && (question5 === "Fishing" || "Hiking" || "Smoking Meat")) {
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