import styles from "./Input.module.css";

const Input = ({
  type,
  name,
  id,
  variant,
  label,
  value,
  placeholder,
  onChangeHandler,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id}>{label}</label>
      <input
        data-variant={variant}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={value}
      />
    </div>
  );
};

export default Input;
