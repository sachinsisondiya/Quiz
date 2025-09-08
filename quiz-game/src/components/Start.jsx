import "./Start.css"


export default function Start({setStart}){
  return (<>
  <main className="start-container">
    <div className="upper-style"></div>
    <div className="lower-style"></div>
    <div className="start-box">
    <h1>Quizzical</h1>
    <p>Some description if needed</p>
    <button onClick={() => setStart(true)}>Start quiz</button>
    </div>
    
  </main>
  </>)
}