function reward(days){
  var sum = .01;
  for(var i = 1; i <= days; i++){
  sum = sum * 2;
  }
  console.log(sum);
}
reward(30);//10737418.24
reward(20);//10485.76
reward(37);//1374389534.72
reward(1031);//Infinity
