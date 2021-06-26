import React, { useState } from 'react'

function NewTodoForm({ addTodo }) {
	const [newTodo, setNewTodo] = useState('')

	function handleSubmit(e) {
		e.preventDefault()
		addTodo(newTodo)
		setNewTodo('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="newTodo">Add a todo!</label>
			<input id="newTodo" type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />

			<button type="submit">Submit</button>
		</form>
	)
}

export default NewTodoForm
