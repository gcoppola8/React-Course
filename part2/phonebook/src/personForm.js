import React, {useState} from 'react'

const PersonForm = (props) => {
	
	const [ newName, setNewName ] = useState('')
	const [ newNumber, setNewNumber ] = useState('')

	const changeNameHandler = (event) => {
		setNewName(event.target.value)
	}

	const changeNumberHandler = (event) => {
		setNewNumber(event.target.value)
	}
	
	const addPersonHandler = (event) => {
		event.preventDefault()
		const found = props.persons.find( e => e.name === newName)
		if(found) {
			alert(`${newName} already exist`)
		} else {
			props.set(props.persons.concat({ name: newName, number: newNumber}))
		}
    }
	
	return (	
		<form onSubmit={addPersonHandler}>
			<div>
			  name: <input value={newName} onChange={changeNameHandler} /> <br />
			  number: <input value={newNumber} onChange={changeNumberHandler} />
			</div>
			<div>
			  <button type="submit">add</button>
			</div>
		</form>
	)
}

export default PersonForm