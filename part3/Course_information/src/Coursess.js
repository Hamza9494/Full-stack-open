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
