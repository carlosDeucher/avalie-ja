import styles from "./containerStyles.module.scss";

export default function Container({ children }) {
  return (
    <>
      <div className={styles.container}>
        {children}
      </div>
    </>
  );
}
