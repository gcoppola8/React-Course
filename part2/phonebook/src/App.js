import React, { useState } from 'react'
import Filter from './filter'
import Persons from './persons'
import PersonForm from './personForm'

const App = () => {
	const [ filter, setFilter ] = useState('')

	const [ persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '3391069451'},
		{ name: 'Ada Lovelace', number: '39-44-5323523' },
		{ name: 'Dan Abramov', number: '12-43-234345' },
		{ name: 'Mary Poppendieck', number: '39-23-6423122' }
	]) 

	const numbers = () => persons.filter( e => e.name.includes(filter) ).map( e => <div>{e.name} {e.number}</div>) 
	
	return (
			<div>
			<h2>Phonebook</h2>
			<Filter get={filter} set={setFilter} />
			
			<PersonForm />
			
			<h2>Numbers</h2>
			<Persons persons={numbers()} set={setPersons} />
		</div>
	)
}

export default App
