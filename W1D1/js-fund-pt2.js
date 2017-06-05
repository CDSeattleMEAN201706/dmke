function mySumMachine(x,y){
  let tempSum = x;

  for(let i = x+1; i < (y-x); i++) {
    tempSum += i;
  }
  return tempSum
}

function findMin(arrayToFindMin){
  let minTracker = arraytoFindMin[0]
  for(let i = 1; i < arrayToFindMin.length; i++){
    if arrayToFindMin[i] < minTracker {
      minTracker = arrayToFindmin[i]
    }
  }
  return minTracker
}

function findAverageOfArray(arr1){
  let averageTracker = 0
  for(let i = 0; i < arr1.length; i++){
    averageTracker += arr1[i]
  }
  return averageTracker/arr1.count
}

let rewriteSumMachine = function (x,y) {
  let tempSum = x;

  for(let i = x+1; i < (y-x); i++) {
    tempSum += i;
  }
  return tempSum
}

let rewriteFindMin = function (arrayToFindMin) {
  let minTracker = arraytoFindMin[0]
  for(let i = 1; i < arrayToFindMin.length; i++){
    if arrayToFindMin[i] < minTracker {
      minTracker = arrayToFindmin[i]
    }
  }
  return minTracker
}

let findAverageOfArray (arr1) {
  let averageTracker = 0
  for(let i = 0; i < arr1.length; i++){
    averageTracker += arr1[i]
  }
  return averageTracker/arr1.count
}

let funcAsMethods = {
  sumMachine: function(x,y) {
    let tempSum = x;

    for(let i = x+1; i < (y-x); i++) {
      tempSum += i;
    }
    return tempSum
  },

  findMin: function(arrayToFindMin) {
    let minTracker = arraytoFindMin[0]
    for(let i = 1; i < arrayToFindMin.length; i++){
      if arrayToFindMin[i] < minTracker {
        minTracker = arrayToFindmin[i]
      }
    }
    return minTracker
  },

  findAverageOfArray: function(arr1) {
    let averageTracker = 0
    for(let i = 0; i < arr1.length; i++){
      averageTracker += arr1[i]
    }
    return averageTracker/arr1.count
  }
}

let person = {
  name: "david",
  distance_traveled: 0,

  say_name: function(){
    alert(person.name)
    return self
  }

  say_something: function(stringToSay){
    console.log(person.name, " says ", stringToSay)
    return self
  }

  walk: function(){
    alert(person.name, "is walking")
    distance_traveled += 3
    return self
  }

  run: function(){
    alert(person.name, "is crawling")
    distance_traveled += 1
    return self
  }

  crawl: function(){
    alert(person.name, "is running")
    distance_traveled += 10
    return self
  }
}
