var _ = {
    map: function(arr, callback) {
      var newArr = [];
      for(var i = 0; i < arr.length; i++){
        newArr.push(callback(arr[i]));
      }
      return newArr;
    },
    reduce: function(arr, callback) {
      var cumulative = 0;
      for(var i = 0; i < arr.length; i++){
          cumulative += callback(arr[i]);
        }
      return cumulative;
    },
    find: function(arr, callback) {
      var value = "undefined"; 
      for(var i = 0; i < arr.length; i++){
        if(callback(arr[i])){
          value = arr[i];
        }
      }
      return value;
    },
    filter: function(arr, callback) {
      var newArr = [];
      for(var i = 0; i < arr.length; i++){
        if(callback(arr[i])){
          newArr.push(arr[i]);
        }
      }
      return newArr;
    },
    reject: function(arr, callback) { 
      var newArr = [];
      for(var i = 0; i < arr.length; i++){
        if(!callback(arr[i])){
          newArr.push(arr[i]);
        }
      }
      return newArr;
    }
}

function addTwo(num){
  return num + 2;
}

function isTwo(num){
  if(num == 2){
    return true;
  } else {
    return false;
  }
}

arr1 = [1,2,3,2,4,2,5];

console.log(_.map(arr1,addTwo));

console.log(_.reduce(arr1,addTwo));

console.log(_.find(arr1, isTwo));

console.log(_.filter(arr1, isTwo));

console.log(_.reject(arr1, isTwo));