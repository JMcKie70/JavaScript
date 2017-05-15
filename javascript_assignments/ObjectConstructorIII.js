function VehicleConstructor(name, numWheels, numPassengers, speed){
  this.name = name;
  this.numWheels = numWheels;
  this.numPassengers = numPassengers;
  this.speed = speed;
  this.distance_travelled = 0;
  this.updateDistanceTravelled = function(){
    this.distance_travelled += this.speed;
  }
  this.makeNoise = function() {
    console.log("Noise, noise, noisy noisy noise.");
  }
}

VehicleConstructor.prototype.move = function(){
    this.updateDistanceTravelled();
    this.makeNoise();
}
  
VehicleConstructor.prototype.checkMiles = function(){
    console.log(distance_travelled);
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

VehicleConstructor.prototype.randomVIN = function(){
	var digits = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
	var VIN = "VIN:";
	for(var i = 1; i < 18; i++){
		VIN += digits[Math.floor(Math.random() * digits.length)];
	}
	console.log(VIN);
}


bike.randomVIN();

sedan.makeNoise();

bus.move();


