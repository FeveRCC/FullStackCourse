import { useState } from 'react'

const Statistics = ({ good, bad, neutral, total }) => {
  if (total === 0) {
      return (
          <p>
              No feedback given
          </p>
      )
  }
  const Avg = () => {
      if (total === 0) {
          return 0
      }
      return ((((good*1)+(bad*-1))/total))
  }

  const Pos = () => {
      if (total === 0) {
          return 0
      }
      return ((good)/total)*100
  }
  return (
      <table>
          <tbody>
              <StatisticLine type='good' count={good}/>
              <StatisticLine type='neutral' count={neutral}/>
              <StatisticLine type='bad' count={bad}/>
              <StatisticLine type='average' count={Avg()}/>
              <StatisticLine type='positive' count={Pos()}/>
          </tbody>
      </table>
  )
}
const StatisticLine = ({ type, count }) => {
  if (type === 'positive') {
      return (
          <tr>
              <td>{type}</td>
              <td>{count} %</td>
          </tr>
      )
  }
  return (
      <tr>
          <td>{type}</td>
          <td>{count}</td>
      </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const  total = (good+bad+neutral)
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={()=>setGood(good + 1)}>good</button>
      <button onClick={()=>setNeutral(neutral + 1)}>neutral</button>
      <button onClick={()=>setBad(bad + 1)}>bad</button>
      <h1>Statistic</h1>
      <Statistics good={good} bad={bad} neutral={neutral} total={total}/>
    </div>
  )
}

export default App


