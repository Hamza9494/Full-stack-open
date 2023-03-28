import { useState } from 'react'

//button component
const Button = ({ text, handler }) => {
  return <button onClick={handler}> {text} </button>
}

//statisiclLine component
const StatisticsLine = ({ text, value }) => {
  return (
    <div className="statLine">
      <p>
        {' '}
        {text} {value}{' '}
      </p>
    </div>
  )
}

//statistics component
const Statistics = ({ total, good, bad, neutral }) => {
  if (total === 0) {
    return <p> no feedback given </p>
  }
  const average = (good + bad * -1 + neutral * 0) / total
  const percentage = (good / total) * 100
  return (
    <div className="statistics">
      <h2>Statistics dude</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <StatisticsLine text="good" value={good} />
              <StatisticsLine text="bad" value={bad} />
              <StatisticsLine text="neutral" value={neutral} />
              <StatisticsLine text="all" value={total} />
              <StatisticsLine text="average" value={average.toFixed(2)} />
              <StatisticsLine text="positive" value={percentage.toFixed(2)} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
const App = () => {
  //app state
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  //event handlers
  const goodFeed = () => {
    setGood(good + 1)
  }
  const badFeed = () => {
    setBad(bad + 1)
  }
  const neutralFeed = () => {
    setNeutral(neutral + 1)
  }

  // total feedback
  const total = good + bad + neutral

  return (
    <div className="feed">
      <h1>hello world</h1>
      <Button text="good" handler={goodFeed} />
      <Button text="bad" handler={badFeed} />
      <Button text="neutral" handler={neutralFeed} />

      <Statistics total={total} good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App
