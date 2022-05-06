interface Vehicle{
  name: string,
  year: number,
  broken: boolean,
  summary():string,
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary() {
    return "tarun"
  }
}

const privateCivic = (title: Vehicle): void => {
  console.log(title.name)
  console.log(title.year)
  console.log(title.broken)
  console.log(title.summary())
}
privateCivic(oldCivic)
