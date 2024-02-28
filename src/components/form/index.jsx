import styles from "./Form.module.css";

const Form = ({ action, children, method, onSubmit }) => {
  return (
    <form
      action={action}
      method={method}
      onSubmit={onSubmit}
      className={styles.form}
    >
      {children}
    </form>
  );
};
export default Form;
