const number: Number = 23
const value: String = "hello"
const bool: Boolean = true
const Null: null = null
const unde: undefined = undefined

//built in obj

const now: Date = new Date()

//type notation in array

const array: Number[] = [1,2,3]
const arrayString: String[] = ["tarun","umang"]
const boolArray: Boolean[] = [true,false]

//classes
class Vishal{}
class Tarun {}
const newTarun: Tarun = new Vishal()

//object literals
const literal:{ x:number; y:number } = {
  x: 2,
  y: 3
}

//function
const fun: (x: Number) => void = (y: Number) => {
  console.log(y)
  
}

//when to use anotation
//1) Function that return the any types
const json =  '{"x":10, "y":11}'
const cordinates: {x: number, y: number} = JSON.parse(json)
console.log(cordinates)

//when we declare a variable in one line and initilize it later..
const arr = ["green", "red", "orange"]
let found: Boolean;
for (let i = 0; i < arr.length; i++){
  if (arr[i] === "red") found = true;
}

//3) variable whose type is cannot be infered correctly
const num = [-1,-22,3]
let newBol: Boolean | Number;
for (let i = 0; i < num.length; i++){
  if (num[i] > 1) {
    newBol = 10;
  }
}

// More annotation around function
const add = (a:number, b: number): number => {
  return a + b
}

function secAdd(a: number, b: number) {
  return a + b;
}

const thirdAdd = function (a: number, b: number) {
  return a + b;
}

//Destructing the annotation

const todaysWeather = {
  date: new Date(),
  weather: "sunny"
}

const logWeather = ({date,weather}: { date: Date, weather: string }): void => {
  console.log(date)
  console.log(weather)
}

logWeather(todaysWeather)