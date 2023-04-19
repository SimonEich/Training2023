//Variables
var trainingtype = "strenght";
var nextdayvar = 0;

//Constants
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getDay()];

// Getting Day
//console.log(d.getDay());
document.getElementById("weekday").innerHTML = day;
currentDate = new Date();
    startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate) /
        (24 * 60 * 60 * 1000));

    var weekNumber = (Math.ceil(days / 7));

// Showing Day in Title
function todaytraining(){
  console.log(d.getDay());
  document.getElementById("weekday").innerHTML = day;
  currentDate = new Date();
      startDate = new Date(currentDate.getFullYear(), 0, 1);
      var days = Math.floor((currentDate - startDate) /
          (24 * 60 * 60 * 1000));
  show()
}
    // Display the calculated result
    console.log("Week number of " + currentDate +
        " is :   " + weekNumber);


        if ((Math.floor(weekNumber/4))%2==0) {
          trainingtype = "strenght";
        } else {
          trainingtype = "hypotraphy";
        }
show();

//Funktion to show day in connection to the right Training.
function show(){
switch(day) {
  case "Sunday":
  document.getElementById("bodypart").innerHTML = "Long Walking";
  document.getElementById("weeknumber").innerHTML = "Weeknumber: " + weekNumber;
  document.getElementById("trainingtype").innerHTML = "Endurance";
    break;
  case "Monday":
  document.getElementById("bodypart").innerHTML = "Legs";
  document.getElementById("weeknumber").innerHTML = "Weeknumber: " + weekNumber;
  if (trainingtype == "strenght"){
    document.getElementById("trainingtype").innerHTML = "4-6 Reps";
  } else if (trainingtype=="hypotraphy") {
    document.getElementById("trainingtype").innerHTML = "8-12Reps";
  }
    break;
  case "Tuesday":
  document.getElementById("bodypart").innerHTML = "Judo";
  document.getElementById("trainingtype").innerHTML = "and Sauna";
    break;
  case "Wednesday":
  document.getElementById("bodypart").innerHTML = "Upper Body";
  if (trainingtype == "strenght"){
    document.getElementById("trainingtype").innerHTML = "4-6 Reps";
  } else if (trainingtype=="hypotraphy") {
    document.getElementById("trainingtype").innerHTML = "8-12Reps";
  }
    break;
  case "Thursday":
  document.getElementById("bodypart").innerHTML = "Shoulder, Neck, Core";
  if (trainingtype == "strenght"){
    document.getElementById("trainingtype").innerHTML = "4-6 Reps";
  } else if (trainingtype=="hypotraphy") {
    document.getElementById("trainingtype").innerHTML = "8-12Reps";
  }
    break;
  case "Friday":
  document.getElementById("bodypart").innerHTML = "Judo";
    break;
  case "Saturday":
  document.getElementById("bodypart").innerHTML = "Planche";
  if (trainingtype == strenght){
    document.getElementById("trainingtype").innerHTML = "Reps";
  } else if (trainingtype==hypotraphy) {
    document.getElementById("trainingtype").innerHTML = "Static";
  }
    break;

  default:
    // code block
}
}
