function runningLogger(){
	console.log("I am running!");
}
runningLogger();

function multiplyByTen(parameter) {
	var result = parameter * 10;
	return result;
}

multiplyByTen(5);


function stringReturnOne(){
	return 'one';
}

stringReturnOne();


function stringReturnTwo(){
	return 'two';
}

stringReturnTwo();

function caller(parameter){
	if (typeof parameter == "function"){
		parameter();
	}
}

caller(stringReturnTwo);

function myDoubleConsoleLog(par1, par2){
	if (typeof par1 && typeof par2 == "function"){
		console.log(par1());
		console.log(par2());
	}
}


function caller2(parameter){
	console.log("starting");
	setTimeout(waitAndDoIf,2000);
	function waitAndDoIf(){
		if (typeof parameter == "function"){
			parameter();
		}
	console.log('ending?');
	return "interesting";
	}
}

caller2(myDoubleConsoleLog(stringReturnOne,stringReturnTwo));

