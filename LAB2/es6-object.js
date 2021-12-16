let cars = {
    brand: "Toyota" , 
    color: "red" ,
     year: 2010,
     fullName: () =>{
         return `${this.brand} : ${this.year}`;
     },
     fullName: () => {
         return `${cars.brand} : ${cars.year}`;
     },
};

cars.color = "blue";
console.log(cars.color);

const x = cars;
x.year = 2020;
console.log(cars.year);

//destructuring 
const number = [10, 20, 30];
const [a, b] = number;
console.log(b);

const {brand, color, year: y,fullName} = cars;
console.log(y);
// console.log(cars.fullNameA());
console.log(fullName());