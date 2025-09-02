export default function Quiz(){
  fetch("https://opentdb.com/api.php?amount=10&category=9&type=multiple")
  .then(res => res.json())
   console.log(res.json())
  return (
  <div className="quiz-board">

    <h1> quiz time</h1>
  </div>
  )
}