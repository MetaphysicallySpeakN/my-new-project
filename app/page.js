export default function Home() {
  const brandColors = { navy: "#000080", gold: "#FFD700", white: "#FFFFFF" };

  return (
    <main style={{ fontFamily: "sans-serif", backgroundColor: brandColors.navy, color: brandColors.white, padding: "2rem", minHeight: "100vh" }}>
      <h1 style={{ color: brandColors.gold, textAlign: "center" }}>Metaphysically SpeakN</h1>
      
      <section style={{ maxWidth: "600px", margin: "auto", border: `1px solid ${brandColors.gold}`, padding: "2rem", borderRadius: "10px" }}>
        <h2 style={{ textAlign: "center" }}>Start Your Audit</h2>
        
        <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label>Name:</label>
          <input type="text" placeholder="Your Name" style={{ padding: "8px" }} />
          
          <label>Month/Year of Birth:</label>
          <input type="month" style={{ padding: "8px" }} />
          
          <label>Company Name:</label>
          <input type="text" placeholder="Company Name" style={{ padding: "8px" }} />
          
          <label>Company Location:</label>
          <input type="text" placeholder="City, State/Country" style={{ padding: "8px" }} />

          <label>Founding Date:</label>
          <input type="date" style={{ padding: "8px" }} />
          
          <label>Team Members (Optional):</label>
          <textarea placeholder="e.g. John Doe - 05/1990" rows="3" style={{ padding: "8px" }}></textarea>
          
          <button style={{ marginTop: "20px", backgroundColor: brandColors.gold, color: brandColors.navy, padding: "12px", border: "none", cursor: "pointer", fontWeight: "bold" }}>
            Submit for 7-Day Free Audit
          </button>
        </form>
      </section>
    </main>
  );
}
