import React from 'react'
import ReactDOM from 'react-dom'

const Course = (props) => {
  return (
    <>
      <Header name={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </>
  )
}

const Header = ({name}) => {
  return (
    <h1>{name}</h1>
  )
}

const Content = (props) => {
  const parts = props.parts.map(
	  (el) => <Part key={el.id} name={el.name} exercises={el.exercises} />
  )
  return (
	  <>
	  {parts}
	  </>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  const calcTotal = () => {
    return props.parts.map( c => c.exercises).reduce( (a,b) => a+b, 0)
  }
  
  
  return (
    <>
      <p>Number of exercises {calcTotal()}</p>
    </>
  )
}

export default Course
