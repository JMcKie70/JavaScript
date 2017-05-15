function personConstructor(name){
	this.name = name;
	this.distance_traveled = 0;
	this.say_name = function(){
	alert(this.name);
	}
	this.say_something = function(saying){
	console.log(person.name + " says " + param);
	}
	this.walk = function(){
	alert(person.name + " is walking");
	person.distance_traveled += 3;
	}
	this.run = function(){
	alert(person.name + " is running");
	person.distance_traveled += 10;
	}
	this.crawl = function(){
	alert(person.name + " is crawling");
	person.distance_traveled += 1;
	}
}

function ninjaConstructor(name, cohort){
	this.name = name;
	this.cohort = cohort;
	this.beltLevel = "yellow";
	this.levelUp = function(){
		switch (this.beltLevel){
			case "yellow":
				this.beltLevel = "orange";
			case "orange":
				this.beltLevel = "green";
			case "green":
				this.beltLevel = "blue";
			case "blue":
				this.beltLevel = "red";
			case "red":
				this.beltLevel = "brown";
			case "brown":
				this.beltLevel = "black";
			default:
				console.log('Wrong color');
		}
	}
}

