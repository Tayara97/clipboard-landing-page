export default function Features({ head, parag }) {
  return (
    <div className="feature-list">
      <h3
        style={{
          fontSize: "1.5rem",
        }}
      >
        {head}
      </h3>
      <p>{parag}</p>
    </div>
  );
}
