import css from "./Feedback.module.scss";

const Feedback = () => {
  return (
     <ul className={css["feedback-container"]}>
       <li className={css.item}>Good:</li>
       <li className={css.item}>Neutral:</li>
       <li className={css.item}>Bad:</li>
     </ul>
  )
}

export default Feedback;