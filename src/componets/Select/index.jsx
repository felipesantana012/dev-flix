import styles from "./Select.module.css";

const Select = ({ children, name, value, onChange, options, error }) => {
  return (
    <label
      htmlFor={name}
      className={`${styles.select} ${error ? styles.error : ""}`}
    >
      {children}
      <select id={name} name={name} value={value} onChange={onChange}>
        {options}
      </select>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </label>
  );
};

export default Select;
