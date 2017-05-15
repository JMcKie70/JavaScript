function numOnly(arr){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    if(typeof arr[i] === "number"){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
numOnly(["joe", 1, "mary", 4]);

function numOut(arr){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    if(typeof arr[i] === "string"){
      newArr.push(arr[i]);
    }
}
return newArr;
}
numOut(["joe", 1, "mary", 4]);
