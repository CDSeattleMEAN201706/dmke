

function VehicleConstructor(vehicleName, numberOfWheels, numberOfPassengers, speed) {
  this.name = vehicleName || "car"
  this.wheels = numberOfWheels || 4
  this.passengers = numberOfPassengers || 4
  this.speed = speed || 60

  this.makeNoise (noise)=> {
    let noise = noise || "Beep beep"
    console.log(noise)
  }
}

let myBike = new VehicleConstructor("bike", 2, 1)

myBike.makeNoise = (noise)=> {
  console.log("ring ring!")
}

let mySedan = new VehicleConstructor("sedan")

mySedan.makeNoise = (noise)=> {
  console.log("Honk Honk!")
}

let myBus = new VehicleConstructor("bus", 4, 10)

myBus.pickUp = (toPickup)=> {
  myBus.numberOfPassengers += newPassengers
}
