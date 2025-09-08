import "./Quiz.css"
import { useEffect , useState } from "react"
import Questions from "./Questions"
export default function Quiz(){
  
  const [questions ,setQuestions]  = useState([])
  const [selectedOptions , setSelectedOptions] = useState([])
  const [results , setResults] = useState([])
  console.log(results)

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
  // let showResults = false;
  
  function checkAnswer(){
    // showResults = true;
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
  function resetGame(){
    setSelectedOptions([])
    setResults([])
    fetch("https://opentdb.com/api.php?amount=5&category=9&type=multiple")
    .then(res => res.json())
    .then(data => {
      setQuestions(data.results)
    })
  }


  return (
  <div className="quiz-board container">
    <div className="upper-style"></div>
    <div className="lower-style"></div>

    <div className="quiz-box">
      { questions.length > 0 ? questions.map((question, index)=>{

      return <Questions 
      key={index}
      questionIndex={index} 
      question={question} 
      onClick={handleClicked}
      results = {results} 
      selectedOptions = {selectedOptions}
      />

    }) : <p>Loading...</p> }
     {results.length > 0 && <h3 className="score">You scored {results.filter(item => item.isCorrect).length}/5 correct answers</h3>}
     {results.length > 0 ? <button
     className="result-btn" onClick={resetGame}>Play again</button>:<button
    onClick={checkAnswer}
    className="result-btn"> Check Answer</button>}
    </div>
     </div>
  )
}