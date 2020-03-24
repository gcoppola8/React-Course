import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" handle={() => setGood(good + 1)} />
      <Button text="neutral" handle={() => setNeutral(neutral + 1)} />
      <Button text="bad" handle={() => setBad(bad + 1)} />

      <Statistics stats={[good, neutral, bad]}/>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handle}>{props.text}</button>
  )
}

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td><td>{props.val}</td>
    </tr>
  )
}

const Statistics = (props) => {
  
  function avg(stats){
    let positivePoints = stats[0];
    let negativePoints = -stats[2];
    let total = stats[0] + stats[1] + stats[2];
    return (positivePoints + negativePoints) / total;
  }

  function positive(stats){
    let positive = stats[0];
    let total = stats[0] + stats[1] + stats[2];
    return (positive / total) * 100;
  }
  
  //No feedback
  if(props.stats[0] === 0 && props.stats[1] === 0 && props.stats[2] === 0) {
    return (
	    <>
	    <h1>Statistics</h1>
	    <p>No feedback given</p>
	    </>
    )
  }

  return (
    <>
      <h1>Statistics</h1>
      <table>
      <Statistic text="good" val={props.stats[0]} />
      <Statistic text="neutral" val={props.stats[1]} />
      <Statistic text="bad" val={props.stats[2]} />
      <Statistic text="average" val={avg(props.stats)} />
      <Statistic text="positive %" val={positive(props.stats)} />
      </table>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

