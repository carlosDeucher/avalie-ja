import styles from "./mainButtonStyles.module.scss"

export default function MainButton({ onClick, children }) {
  return <button className={styles.button} onClick={onClick}>{children}</button>;
}
