import React, { useState } from 'react'

// Notes. Math.random() returns a number between 0 and 1, non-inclusive. 
//        Math.floor() truncates the decimals on a number
//        Math.floor(Math.random()*20), for instance, returns a whole number between 0 and 19.
//        anecdotes.length returns highest-index + 1
//        Math.floor(Math.random()*anecdotes.length) will return a random index for anecdotes.

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})
 

  const randomSelection = (array) => {
    let length = array.length;
    let randomIndex = Math.floor(Math.random()*length)
    return randomIndex;
  }

  const voteIncrementAndSet = (index) => {
    let newVotes = {...votes}
    // if there is an existing vote count, increment the number of votes.
    if (newVotes[index]) {
      newVotes[index] += 1
      setVotes(newVotes)
    }
    // This may not need to be if/else
    else {
      newVotes[index] = 1
      setVotes(newVotes)
    }
  }

  const handleNextAnecdote = () => () => setSelected(randomSelection(anecdotes))
  const handleVote = () => () => voteIncrementAndSet()
  

  return (
    <div>
      {anecdotes[selected]}
      <div>
        <Button text="next anecdote" onClick={handleNextAnecdote()} />
        <Button text="vote" onClick={() => voteIncrementAndSet(selected)} /> 
      </div>
    </div>
  )
}

export default App