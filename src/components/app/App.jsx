import { useState } from 'react'
import './App.css'
import Description from '../description/Description'
import Options from '../options/Options'
import Feedback from '../feedback/Feedback'

function App() {
 const [count, setCount] = useState(0)
 const updateFeedback = feedbackType => {
   setCount((count) => count + 1)
}
    

  return (
    <>
      <Description/>
      <Options/>
      <Feedback feedback={updateFeedback}/>
      
    </>
  )
}

export default App
