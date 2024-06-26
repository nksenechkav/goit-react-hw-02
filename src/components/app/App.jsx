import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Description from '../description/Description'
import Options from '../options/Options'
import Feedback from '../feedback/Feedback'
import Notification from '../notification/Notification'

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("key");

    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
    good: 0,
    neutral: 0,
    bad: 0
  };
  });

useEffect(() => {
  window.localStorage.setItem("key", JSON.stringify(feedback));
}, [feedback]);


const updateFeedback = feedbackType => {
  setFeedback({
    ...feedback,
    [feedbackType]: feedback[feedbackType] + 1
  });
};
    
const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options feedback={feedback} updateFeedback={updateFeedback} totalFeedback={totalFeedback} setFeedback={setFeedback} />
      {totalFeedback > 0 ? 
      <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} /> : 
      <Notification message={'No feedback given yet.'} />}
    </>
  )
}

export default App
