  "use client";
import { COLORS } from "../../../constants/colors";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-24 pb-32 relative min-h-[60vh] overflow-hidden" style={{ backgroundColor: COLORS.landing1.background }}>
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 pointer-events-none"
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 w-full h-full bg-black opacity-60 z-0 pointer-events-none" />
      <div className="max-w-4xl w-full px-4 text-center z-10 relative">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight" style={{ color: COLORS.landing1.text }}>
          JAMMING <span style={{ color: COLORS.landing1.primary }}>PROOF</span>
        </h1>
        <p className="text-lg md:text-2xl mb-4 font-medium" style={{ color: COLORS.landing1.text }}>
          The world’s best Spatial AI for GPS Jammed missions. AI that can fly autonomously in GPS and Radio Jamming environments.<br/>
          <span className="text-base md:text-lg" style={{ color: COLORS.landing1.cardBorder }}>for DFR, INSPECTION and DEFENSE</span>
        </p>
        <div className="flex justify-center mt-8">
          <button className="text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transition" 
                  style={{ backgroundColor: COLORS.landing1.button }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.landing1.buttonHover}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.landing1.button}>
            BOOK FREE DEMO
          </button>
        </div>
      </div>
    </section>
  );
}
