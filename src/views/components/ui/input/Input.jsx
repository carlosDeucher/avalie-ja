import styles from "./inputStyles.module.scss";
export default function Input({
  placeholder,
  register = () => null, //register e name sao utilizados para controlar o input com o useForm
  name,
  onChange,
  style,
  value,
}) {
  return (
    <input
      {...register(name)}
      onChange={onChange}
      className={styles.input}
      value={value}
      type="text"
      placeholder={placeholder}
      style={style}
    ></input>
  );
}
