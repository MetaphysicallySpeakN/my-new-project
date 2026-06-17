export default function Results() {
  const brandColors = { navy: "#000080", gold: "#FFD700", white: "#FFFFFF" };

  return (
    <main style={{ fontFamily: "sans-serif", backgroundColor: brandColors.navy, color: brandColors.white, padding: "2rem", minHeight: "100vh" }}>
      <h1 style={{ color: brandColors.gold, textAlign: "center" }}>Your Metaphysical Audit</h1>
      <div style={{ maxWidth: "600px", margin: "auto", padding: "2rem", border: `1px solid ${brandColors.gold}`, borderRadius: "10px" }}>
        <p>Results will be displayed here based on your data.</p>
        <button style={{ backgroundColor: brandColors.gold, color: brandColors.navy, padding: "10px 20px", fontWeight: "bold" }}>
          Unlock Full Report (Stripe Checkout)
        </button>
      </div>
    </main>
  );
}
