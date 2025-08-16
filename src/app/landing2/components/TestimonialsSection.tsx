"use client";
import { COLORS } from "../../../constants/colors";

export default function TestimonialsSection() {
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
            Testimonials
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: COLORS.landing2.text }}
          >
            Don't just take our word for it.
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Mili */}
          <div
            className="rounded-lg p-8 shadow-sm"
            style={{
              backgroundColor: COLORS.landing2.card,
              border: `1px solid ${COLORS.landing2.cardBorder}`,
            }}
          >
            <div className="flex flex-col items-start gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden"
                style={{ backgroundColor: COLORS.gray }}
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHAlMjBwaWNzfGVufDB8fDB8fHww"
                  alt="Mili profile picture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3
                  className="font-bold text-lg"
                  style={{ color: COLORS.landing2.text }}
                >
                  Mili
                </h3>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: COLORS.landing2.text }}
            >
              @LetsEnvision This App is amazing. From scene descriptions to text
              recognition - (yea, even handwriting!) This type of applications are
              those that really allow us to increasingly remove little by little
              the barrier of our disability. Keep up the excellent work!
            </p>
          </div>

          {/* Card 2 - Vicky Cardona */}
          <div
            className="rounded-lg p-8 shadow-sm"
            style={{
              backgroundColor: COLORS.landing2.card,
              border: `1px solid ${COLORS.landing2.cardBorder}`,
            }}
          >
            <div className="flex flex-col items-start gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden"
                style={{ backgroundColor: COLORS.gray }}
              >
                <img
                  src="https://images.unsplash.com/photo-1634833740183-3193a06cac2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHAlMjBwaWNzfGVufDB8fDB8fHww"
                  alt="Vicky Cardona profile picture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3
                  className="font-bold text-lg"
                  style={{ color: COLORS.landing2.text }}
                >
                  Vicky Cardona
                </h3>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: COLORS.landing2.text }}
            >
              Tonight I ordered Chinese for dinner. As usual they put a bunch of
              sauce packets in the bag, all of which feel the same. I was able to
              use my Envision Glasses to identify what they were, which ones were
              soy sauce and which ones were duck sauce. Thanks Envision.
            </p>
          </div>

          {/* Card 3 - Andre Luis */}
          <div
            className="rounded-lg p-8 shadow-sm"
            style={{
              backgroundColor: COLORS.landing2.card,
              border: `1px solid ${COLORS.landing2.cardBorder}`,
            }}
          >
            <div className="flex flex-col items-start gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden"
                style={{ backgroundColor: COLORS.gray }}
              >
                <img
                  src="https://images.unsplash.com/photo-1717838951848-08659bdd9399?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRwJTIwcGljc3xlbnwwfHwwfHx8MA%3D%3D"
                  alt="Andre Luis profile picture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3
                  className="font-bold text-lg"
                  style={{ color: COLORS.landing2.text }}
                >
                  Andre Luis
                </h3>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: COLORS.landing2.text }}
            >
              Envision AI is fast and it just works. It's very easy to use, but
              that doesn't mean simplistic. I'm happy to say Envision does what it
              says on the tin and performs extremely well.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
