// // header component
// const Header = (props) => {
//   return (
//     <div className="header">
//       <h1> {props.info} </h1>
//     </div>
//   )
// }

import { useState } from 'react'

// import { useState } from 'react'

// // // part component
// // const Part = (props) => {
// //   return (
// //     <div className="part">
// //       <p>
// //         {props.part} {props.exercise}
// //       </p>
// //     </div>
// //   )
// // }

// // //content component
// // const Content = (props) => {
// //   // console.log(props.parts[0].part)
// //   // console.log(props.parts[0].exercises)
// //   return (
// //     <div className="content">
// //       <Part part={props.parts[0].part} exercise={props.parts[0].exercises} />
// //       <Part part={props.parts[1].part} exercise={props.parts[1].exercises} />
// //       <Part part={props.parts[2].part} exercise={props.parts[2].exercises} />
// //     </div>
// //   )
// // }

// // //total component
// // const Total = (props) => {
// //   console.log(props)
// //   const total =
// //     props.exercises[0].exercises +
// //     props.exercises[1].exercises +
// //     props.exercises[2].exercises
// //   return (
// //     <div className="Total">
// //       <p>Number of exercises {total} </p>
// //     </div>
// //   )
// // }

// // const App = () => {
// //   const course = {
// //     name: 'Half Stack application development',
// //     parts: [
// //       {
// //         part: 'Fundamentals of React',
// //         exercises: 10,
// //       },
// //       {
// //         part: 'Using props to pass data',
// //         exercises: 7,
// //       },
// //       {
// //         part: 'State of a component',
// //         exercises: 14,
// //       },
// //     ],
// //   }

// //   return (
// //     <div>
// //       <Header info={course.name} />

// //       <Content parts={course.parts} />

// //       <Total exercises={course.parts} />
// //     </div>
// //   )
// // }

// // first state example
// // display component
// // const Display = ({ counter }) => <div className=""> {counter} </div>

// // // button component
// // const Button = ({ handler, text }) => <button onClick={handler}>{text}</button>

// // const App = () => {
// //   const [counter, setCounter] = useState(0)
// //   console.log('rendering with counter value', counter)

// //   const increase = () => {
// //     console.log('increasing, value before', counter)

// //     setCounter(counter + 1)
// //   }
// //   const reset = () => {
// //     console.log('resetting to zero, value before', counter)
// //     setCounter(0)
// //   }
// //   return (
// //     <div className="">
// //       <Display counter={counter} />
// //       <Button text="increment" handler={increase}></Button>
// //       <Button text="reset" handler={reset}></Button>
// //     </div>
// //   )
// // }

// // more complex state example

// //click history component

// const History = ({ allClick }) => {
//   if (allClick.length === 0) {
//     return <div className="">the app is used by pressing the buttons</div>
//   }
//   return (
//     <div className="history">
//       <p> {allClick.join(' ')} </p>
//     </div>
//   )
// }

// //button component
// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>{text}</button>
// )

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClick, setAll] = useState([])

//   // handle left click
//   const handleLeftClick = () => {
//     setLeft(left + 1)
//     setAll(allClick.concat('L'))
//   }

//   // handle right click
//   const handleRightClick = () => {
//     setRight(right + 1)
//     setAll(allClick.concat('R'))
//   }

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text="left" />
//       {right}
//       <Button handleClick={handleRightClick} text="right" />{' '}
//       {/* <p>all click {allClick.join('')} </p> */}
//       <History allClick={allClick} />
//     </div>
//   )
// }

// export default App
