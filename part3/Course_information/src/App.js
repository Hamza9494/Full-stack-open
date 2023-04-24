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

const Total = ({ parts }) => {
  const sum = parts.reduce((acc, cur) => acc + cur.exercises, 0)
  console.log(sum)
  return <p> total of {sum} exercises </p>
}

const Courses = ({ courses }) => {
  return (
    <div className="course">
      {courses.map((course) => {
        return (
          <div className="course" key={course.id}>
            <Header course={course} />
            <Content course={course} />
            <Total parts={course.parts} />
          </div>
        )
      })}
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ]
  return <Courses courses={courses} />
}

export default App
