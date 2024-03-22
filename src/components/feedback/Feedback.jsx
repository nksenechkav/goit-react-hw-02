import css from "./Feedback.module.scss";

const Feedback = ({ feedback, totalFeedback, positiveFeedback}) => {
  return (
     <ul className={css["feedback-container"]}>
       <li className={css.item}>Good: {feedback.good}</li>
       <li className={css.item}>Neutral: {feedback.neutral}</li>
       <li className={css.item}>Bad: {feedback.bad}</li>
       <li className={css.item}>Total feedback: {totalFeedback}</li>
       <li className={css.item}>Positive: {positiveFeedback}</li>
     </ul>
  )
}

export default Feedback;