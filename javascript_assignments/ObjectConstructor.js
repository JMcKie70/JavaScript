function VehicleConstructor(name, numWheels, numPassengers){
  var vehicle = {};

  vehicle.name = name;
  vehicle.numWheels = numWheels;
  vehicle.numPassengers = numPassengers;

  ninja.makeNoise = function() {
    console.log("Noise, noise, noisy noisy noise.");
  }

  return vehicle;    
}

var Bike = VehicleConstructor("bike", 2, 1);
Bike.makeNoise = funtion(){
  console.log("ring ring!");
}

var Sedan = VehicleConstructor("sedan", 4, 5);
Sedan.makeNoise = funtion(){
  console.log("Honk Honk!");
}

var Bus = VehicleConstructor("bus", 6, 41);
bus.passCount = funtion(numPassPickUp){
  var totalPass = numPassengers + numPassPickUp;
}