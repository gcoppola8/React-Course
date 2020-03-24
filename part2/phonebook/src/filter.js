import React from 'react'

const Filter = (props) => {

	return (
		<div>
			filter: <input value={props.get} onChange={ (event) => props.set(event.target.value) } /> <br/>
		</div>
	)
}

export default Filter