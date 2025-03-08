const styles = {
  /* backgroundColor: "red", */
  display: "flex",
  justifyContent: "start",
  alignItems: "end",
  position: "absolute",
  top: 0,
  right: 0,
  marginTop: "25px",
  marginRight: "50px",
  gap: "2rem",
};

function UpperCornerMenu() {
  return (
    <div style={styles}>
      <p>currículo</p>
      <p>EN</p>
      <p>
        <strong>contato</strong>
      </p>
    </div>
  );
}

export default UpperCornerMenu;
