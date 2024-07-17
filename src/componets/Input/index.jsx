import styles from "./Input.module.css";

const Input = ({ children, placeholder, name, value, onChange, error }) => {
  return (
    <label
      htmlFor={name}
      className={`${styles.inputGroup} ${error ? styles.error : ""} ${
        styles.estilo_inputs
      }`}
    >
      {children}
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.item_inputs}
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </label>
  );
};

export default Input;
