$(document).ready(function() {
  $("form#questions").submit(function(event) {
    const question1 = $("select#question1").val();
    const question2 = $("select#question2").val();
    const question3 = $("select#question3").val();
    const question4 = $("select#question4").val();
    const question5 = $("select#question5").val();
        
    if ((question1 === "Flexibility" || "Dynamic") && question2 === "Hulu" && question3 === "Thailand" && question4 === "Quinoa" && question5 === "Fishing")  {
      $("#ruby").show();
    } else if (question2 === "Google" && (question1 === "Flexibility" || "Dynamic") && (question3 === "Italy" || "Costa Rica") && question4 === "Beets" && question5 === "Smoking Meat") {
      $("#python").show();
    } else if ((question3 === "Costa Rica" || "Italy") && question1 === "Dynamic" && question2 === "Microsoft" && (question4 === "Roasted Bell Peppers" || "Beets") && (question5 === "Hiking" || "Fishing")) {
      $("#c").show();
    } else if ((question4 === "Quinoa" || "Beets") && question1 === "Complexity" && question2 === "Hulu" && (question3 === "Thailand" || "Costa Rica") && (question5 === "Smoking Meat" || "Fishing")) {
      $("#ruby").show();
    } else if ((question5 === "Fishing" || "Hiking" || "Smoking Meat") && question1 === "Flexibility" && question2 === "Hulu" && (question3 === "Italy" || "Thailand" || "Costa Rica")) {
      $("#ruby").show();
    } else {
      $("#incomplete").show();
    }
    
    event.preventDefault();
  });
});

