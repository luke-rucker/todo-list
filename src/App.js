import React, { useState } from 'react'
import NewTodoForm from './components/new-todo-form'
import TodoList from './components/todo-list'
import './css/App.css'

function App() {
	// Store all items
	const [todos, setTodos] = useState([])

	// Adding when a new item comes along
	function addTodo(todo) {
		const newTodo = {
			text: todo,
			id: Date.now()
		}

		setTodos([...todos, newTodo])
	}

	function removeTodo(id) {
		console.log(`Remove todo with the id ${id}`)
	}

	return (
		<main>
			<NewTodoForm addTodo={addTodo} />
			<TodoList todos={todos} removeTodo={removeTodo} />
		</main>
	)
}

export default App
