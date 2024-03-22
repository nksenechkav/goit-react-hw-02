import css from "./Options.module.scss";

const Options = () => {
  return (
     <ul className={css["options-container"]}>
       <button className={css.btn}>Good</button>
       <button className={css.btn}>Neutral</button>
       <button className={css.btn}>Bad</button>
     </ul>
  )
}

export default Options;