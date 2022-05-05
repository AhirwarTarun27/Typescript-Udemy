import axios from "axios"

interface todo {
  id: Number,
  title: String,
  completed: Boolean
}

axios.get("https://jsonplaceholder.typicode.com/todos/1").then(res => {
  let data = res.data as todo

  const id = data.id
  const title = data.title
  const completed = data.completed

  console.log(`
  the id is ${id} and the title is ${title} with completed status ${completed}
  `)
})