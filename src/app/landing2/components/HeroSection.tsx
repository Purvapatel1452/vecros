"use client";
import { COLORS } from "../../../constants/colors";

export default function HeroSection() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: COLORS.landing2.background }}
    >
      {/* Yellow Promotional Banner */}
      <div
        className="w-full py-3 text-center"
        style={{ backgroundColor: COLORS.yellow }}
      >
        <p
          className="font-medium"
          style={{ color: COLORS.background }}
        >
          Pre-order the Ally Solos Glasses today & save big
        </p>
      </div>

      {/* Hero Content */}
      <div className="w-full max-w-7xl mx-auto px-8 py-20 flex items-center justify-between">
        {/* Left Side - Text Content */}
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <div className="flex-1 max-w-2xl">
          <h1
            className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
            style={{ color: COLORS.landing2.text }}
          >
            Perceive Possibility
          </h1>
          <p
            className="text-xl mb-8 leading-relaxed"
            style={{ color: COLORS.landing2.text }}
          >
            Envision empowers people who are blind or have low vision to access
            everyday visual information for themselves. Because it isn't just
            information. It's knowledge, independence and possibility.
          </p>
          <button
            className="px-8 py-3 rounded-full font-semibold text-lg border transition-colors"
            style={{
              backgroundColor: COLORS.landing2.button,
              color: COLORS.landing2.text,
              borderColor: COLORS.landing2.cardBorder,
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.landing2.secondary)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.landing2.button)
            }
          >
            Shop now
          </button>
        </div>

        {/* Right Side - Hero Image */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="relative w-[500px] h-[600px]">
            {/* Background Dots Pattern */}
            <div className="absolute inset-0">
              <div className="grid grid-cols-8 gap-4 opacity-30">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: COLORS.landing2.text }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative z-10 w-full h-full rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1512099053734-e6767b535838?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Person wearing smart glasses"
                className="w-full h-full object-cover"
                style={{
                  filter: "brightness(0.9) contrast(1.1)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
