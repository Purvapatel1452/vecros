"use client";
import { COLORS } from "../../../constants/colors";

export default function ContactSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-32" style={{ backgroundColor: COLORS.landing1.background }}>
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 leading-tight" style={{ color: COLORS.landing1.text }}>
        Start <span style={{ color: COLORS.landing1.primary }}>conversation</span><br/>with our team.
      </h2>
      <button className="text-white px-10 py-3 rounded-full font-bold text-lg shadow transition"
              style={{ backgroundColor: COLORS.landing1.button }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.landing1.buttonHover}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.landing1.button}>
        CONTACT
      </button>
    </section>
  );
}
