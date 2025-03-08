const styles = {
  /* backgroundColor: "red", */
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
  position: "absolute",
  top: 0,
  left: 0,
  marginTop: "25px",
  marginLeft: "50px",
};

function LogoContainer() {
  return (
    <div style={styles}>
      <h1 style={{ fontSize: "18px" }}>oheberson_</h1>
      <p style={{ fontSize: "14px" }}>creative developer</p>
    </div>
  );
}

export default LogoContainer;
