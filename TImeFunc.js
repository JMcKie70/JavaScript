function time() {
  var HOUR = 12;
  var MINUTE = 40;
  var PERIOD = "AM";
  if ((HOUR > 0) && (HOUR < 13) && (MINUTE >= 0) && (MINUTE < 60) && ((PERIOD == "AM" || PERIOD == "PM"))) {
    if ((MINUTE < 30) && (PERIOD == "AM")) {
      console.log("It's just after " + HOUR + " in the morning");
    }
    else if ((MINUTE < 30) && (PERIOD == "PM")) {
      console.log("It's just after " + HOUR + " in the evening");
    }
    else if ((MINUTE > 30) && (PERIOD == "AM")) {
      if (HOUR == 12) {
        HOUR = 1;
        console.log("It's almost " + HOUR + " in the morning");
      }
      else if (HOUR == 11) {
        console.log("It's almost " + (HOUR + 1) + " in the evening");
      }
      else {
        console.log("It's almost " + (HOUR + 1) + " in the morning");
      }
    }
    else if ((MINUTE > 30) && (PERIOD == "PM")) {
      if (HOUR == 12) {
        HOUR = 1;
        console.log("It's almost " + HOUR + " in the evening");
      }
      else if (HOUR == 11) {
        console.log("It's almost " + (HOUR + 1) + " in the morning");
      }
      else {
        console.log("It's almost " + (HOUR + 1) + " in the evening");
      }
    }
  }
  else {
    console.log("Invalid entry");
  }
}
time();
