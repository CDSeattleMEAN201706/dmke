function runningLogger(){
  console.log("I am running!")
}

function multiplyByTen(multiplyMe){
  return multiplyMe *= 10
}

function stringReturnOne(){
  return "I am string One"
}

function stringReturnTwo(){
  return "I am string Two"
}

function caller(amIaFunction){
  if(typeof(amIaFunction) == "function")
  {
    amIaFunction()
  }
}

function myDoubleConsoleLog(amIaFunction1, amIaFunction2){
  if(typeof(amIaFunction1) == "function" && typeof(amIaFunction2) == "function"))
  {
    console.log(amIaFunction1, "", amIaFunction2)
  }
}

function caller2(amIaFunctionLast){
  console.log("starting")
  setTimeout(function () {

  }, 2);
  if(typeof(amIaFunctionLast) == "function"){
    amIaFunctionLast()
  }
  console.log("ending?")
  return "interesting"
}
