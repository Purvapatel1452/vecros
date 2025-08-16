"use client";
import { useState } from "react";
import { COLORS } from "../../../constants/colors";

interface CardProps {
  imgSrc: string;
  imgAlt: string;
  date: string;
  title: string;
  description: string;
  tag?: string;
}

function PodcastCard({ imgSrc, imgAlt, date, title, description, tag }: CardProps) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="rounded-lg p-6 shadow-sm border"
      style={{
        backgroundColor: COLORS.landing2.card,
        borderColor: COLORS.landing2.cardBorder,
      }}
    >
      <div className="w-full h-48 rounded-lg mb-4 overflow-hidden relative">
        <img src={imgSrc} alt={imgAlt} className="w-full h-full object-cover" />
        {tag && (
          <div
            className="absolute bottom-2 left-2 px-2 py-1 rounded text-xs font-bold"
            style={{
              backgroundColor: COLORS.white,
              color: COLORS.landing2.primary,
            }}
          >
            {tag}
          </div>
        )}
      </div>
      <p className="text-sm mb-2" style={{ color: COLORS.landing2.accent }}>
        {date}
      </p>
      <h3 className="font-bold text-lg mb-2" style={{ color: COLORS.landing2.text }}>
        {title}
      </h3>
      <p className="text-sm mb-4" style={{ color: COLORS.landing2.accent }}>
        {description}
      </p>
      <button
        className="w-full py-2 px-4 rounded-lg font-semibold transition-colors"
        style={{
          backgroundColor: hover ? COLORS.landing2.buttonHover : COLORS.landing2.button,
          color: COLORS.white,
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Hear the Episode
      </button>
    </div>
  );
}

export default function PodcastSection() {
  return (
    <section
      className="w-full py-20"
      style={{ backgroundColor: COLORS.landing2.background }}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-lg font-medium mb-4" style={{ color: COLORS.landing2.text }}>
            Podcast
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: COLORS.landing2.primary }}>
            Inspiring Conversations.
          </h2>
        </div>

        {/* Podcast Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PodcastCard
            imgSrc="https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=600&auto=format&fit=crop&q=60"
            imgAlt="Podcast recording studio"
            date="April 10, 2024"
            title="2415 The Envision Glasses and the AI app"
            description="Eyes on success radio show"
          />
          <PodcastCard
            imgSrc="https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?w=600&auto=format&fit=crop&q=60"
            imgAlt="Podcast microphone setup"
            date="March 10, 2024"
            title="Living Blindfully by Jonathan Mosen"
            description="Main Menu Live Envision Ally and Jonathan Mosen."
          />
          <PodcastCard
            imgSrc="https://plus.unsplash.com/premium_photo-1663091687045-1c7b3ec5953c?w=600&auto=format&fit=crop&q=60"
            imgAlt="Podcast recording equipment"
            date="April 10, 2024"
            title='"Ally" From Envision: Ground-Breaking AI App For The Blind & Visually Impaired - Public Beta'
            description="The Blind Life By Sam Seavey"
            tag="NEW ALLY APP"
          />
        </div>
      </div>
    </section>
  );
}
