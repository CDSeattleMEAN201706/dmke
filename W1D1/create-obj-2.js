

function VehicleConstructor(vehicleName, numberOfWheels, numberOfPassengers) {
  let vehicle = {}

  vehicle.name = vehicleName || "car"
  vehicle.wheels = numberOfWheels || 4
  vehicle.passengers = numberOfPassengers || 4

  vehicle.makeNoise (noise)=> {
    let noise = noise || "Beep beep"
    console.log(noise)
  }

  return vehicle
}

let myBike = VehicleConstructor("bike", 2, 1)

myBike.makeNoise = (noise)=> {
  console.log("ring ring!")
}

let mySedan = VehicleConstructor("sedan")

mySedan.makeNoise = (noise)=> {
  console.log("Honk Honk!")
}

let myBus = VehicleConstructor("bus", 4, 10)

myBus.pickUp = (toPickup)=> {
  myBus.numberOfPassengers += newPassengers
}
