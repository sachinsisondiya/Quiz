
import { useEffect , useState } from "react"
import clsx from "clsx"
import Questions from "./Questions"
export default function Quiz(){
  
  const [questions ,setQuestions]  = useState([])
  const [selectedOptions , setSelectedOptions] = useState([])
  const [results , setResults] = useState([])

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


  function handleClicked(questionIndex ,option){
   setSelectedOptions(prev => [...prev.filter((item)=> item.questionIndex !== questionIndex), {questionIndex , selected:option}])
  }
  console.log(selectedOptions)
  
  function checkAnswer(){
    const results = selectedOptions.map((ans) =>{
      const correct = questions[ans.questionIndex].correct_answer
      return {
        ...ans,
        correct,
        isCorrect: ans.selected === correct
      }
    })
    setResults(results)
  } 
  console.log(results)

  return (
  <div className="quiz-board">

    { questions.length > 0 ? questions.map((question, index)=>{

      return <Questions 
      key={index}
      questionIndex={index} 
      question={question} 
      onClick={handleClicked}
      results = {results} 
      />

    }) : <p>Loading...</p> }
    <button onClick={checkAnswer}> Check Answer</button>
    
     </div>
  )
}