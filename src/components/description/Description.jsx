import css from "./Description.module.scss";

const Description = () => {
  return (
     <div className={css["header-container"]}>
       <h1 className={css.title}>Sip Happens Café</h1>
       <p className={css.description}>Please leave your feedback about our service by selecting one of the options below.</p>
     </div>
  )
}

export default Description;