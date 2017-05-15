function birthdayCountdown(num){
  if(num === 0){
  console.log("HAPPY BIRTHDAY!!!");
  } else if (num < 5){
    console.log(num + " DAYS UNTIL BY BIRTHDAY!!!");
  }  else if (num < 30){
    console.log(num + " days until my birthday.");
  } else{
  console.log(num + " days until my birthday. Such a long time...  :(");
  }
}
birthdayCountdown(70);
birthdayCountdown(50);
birthdayCountdown(20);
birthdayCountdown(3);
birthdayCountdown(0);
