import "./Questions.css"
import { useState, useEffect } from "react"
import {decode} from 'html-entities'
import clsx from "clsx"
export default function Questions({question , onClick,questionIndex, results}){
  const [options , setOptions] = useState([])
  const result = results.find( r =>{
   return r.questionIndex === questionIndex
  })

  useEffect(() =>{

    const shuffled = [question.correct_answer, ...question.incorrect_answers]

   for(let i = shuffled.length -1; i>=0 ; i--){

  const j = Math.floor(Math.random() * (i +1))
  let temp = shuffled[i];
  shuffled[i] = shuffled[j];
  shuffled[j] = temp;
   }
   setOptions(shuffled)
   
  }, [question])

   

  
  //  console.log(options)
  return (<div className="questions">
    <p>{decode(question.question)}</p>
    {options.map((option , index)=>{
      const isSelected = result?.selected === option
      const isCorrect = result?.correct === option

      return <button key = {index} onClick={() =>{
        onClick(questionIndex,option)
      }}
      className = {clsx("option-btn" ,
      isSelected && "selected",
      result && isCorrect && "correct",
      result && isSelected && !isCorrect && "wrong"
    )}>{decode(option)}</button>
    })}
   
  </div>)
}