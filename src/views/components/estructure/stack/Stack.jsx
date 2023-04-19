import useInlineStyle from "@/hooks/useInlineStyles";

export default function Stack({
  children,
  justifyContent,
  direction,
  alignItems,
  sp,
  cor,
}) {
  const [stackRef, style] = useInlineStyle(sp);
  console.log("renderizou");
  const colors = {
    amarelo: "yellow",
  };
  return (
    <>
      <div
        ref={stackRef}
        style={{
          display: "flex",
          justifyContent: "space-between",
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

