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