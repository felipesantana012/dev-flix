import styles from "./Input.module.css";

const Input = ({ children, placeholder, altura = "auto" }) => {
  return (
    <label className={styles.estilo_inputs}>
      {children}
      <input
        type="text"
        placeholder={placeholder}
        className={styles.item_inputs}
        style={{ height: altura }}
      />
    </label>
  );
};

export default Input;
