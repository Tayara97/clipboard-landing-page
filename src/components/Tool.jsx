export function Tool({ logo, heading, parag }) {
  return (
    <div className="tool-box">
      <img src={logo} alt="tool" />
      <h3>{heading}</h3>
      <p>{parag}</p>
    </div>
  );
}
