
import { useEffect , useState } from "react"
import Questions from "./Questions"
export default function Quiz(){
  
  const [questions ,setQuestions]  = useState([])
  const [selectedOptions , setSelectedOptions] = useState([])
  const [correctAnswer , setCorrectAnswer] = useState([])
  const [wrongAnswer , setWrongAnswer] = useState([])

  useEffect(()=>{
    let ignore  = false;
    fetch("https://opentdb.com/api.php?amount=5&category=9&type=multiple")
      .then(res => res.json())
      .then(data =>{
         setQuestions(data.results
         )
        
   })
   return () =>{
    ignore = true;
   }

  },[])
  function handleClicked(option){
   setSelectedOptions(prev => [...prev, option])
   
  }
  console.log(selectedOptions)
  
  function checkAnswer(){
    console.log(checked)
  } 
  return (
  <div className="quiz-board">

    { questions.length > 0 ? questions.map((question, index)=>{

      return <Questions key={index} question={question} onClick={handleClicked} />

    }) : <p>Loading...</p> }
    <button onClick={checkAnswer}> Check Answer</button>
    
     </div>
  )
}