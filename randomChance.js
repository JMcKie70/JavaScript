
function randomChance(quarters){
  if(Math.floor(Math.random * 100) !== 1){
    quarters -= 1;
    if(quarters === 0){
      console.log("Sorry. You're out of quarters.");
    } else {
      console.log("Sorry. But you still have " + quarters + " left!");
    }
  } else {
    quarters += 50;
    console.log("You won! You now have " + quarters + " quarters!!")
  }
}
randomChance(5);
randomChance(4);
randomChance(3);
randomChance(2);
randomChance(1);
