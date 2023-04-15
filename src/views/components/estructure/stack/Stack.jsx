import styles from "./stackStyles.module.scss";

export default function Stack({
  children,
  justifyContent,
  direction,
  alignItems,
  style,
  Ref,
  cor,
}) {
  const colors = {
    amarelo: "yellow",
  };
  return (
    <>
      <div
        ref={Ref}
        className={`${styles.flex}`}
        style={{
          justifyContent,
          alignItems,
          direction,
          backgroundColor: colors[cor],
          ...style,
        }}
      >
        {children}
      </div>
    </>
  );
}

const Card = () => {
  return (
    <Stack style={{ backgroundColor: "yellow" }}>
      <div></div>
    </Stack>
  );
};
