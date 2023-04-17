/* eslint-disable comma-dangle */
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const { Todo } = require('./models')

app.get('/todos', async (request, response) => {
  // response.send("hello express");
  console.log('Todo list', request.body)
  try {
    const todo = await Todo.findAll()
    console.log(todo.every((user) => user instanceof Todo)) // true
    console.log('All todo:', JSON.stringify(todo, null, 2))
    return response.json(todo)
  } catch (error) {
    console.log(error)
    return response.status(422).json(error)
  }
})

app.post('/todos', async (request, response) => {
  console.log('Creating a todo', request.body)
  try {
    const todo = await Todo.addTodo({
      title: request.body.title,
      dueDate: request.body.dueDate,
      completed: false
    })
    return response.json(todo)
  } catch (error) {
    console.log(error)
    return response.status(422).json(error)
  }
})

app.put('/todos/:id/markAsCompleted', async (request, response) => {
  console.log('We have to update a todo with id', request.params.id)
  const todo = await Todo.findByPk(request.params.id)
  try {
    const updatedTodo = await todo.markAsCompleted()
    return response.json(updatedTodo)
  } catch (error) {
    return response.status(422).json(error)
  }
})

app.delete('/todos/:id', async (request, response) => {
  console.log('Delete a todo by ID: ', request.params.id)
  try {
    const del = await Todo.destroy({
      where: {
        id: request.params.id
      }
    })
    // eslint-disable-next-line no-unneeded-ternary
    return response.send(del ? true : false)
  } catch (error) {
    return response.status(422).json(error)
  }
})

app.listen(3000, () => {
  console.log('Started express server at port 3000')
})

module.exports = app
