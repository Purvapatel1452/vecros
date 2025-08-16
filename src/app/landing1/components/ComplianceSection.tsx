"use client";

import { COLORS } from "../../../constants/colors";

export default function ComplianceSection() {
  return (
    <section className="w-full flex flex-col items-center py-20" style={{ backgroundColor: COLORS.landing1.background }}>
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 tracking-tight" style={{ color: COLORS.landing1.text }}>Fully Compliant. Fully Assured</h2>
      <h3 className="text-2xl md:text-3xl text-center mb-10 font-semibold" style={{ color: COLORS.landing1.primary }}>Manufactured in India</h3>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center items-stretch px-4">
        <div className="rounded-2xl shadow-2xl p-10 flex-1 min-w-[250px] flex flex-col justify-between" style={{ backgroundColor: COLORS.landing1.card, borderColor: COLORS.landing1.cardBorder, borderWidth: '1px' }}>
          <h4 className="text-xl font-bold mb-2" style={{ color: COLORS.landing1.text }}>Care Program</h4>
          <p className="mb-6" style={{ color: COLORS.landing1.cardBorder }}>Hardware/Software upgrades, unlimited repairs and replacements</p>
          <button className="text-white px-7 py-2 rounded-full font-semibold text-base shadow transition self-end"
                  style={{ backgroundColor: COLORS.landing1.button }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.landing1.buttonHover}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.landing1.button}>EXPLORE</button>
        </div>
        <div className="rounded-2xl shadow-2xl p-10 flex-1 min-w-[250px] flex flex-col justify-between" style={{ backgroundColor: COLORS.landing1.card, borderColor: COLORS.landing1.cardBorder, borderWidth: '1px' }}>
          <h4 className="text-xl font-bold mb-2" style={{ color: COLORS.landing1.text }}>Trusted Partner</h4>
          <p className="mb-6" style={{ color: COLORS.landing1.cardBorder }}>Designed, Supported and Manufactured in India, Compliant with regulatory requirements</p>
          <button className="text-white px-7 py-2 rounded-full font-semibold text-base shadow transition self-end"
                  style={{ backgroundColor: COLORS.landing1.button }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.landing1.buttonHover}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.landing1.button}>EXPLORE</button>
        </div>
      </div>
    </section>
  );
}
