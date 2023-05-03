import styles from "./modalStyles.module.scss";

export default function Modal({ isOpen, setOpen, children }) {
  return (
    <>
      {isOpen && (
        <div
          className={styles.container}
          onClick={(event) => {
            setOpen(false);
          }}
        >
          <div
            className={styles.modal_box}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}
