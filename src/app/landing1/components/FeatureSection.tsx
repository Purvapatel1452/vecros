"use client";
import { COLORS } from "../../../constants/colors";

export default function FeatureSection() {
  return (
    <section className="w-full flex flex-col items-center py-20" style={{ backgroundColor: COLORS.landing1.background }}>
      <div className="text-center mb-8">
        <p className="text-sm mb-1" style={{ color: COLORS.landing1.cardBorder }}>Powered by JetPix Autonomy Engine</p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-8" style={{ color: COLORS.landing1.text }}>Human like Flight Inspired by Nature</h2>
      </div>
      <div className="w-full flex justify-center mb-8">
        {/* Large visual placeholder (replace with actual image/video) */}
        <div className="w-[1000px] h-[540px] rounded-2xl flex items-center justify-center overflow-hidden shadow-xl" style={{ backgroundColor: COLORS.landing1.card }}>
          <video
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
      {/* Descriptive text below the video */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <p className="text-sm mb-2" style={{ color: COLORS.landing1.text }}>JETPIX™ is state of the art Operating System developed by experts at VECROS</p>
        <p className="text-sm" style={{ color: COLORS.landing1.text }}>JETPIX™ is equipped with vision aided navigation technology that enables a fail safe path planning and gives you confidence to fly in any environment.</p>
      </div>
      <button className="text-white px-6 py-2 rounded-full font-semibold text-md mt-4 shadow transition mx-auto block"
              style={{ backgroundColor: COLORS.landing1.button }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.landing1.buttonHover}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.landing1.button}>
        EXPLORE JETPIX
      </button>
    </section>
  );
}
