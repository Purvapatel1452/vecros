"use client";
import { COLORS } from "../../../constants/colors";

export default function PodcastSection() {
  return (
    <section
      className="w-full py-20"
      style={{ backgroundColor: COLORS.landing2.background }}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-lg font-medium mb-4"
            style={{ color: COLORS.landing2.text }}
          >
            Podcast
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: COLORS.landing2.primary }}
          >
            Inspiring Conversations.
          </h2>
        </div>

        {/* Podcast Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Eyes on Success */}
          <div
            className="rounded-lg p-6 shadow-sm border"
            style={{
              backgroundColor: COLORS.landing2.card,
              borderColor: COLORS.landing2.cardBorder,
            }}
          >
            <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Podcast recording studio"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm mb-2" style={{ color: COLORS.landing2.accent }}>
              April 10, 2024
            </p>
            <h3
              className="font-bold text-lg mb-2"
              style={{ color: COLORS.landing2.text }}
            >
              2415 The Envision Glasses and the AI app
            </h3>
            <p
              className="text-sm mb-4"
              style={{ color: COLORS.landing2.accent }}
            >
              Eyes on success radio show
            </p>
            <button
              className="w-full py-2 px-4 rounded-lg font-semibold transition-colors"
              style={{
                backgroundColor: COLORS.landing2.button,
                color: COLORS.white,
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  COLORS.landing2.buttonHover)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  COLORS.landing2.button)
              }
            >
              Hear the Episode
            </button>
          </div>

          {/* Card 2 - Living Blindfully */}
          <div
            className="rounded-lg p-6 shadow-sm border"
            style={{
              backgroundColor: COLORS.landing2.card,
              borderColor: COLORS.landing2.cardBorder,
            }}
          >
            <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D"
                alt="Podcast microphone setup"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm mb-2" style={{ color: COLORS.landing2.accent }}>
              March 10, 2024
            </p>
            <h3
              className="font-bold text-lg mb-2"
              style={{ color: COLORS.landing2.text }}
            >
              Living Blindfully by Jonathan Mosen
            </h3>
            <p
              className="text-sm mb-4"
              style={{ color: COLORS.landing2.accent }}
            >
              Main Menu Live Envision Ally and Jonathan Mosen.
            </p>
            <button
              className="w-full py-2 px-4 rounded-lg font-semibold transition-colors"
              style={{
                backgroundColor: COLORS.landing2.button,
                color: COLORS.white,
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  COLORS.landing2.buttonHover)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  COLORS.landing2.button)
              }
            >
              Hear the Episode
            </button>
          </div>

          {/* Card 3 - The Blind Life */}
          <div
            className="rounded-lg p-6 shadow-sm border"
            style={{
              backgroundColor: COLORS.landing2.card,
              borderColor: COLORS.landing2.cardBorder,
            }}
          >
            <div className="w-full h-48 rounded-lg mb-4 overflow-hidden relative">
              <img
                src="https://plus.unsplash.com/premium_photo-1663091687045-1c7b3ec5953c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D"
                alt="Podcast recording equipment"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute bottom-2 left-2 px-2 py-1 rounded text-xs font-bold"
                style={{
                  backgroundColor: COLORS.white,
                  color: COLORS.landing2.primary,
                }}
              >
                NEW ALLY APP
              </div>
            </div>
            <p className="text-sm mb-2" style={{ color: COLORS.landing2.accent }}>
              April 10, 2024
            </p>
            <h3
              className="font-bold text-lg mb-2"
              style={{ color: COLORS.landing2.text }}
            >
              "Ally" From Envision: Ground-Breaking AI App For The Blind &
              Visually Impaired - Public Beta
            </h3>
            <p
              className="text-sm mb-4"
              style={{ color: COLORS.landing2.accent }}
            >
              The Blind Life By Sam Seavey
            </p>
            <button
              className="w-full py-2 px-4 rounded-lg font-semibold transition-colors"
              style={{
                backgroundColor: COLORS.landing2.button,
                color: COLORS.white,
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  COLORS.landing2.buttonHover)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  COLORS.landing2.button)
              }
            >
              Hear the Episode
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
