
export default function Container({ children }) {
  return (
    <>
      <div style={{maxWidth:"800px", margin:"auto",padding:"15px 20px"}}>
        {children}
      </div>
    </>
  );
}
