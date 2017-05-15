function VehicleConstructor(name, numWheels, numPassengers, speed){
  this.name = name;
  this.numWheels = numWheels;
  this.numPassengers = numPassengers;
  this.speed = speed;
  this.move = function(){
    updateDistanceTravelled();
    this.makeNoise();
  }
  this.makeNoise = function() {
    console.log("Noise, noise, noisy noisy noise.");
  }
  this.checkMiles = function(){
    console.log(distance_travelled);
  }
  var distance_travelled = 0;
  var updateDistanceTravelled = function(){
    distance_travelled += this.speed;
  }   
}

var bike = new VehicleConstructor("bike", 2, 1);
bike.makeNoise = function(){
  console.log("ring ring!");
}

var sedan = new VehicleConstructor("sedan", 4, 5);
sedan.makeNoise = function(){
  console.log("Honk Honk!");
}

var bus = new VehicleConstructor("bus", 6, 41);
bus.passCount = function(numPassPickUp){
  var totalPass = numPassengers + numPassPickUp;
}