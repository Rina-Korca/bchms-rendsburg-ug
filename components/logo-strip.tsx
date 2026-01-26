const partners = [
  "Rasenpflege",
  "Baumschnitt",
  "Gartengestaltung",
  "Landschaftsbau",
  "Bewasserung",
  "Hardscaping",
];

const watermarkText = Array(12).fill("BCHMS Rendsburg UG");

export function LogoStrip() {
  const duplicatedPartners = [
    ...partners,
    ...partners,
    ...partners,
    ...partners,
  ];
  const duplicatedWatermark = [...watermarkText, ...watermarkText];

  return (
    <section className="relative py-24 md:py-28 overflow-hidden -my-12 z-10">
      <img
        src="/images/garden-tools.png"
        alt=""
        className="absolute opacity-80 pointer-events-none z-20"
        style={{
          top: "clamp(0rem, 2vw, 1.5rem)",
          left: "clamp(0rem, 3vw, 2rem)",
          width: "clamp(7rem, 12vw, 12rem)",
        }}
      />
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .scroll-left {
          animation: scroll-left 20s linear infinite;
        }
        .scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>

      {/* Rotated wrapper containing both ribbons */}
      <div
        className="relative flex flex-col items-center justify-center"
        style={{ transform: "rotate(-8deg)" }}
      >
        {/* Strip A - Top front ribbon (dark green with logos) */}
        <div
          className="relative z-20 w-[150vw] h-16 md:h-20 lg:h-24 bg-green-dark flex items-center overflow-hidden"
          style={{ boxShadow: "0 8px 25px rgba(0,0,0,0.3)" }}
        >
          <div className="scroll-left flex items-center whitespace-nowrap">
            {duplicatedPartners.map((partner, index) => (
              <span
                key={index}
                className="text-white font-bold text-xs md:text-sm lg:text-base tracking-[0.2em] uppercase whitespace-nowrap mx-6 md:mx-10 lg:mx-14"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* Strip B - Bottom back ribbon (light mint with watermark text) */}
        <div
          className="relative z-10 w-[150vw] h-14 md:h-16 lg:h-20 bg-green-light/40 flex items-center overflow-hidden"
          style={{ marginTop: "-8px" }}
        >
          <div className="scroll-right flex items-center whitespace-nowrap">
            {duplicatedWatermark.map((text, index) => (
              <span
                key={index}
                className="text-green-dark/30 font-bold text-lg md:text-xl lg:text-2xl uppercase tracking-[0.15em] mx-6 md:mx-8"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
