let cars = ["toyoya","Honda","mazda"];
let fruits = [];
fruits[0] = "Apple";
fruits[3] = "Mango";
let rname = new Array("woon","john","James");
console.log(rname);

let popCar = cars.pop();
console.log(popCar);
console.log(cars);

cars.unshift("Kubota");
console.log(cars);
cars.shift();
console.log(cars);

cars.splice(1, 0, "mazda", "Kubota");
console.log(cars);

const carSlide = cars.slice(1, 2);
console.log(carSlide);

const newArr = cars.concat(rname);
console.log(newArr);
const newArr2 = [...cars, ...rname]; //spread operator
console.log(newArr2);

console.log(newArr.toString());
