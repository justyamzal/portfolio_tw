// ============================================================
//  Background.jsx
//  Tetap pakai class CSS murni karena filter:blur & radial-
//  gradient kompleks tidak praktis ditulis sebagai Tailwind
//  arbitrary values.
// ============================================================

export default function Background() {
  return (
    <div className="background">
      <div className="glow one" />
      <div className="glow two" />
      <div className="glow three" />
      <div className="grid-overlay" />
    </div>
  );
}
