import Link from 'next/link';

export default function Home() {
  const brandColors = { navy: "#000080", gold: "#FFD700" };

  return (
    <main style={{ fontFamily: "sans-serif" }}>
      <section style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h1>Start Your Audit</h1>
        
        {/* Your input fields go here */}
        <label>Name:</label>
        <input type="text" placeholder="Your Name" style={{ display: "block", marginBottom: "10px" }} />

        {/* The navigation button */}
        <Link href="/results" style={{ textDecoration: "none" }}>
          <button type="button" style={{ 
            marginTop: "20px", 
            backgroundColor: brandColors.gold, 
            color: brandColors.navy, 
            padding: "12px", 
            border: "none", 
            cursor: "pointer", 
            fontWeight: "bold", 
            fontSize: "1rem", 
            width: "100%" 
          }}>
            Submit for 7-Day Free Audit
          </button>
        </Link>
      </section>
    </main>
  );
}
