import css from "./Options.module.scss";

const Options = ({updateFeedback, totalFeedback, setFeedback}) => {
    const handleReset = () => {
        setFeedback({
          good: 0,
          neutral: 0,
          bad: 0
        });
      }
    
      return (
        <ul className={css["options-container"]}>
          <button className={css.btn} onClick={() => updateFeedback('good')}>Good</button>
          <button className={css.btn} onClick={() => updateFeedback('neutral')}>Neutral</button>
          <button className={css.btn} onClick={() => updateFeedback('bad')}>Bad</button>
          {totalFeedback > 0 && <button className={css.btn} onClick={handleReset}>Reset</button>}
        </ul>
      );
}

export default Options;