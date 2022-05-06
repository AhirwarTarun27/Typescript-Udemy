const personData = {
  name: "tarun",
  age: 24,
  cords: {
    lan: 23,
    lon: 33,
  },
  setAge(age: number) {
    this.age = age;
  }
}

const { age }: { age: number } = personData
const { cords: { lan, lon } }: { cords: { lan: number; lon: number } } = personData;
