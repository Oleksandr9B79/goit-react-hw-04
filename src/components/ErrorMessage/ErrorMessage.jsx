import css from "./ErrorMessage.module.css";
function ErrorMessage({ children }) {
  return <p className={css.message}>{children}</p>;
}
export default ErrorMessage;
