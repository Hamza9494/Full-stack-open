const Part = ({ note }) => {
  return (
    <p>
      {' '}
      {note.name} {note.exercises}{' '}
    </p>
  )
}

const Content = ({ course }) => {
  const parts = course.parts
  return (
    <div className="content">
      {parts.map((note) => (
        <Part key={note.id} note={note} />
      ))}
    </div>
  )
}

const Header = ({ course }) => {
  return <h1>{course.name} </h1>
}

const Course = ({ course }) => {
  return (
    <div className="course">
      <Header course={course} />
      <Content course={course} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  }
  const count = 0
  const parts = course.parts
  parts.forEach((note) => (count = +note.exercises))
  console.log(count)

  return <Course course={course} />
}

export default App