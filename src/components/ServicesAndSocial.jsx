const styles = {
  position: "absolute",
  bottom: 0,
  left: 0,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "start",
  marginBottom: "25px",
  marginLeft: "50px",
};

function ServicesAndSocial() {
  return (
    <div style={styles}>
      <p>desenvolvedor web</p>
      <p>desenvolvedor mobile</p>
      <p>design web</p>
      <p>arte 3D</p>

      <div style={{ display: "flex", gap: "2rem", marginTop: "1.5rem" }}>
        <span>T</span>
        <span>in</span>
        <span>Be</span>
      </div>
    </div>
  );
}

export default ServicesAndSocial;
