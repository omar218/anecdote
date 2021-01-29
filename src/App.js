import React from 'react'
import {useState} from 'react'



const App = (props) => {

 const [selected, setSelected] = useState(0)
 const [votes, setVotes] = useState(0)
 const [anecd, setAnecd] = useState('')
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

const points = [1, 4, 6, 3]
const copy = [...points]


// const  getRandomAnnecdotes = (min, max) => {
//   console.log(Math.random(selected));
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random(selected) * (max - min + 1) + min);
//   setAnecd('') 
// }


  return(
    <div>

      <p> <h1>Anecdotes of the day</h1></p>
      <p>
        {anecdotes[selected]}
      </p>

      
      <button onClick ={()=>setVotes(votes+1)}>
        <text>votes</text>
      </button>


      <button onClick = {()=>setSelected(selected+1)}>
        <text>Next anecdotes</text>
      </button>


      <p>
        votes: {votes}
      </p>

      <p>
        <h1>Annecdotes with most votes</h1>
      </p>
      <p>
        Any fool can writte code that a computer can understand.
        Good programmers writte code that human can understands
        has {votes} votes
      </p>

       {/* <p>
       <button onClick= {getRandomAnnecdotes}>
         <text>AnnecdoteAleatoire</text>
      </button>
       </p> */}
  
    </div>
  )
}

export default App
