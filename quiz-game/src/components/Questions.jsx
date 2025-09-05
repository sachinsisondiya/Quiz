import "./Questions.css"
import { useState, useEffect } from "react"
import {decode} from 'html-entities'
export default function Questions({question , onClick}){
  const [options , setOptions] = useState([])

  useEffect(() =>{

    const shuffled = [question.correct_answer, ...question.incorrect_answers]

   for(let i = options.length -1; i>=0 ; i--){

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
      return <button key = {index} onClick={() =>{
        onClick(option)
      }}>{decode(option)}</button>
    })}
   
  </div>)
}