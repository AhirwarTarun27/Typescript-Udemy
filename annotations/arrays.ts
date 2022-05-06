const data = ["tarun", "umang", "vishal"]

data.map((name:string):string=>{
  return name.charAt(1)
})
//type annotation help while using HOF like map, forEach or reduce by adding the type and all the values inside that function belongs to that type and so we can you there inbuilt function easily.

//flexible arrays
const flex: (Date | string)[] = []

flex.push("hello")
flex.push(new Date())

