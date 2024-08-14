export default function Title({ header, paragh }) {
  return (
    <div className="title">
      <h2 style={{ margin: "0 0 1rem", fontSize: "2rem" }}>{header} </h2>
      <p>{paragh}</p>
    </div>
  );
}
