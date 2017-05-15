function sumInts(x, y){
	var sum = 0;
	for(var i = x; i <= y; i++){
		sum += i;
	}
	console.log(sum);
}


function arrMin(arr){
	if (arr.length < 1){
		console.log('Array is empty.');
	} else {
		var min = arr[0];
		for(var i = 0; i < arr.length; i++){
			if(arr[i] < min){
				min = arr[i];
			}
		}
	return min;
	}
}

function arrAvg(arr){
	if (arr.length < 1){
		console.log('Array is empty.');
	} else {
		var sum = 0;
		var avg = 0;
		for(var i = 0; i < arr.length; i++){
			sum += arr[i];
		}
		avg = sum/arr.length;
		return avg;
}




var sumInts = function(x, y){
	var sum = 0;
	for(var i = x; i <= y; i++){
		sum += i;
	}
	console.log(sum);
}

var arrMin = function(arr){
	if (arr.length < 1){
		console.log('Array is empty.');
	} else {
		var min = arr[0];
		for(var i = 0; i < arr.length; i++){
			if(arr[i] < min){
				min = arr[i];
			}
		}
	return min;
	}
}

var arrAvg = function (arr){
	if (arr.length < 1){
		console.log('Array is empty.');
	} else {
		var sum = 0;
		var avg = 0;
		for(var i = 0; i < arr.length; i++){
			sum += arr[i];
		}
		avg = sum/arr.length;
		return avg;
}




var methObj = {
	sumInts : function(x, y){
		var sum = 0;
		for(var i = x; i <= y; i++){
			sum += i;
			}
		console.log(sum);
	},
	arrMin : function(arr){
		if (arr.length < 1){
			console.log('Array is empty.');
			} else {
				var min = arr[0];
				for(var i = 0; i < arr.length; i++){
					if(arr[i] < min){
						min = arr[i];
					}
				}
				return min;
			}
	},
	arrAvg : function (arr){
				if (arr.length < 1){
					console.log('Array is empty.');
				} else {
					var sum = 0;
					var avg = 0;
					for(var i = 0; i < arr.length; i++){
						sum += arr[i];
						}
					avg = sum/arr.length;
					return avg;
				}
	}
};


var sumInts = function(x, y){
	var sum = 0;
	for(var i = x; i <= y; i++){
		sum += i;
	}
	console.log(sum);
}

var arrMin = function(arr){
	if (arr.length < 1){
		console.log('Array is empty.');
	} else {
		var min = arr[0];
		for(var i = 0; i < arr.length; i++){
			if(arr[i] < min){
				min = arr[i];
			}
		}
	return min;
	}
}

var arrAvg = function (arr){
	if (arr.length < 1){
		console.log('Array is empty.');
	} else {
		var sum = 0;
		var avg = 0;
		for(var i = 0; i < arr.length; i++){
			sum += arr[i];
		}
		avg = sum/arr.length;
		return avg;
}


var person = {};

person.name = James;
person.distance_traveled = 0;
person.say_name = function(){
	alert(person.name);
	}
person.say_something = function(param){
	console.log(person.name + " says " + param);
	}
person.walk = function(){
	alert(person.name + " is walking");
	person.distance_traveled += 3;
	}
person.run = function(){
	alert(person.name + " is running");
	person.distance_traveled += 10;
	}

person.crawl = function(){
	alert(person.name + " is crawling");
	person.distance_traveled += 1;
	}



