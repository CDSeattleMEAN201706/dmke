let x = [3,5,"Dojo","rocks","Michael","Sensei"]

for (let iterator = 0; iterator < x.length; iterator++) {
  console.log(x[iterator])
}

x.push(100)
x += ["hello","world","JavaScript is Fun"]
console.log(x)

let sumOfForLoop = 0
for (let i = 0; i <= 500; i++){
  sumOfForLoop += i
}

console.log(sumOfForLoop)

var newNinja = {
  name: 'Jessica',
  profession: 'coder',
  favorite_language: 'JavaScript',
  dojo: 'Dallas'
}

for (let key in newNinja) {
  if(newNinja.hasOwnProperty(key)){
    console.log(key, ":", newNinja[key]);
  }
}
