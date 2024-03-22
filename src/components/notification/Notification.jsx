import css from "./Notification.module.scss";

const Notification = ({ message }) => {
    return <p className={css.message}>{message}</p>;
  };

export default Notification;