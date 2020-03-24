import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
		const [selected, setSelected] = useState(0)
    const [vote, setVote] = useState(new Uint8Array(anecdotes.length))

    function getRandom(max){
        return Math.floor(Math.random() * max);
		}
    
    function newVotes(s, arr){
        const copy = [...arr]
        copy[s] += 1
        return copy
    }

		return (
					<div>
						{props.anecdotes[selected]}
						<br/>
            has {vote[selected]} votes 
            <br/>
            <Button text="vote" handle={() => setVote( newVotes(selected, vote))} />
						<Button text="next anecdote" handle={() => setSelected( getRandom( anecdotes.length ))} />
            <br/>
            <FirstAnecdote input={ {anecdotes: anecdotes, votes: vote} }/>
					</div>
				)
}

const anecdotes = [
		'If it hurts, do it more often',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = (props) => {
    return (
            <button onClick={props.handle}>{props.text}</button>
				)
}

const FirstAnecdote = (props) => {
    
    const arr = props.input.votes
    
    let maxIndex = arr.indexOf(Math.max(...arr))
    console.log(maxIndex)
    const maxAnecdote = props.input.anecdotes[maxIndex]

    return (
        <>
          <h1>Anecdote with most votes</h1>
          <p>{maxAnecdote}</p>
          <p>has {Math.max(...arr)} votes</p>
        </>
    )
}

ReactDOM.render(
		<App anecdotes={anecdotes} />,
		document.getElementById('root')
)
