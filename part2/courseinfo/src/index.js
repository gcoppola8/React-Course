import React from 'react'
import ReactDOM from 'react-dom'
import Course from './Course'

const App = () => {
  const course = [{
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
	    {
        name: 'Redux',
        exercises: 11,
        id: 4
	    },
	    {
        name: 'Fronte-end',
        exercises: 7,
        id: 5
	    }
    ]
  },
  {
    id: 2,
    name: 'Backend application development',
    parts: [
      {
        name: 'Java',
        exercises: 11,
        id: 1
      },
      {
        name: 'Axway API',
        exercises: 3,
        id: 2
      }
    ]
  }]

  const courseList = course.map( el => <Course key={el.id} course={el} />)

  return (
    <div>
      {courseList}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
