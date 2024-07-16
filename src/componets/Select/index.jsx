import styles from "./Select.module.css";

const Select = ({ children }) => {
  return (
    <label htmlFor="" className={styles.select}>
      {children}
      <select name="categorias" id="categorias">
        <option value="">selecione uma categoría</option>
      </select>
    </label>
  );
};

export default Select;
