const spec: [number, string][] = [[.7,""],[.9,"k"],[.55,"g"],[1,""],[.8,"k"],[.65,""],[.95,"g"],[.75,""],[.5,"k"],[.85,""],[1,"k"],[.6,"g"],[.9,""],[.7,"k"],[.8,""],[.55,"g"],[.95,"k"],[.65,""],[.85,""],[.7,"g"]];

export default function Shelf() {
  return (
    <div className="shelf" role="img" aria-label="A row of books standing on a shelf, drawn in black and white">
      {spec.map(([h, c], i) => (
        <div key={i} className={`b ${c}${i === 11 ? " lean" : ""}`} style={{ height: `${h * 100}%`, flexBasis: 26 + ((i * 13) % 34) }} />
      ))}
    </div>
  );
}
