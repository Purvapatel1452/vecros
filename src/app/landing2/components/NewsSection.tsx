"use client";
import { COLORS } from "../../../constants/colors";
import React from "react";

export default function NewsSection() {
  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = COLORS.landing2.buttonHover;
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = COLORS.landing2.button;
  };

  return (
    <section
      className="w-screen py-12 sm:py-16 lg:py-20 relative"
      style={{ 
        backgroundColor: COLORS.landing2.background,
        margin: 0,
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p
            className="text-base sm:text-lg font-medium mb-4"
            style={{ color: COLORS.landing2.text }}
          >
            In the News
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{ color: COLORS.landing2.text }}
          >
            Making headlines.
          </h2>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 - Business Insider */}
          <div
            className="rounded-lg p-4 sm:p-6 shadow-sm transition-transform hover:scale-105"
            style={{
              backgroundColor: COLORS.landing2.card,
              border: `1px solid ${COLORS.landing2.cardBorder}`,
            }}
          >
            <div className="w-full h-40 sm:h-48 rounded-lg mb-4 overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1661319134179-50e9552b63c0?w=600&auto=format&fit=crop&q=60"
                alt="Smart glasses technology"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p
              className="text-xs sm:text-sm mb-2"
              style={{ color: COLORS.landing2.accent }}
            >
              December 15, 2023
            </p>
            <h3
              className="font-bold text-base sm:text-lg mb-2"
              style={{ color: COLORS.landing2.text }}
            >
              Business Insider
            </h3>
            <p className="text-xs sm:text-sm mb-4 leading-relaxed" style={{ color: COLORS.landing2.text }}>
              Envision glasses use ChatGPT and Google Glass to help blind and
              low vision.
            </p>
            <button
              className="w-full py-2 sm:py-3 px-4 rounded-lg font-semibold transition-colors text-sm sm:text-base"
              style={{
                backgroundColor: COLORS.landing2.button,
                color: COLORS.landing2.text,
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Read Full Article
            </button>
          </div>

          {/* Card 2 - The Globe And Mail */}
          <div
            className="rounded-lg p-4 sm:p-6 shadow-sm transition-transform hover:scale-105"
            style={{
              backgroundColor: COLORS.landing2.card,
              border: `1px solid ${COLORS.landing2.cardBorder}`,
            }}
          >
            <div className="w-full h-40 sm:h-48 rounded-lg mb-4 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1456081101716-74e616ab23d8?w=600&auto=format&fit=crop&q=60"
                alt="Man using assistive technology"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p
              className="text-xs sm:text-sm mb-2"
              style={{ color: COLORS.landing2.accent }}
            >
              December 27, 2023
            </p>
            <h3
              className="font-bold text-base sm:text-lg mb-2"
              style={{ color: COLORS.landing2.text }}
            >
              The Globe And Mail
            </h3>
            <p className="text-xs sm:text-sm mb-4 leading-relaxed" style={{ color: COLORS.landing2.text }}>
              For some blind and low-vision people, AI glasses unlock a new
              independence.
            </p>
            <button
              className="w-full py-2 sm:py-3 px-4 rounded-lg font-semibold transition-colors text-sm sm:text-base"
              style={{
                backgroundColor: COLORS.landing2.button,
                color: COLORS.landing2.text,
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Read Full Article
            </button>
          </div>

          {/* Card 3 - AT Today */}
          <div
            className="rounded-lg p-4 sm:p-6 shadow-sm transition-transform hover:scale-105 md:col-span-2 lg:col-span-1"
            style={{
              backgroundColor: COLORS.landing2.card,
              border: `1px solid ${COLORS.landing2.cardBorder}`,
            }}
          >
            <div className="w-full h-40 sm:h-48 rounded-lg mb-4 overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=600&auto=format&fit=crop&q=60"
                alt="Woman with smart glasses"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p
              className="text-xs sm:text-sm mb-2"
              style={{ color: COLORS.landing2.accent }}
            >
              January 19, 2024
            </p>
            <h3
              className="font-bold text-base sm:text-lg mb-2"
              style={{ color: COLORS.landing2.text }}
            >
              AT Today
            </h3>
            <p className="text-xs sm:text-sm mb-4 leading-relaxed" style={{ color: COLORS.landing2.text }}>
              Smart glasses&apos; latest upgrade provides succinct AI-powered
              scene descriptions.
            </p>

            <button
              className="w-full py-2 sm:py-3 px-4 rounded-lg font-semibold transition-colors text-sm sm:text-base"
              style={{
                backgroundColor: COLORS.landing2.button,
                color: COLORS.landing2.text,
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Read Full Article
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}










// "use client";
// import { COLORS } from "../../../constants/colors";
// import React from "react";

// export default function NewsSection() {
//   const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.currentTarget.style.backgroundColor = COLORS.landing2.buttonHover;
//   };

//   const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.currentTarget.style.backgroundColor = COLORS.landing2.button;
//   };

//   return (
//     <section
//       className="w-full py-12 sm:py-16 lg:py-20"
//       style={{ backgroundColor: COLORS.landing2.background }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12 sm:mb-16">
//           <p
//             className="text-base sm:text-lg font-medium mb-4"
//             style={{ color: COLORS.landing2.text }}
//           >
//             In the News
//           </p>
//           <h2
//             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
//             style={{ color: COLORS.landing2.text }}
//           >
//             Making headlines.
//           </h2>
//         </div>

//         {/* News Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//           {/* Card 1 - Business Insider */}
//           <div
//             className="rounded-lg p-4 sm:p-6 shadow-sm transition-transform hover:scale-105"
//             style={{
//               backgroundColor: COLORS.landing2.card,
//               border: `1px solid ${COLORS.landing2.cardBorder}`,
//             }}
//           >
//             <div className="w-full h-40 sm:h-48 rounded-lg mb-4 overflow-hidden">
//               <img
//                 src="https://plus.unsplash.com/premium_photo-1661319134179-50e9552b63c0?w=600&auto=format&fit=crop&q=60"
//                 alt="Smart glasses technology"
//                 className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
//               />
//             </div>
//             <p
//               className="text-xs sm:text-sm mb-2"
//               style={{ color: COLORS.landing2.accent }}
//             >
//               December 15, 2023
//             </p>
//             <h3
//               className="font-bold text-base sm:text-lg mb-2"
//               style={{ color: COLORS.landing2.text }}
//             >
//               Business Insider
//             </h3>
//             <p className="text-xs sm:text-sm mb-4 leading-relaxed" style={{ color: COLORS.landing2.text }}>
//               Envision glasses use ChatGPT and Google Glass to help blind and
//               low vision.
//             </p>
//             <button
//               className="w-full py-2 sm:py-3 px-4 rounded-lg font-semibold transition-colors text-sm sm:text-base"
//               style={{
//                 backgroundColor: COLORS.landing2.button,
//                 color: COLORS.landing2.text,
//               }}
//               onMouseOver={handleMouseOver}
//               onMouseOut={handleMouseOut}
//             >
//               Read Full Article
//             </button>
//           </div>

//           {/* Card 2 - The Globe And Mail */}
//           <div
//             className="rounded-lg p-4 sm:p-6 shadow-sm transition-transform hover:scale-105"
//             style={{
//               backgroundColor: COLORS.landing2.card,
//               border: `1px solid ${COLORS.landing2.cardBorder}`,
//             }}
//           >
//             <div className="w-full h-40 sm:h-48 rounded-lg mb-4 overflow-hidden">
//               <img
//                 src="https://images.unsplash.com/photo-1456081101716-74e616ab23d8?w=600&auto=format&fit=crop&q=60"
//                 alt="Man using assistive technology"
//                 className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
//               />
//             </div>
//             <p
//               className="text-xs sm:text-sm mb-2"
//               style={{ color: COLORS.landing2.accent }}
//             >
//               December 27, 2023
//             </p>
//             <h3
//               className="font-bold text-base sm:text-lg mb-2"
//               style={{ color: COLORS.landing2.text }}
//             >
//               The Globe And Mail
//             </h3>
//             <p className="text-xs sm:text-sm mb-4 leading-relaxed" style={{ color: COLORS.landing2.text }}>
//               For some blind and low-vision people, AI glasses unlock a new
//               independence.
//             </p>
//             <button
//               className="w-full py-2 sm:py-3 px-4 rounded-lg font-semibold transition-colors text-sm sm:text-base"
//               style={{
//                 backgroundColor: COLORS.landing2.button,
//                 color: COLORS.landing2.text,
//               }}
//               onMouseOver={handleMouseOver}
//               onMouseOut={handleMouseOut}
//             >
//               Read Full Article
//             </button>
//           </div>

//           {/* Card 3 - AT Today */}
//           <div
//             className="rounded-lg p-4 sm:p-6 shadow-sm transition-transform hover:scale-105 md:col-span-2 lg:col-span-1"
//             style={{
//               backgroundColor: COLORS.landing2.card,
//               border: `1px solid ${COLORS.landing2.cardBorder}`,
//             }}
//           >
//             <div className="w-full h-40 sm:h-48 rounded-lg mb-4 overflow-hidden">
//               <img
//                 src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=600&auto=format&fit=crop&q=60"
//                 alt="Woman with smart glasses"
//                 className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
//               />
//             </div>
//             <p
//               className="text-xs sm:text-sm mb-2"
//               style={{ color: COLORS.landing2.accent }}
//             >
//               January 19, 2024
//             </p>
//             <h3
//               className="font-bold text-base sm:text-lg mb-2"
//               style={{ color: COLORS.landing2.text }}
//             >
//               AT Today
//             </h3>
//             <p className="text-xs sm:text-sm mb-4 leading-relaxed" style={{ color: COLORS.landing2.text }}>
//               Smart glasses&apos; latest upgrade provides succinct AI-powered
//               scene descriptions.
//             </p>

//             <button
//               className="w-full py-2 sm:py-3 px-4 rounded-lg font-semibold transition-colors text-sm sm:text-base"
//               style={{
//                 backgroundColor: COLORS.landing2.button,
//                 color: COLORS.landing2.text,
//               }}
//               onMouseOver={handleMouseOver}
//               onMouseOut={handleMouseOut}
//             >
//               Read Full Article
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";
// import { COLORS } from "../../../constants/colors";
// import React from "react";

// export default function NewsSection() {
//   const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.currentTarget.style.backgroundColor = COLORS.landing2.buttonHover;
//   };

//   const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.currentTarget.style.backgroundColor = COLORS.landing2.button;
//   };

//   return (
//     <section
//       className="w-full py-20"
//       style={{ backgroundColor: COLORS.landing2.background }}
//     >
//       <div className="max-w-7xl mx-auto px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <p
//             className="text-lg font-medium mb-4 bg-clip-text text-transparent"
//             style={{
//               backgroundImage: `url('/images/text-bg.png')`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             In the News
//           </p>
//           <h2
//             className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent"
//             style={{
//               backgroundImage: `url('/images/text-bg.png')`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             Making headlines.
//           </h2>
//         </div>

//         {/* News Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Card 1 - Business Insider */}
//           <div
//             className="rounded-lg p-6 shadow-sm"
//             style={{
//               backgroundColor: COLORS.landing2.card,
//               border: `1px solid ${COLORS.landing2.cardBorder}`,
//             }}
//           >
//             <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
//               <img
//                 src="https://plus.unsplash.com/premium_photo-1661319134179-50e9552b63c0?w=600&auto=format&fit=crop&q=60"
//                 alt="Smart glasses technology"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <p
//               className="text-sm mb-2"
//               style={{ color: COLORS.landing2.accent }}
//             >
//               December 15, 2023
//             </p>
//             <h3
//               className="font-bold text-lg mb-2"
//               style={{ color: COLORS.landing2.text }}
//             >
//               Business Insider
//             </h3>
//             <p className="text-sm mb-4" style={{ color: COLORS.landing2.text }}>
//               Envision glasses use ChatGPT and Google Glass to help blind and
//               low vision.
//             </p>
//             <button
//               className="w-full py-2 px-4 rounded-lg font-semibold transition-colors"
//               style={{
//                 backgroundColor: COLORS.landing2.button,
//                 color: COLORS.landing2.text,
//               }}
//               onMouseOver={handleMouseOver}
//               onMouseOut={handleMouseOut}
//             >
//               Read Full Article
//             </button>
//           </div>

//           {/* Card 2 - The Globe And Mail */}
//           <div
//             className="rounded-lg p-6 shadow-sm"
//             style={{
//               backgroundColor: COLORS.landing2.card,
//               border: `1px solid ${COLORS.landing2.cardBorder}`,
//             }}
//           >
//             <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
//               <img
//                 src="https://images.unsplash.com/photo-1456081101716-74e616ab23d8?w=600&auto=format&fit=crop&q=60"
//                 alt="Man using assistive technology"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <p
//               className="text-sm mb-2"
//               style={{ color: COLORS.landing2.accent }}
//             >
//               December 27, 2023
//             </p>
//             <h3
//               className="font-bold text-lg mb-2"
//               style={{ color: COLORS.landing2.text }}
//             >
//               The Globe And Mail
//             </h3>
//             <p className="text-sm mb-4" style={{ color: COLORS.landing2.text }}>
//               For some blind and low-vision people, AI glasses unlock a new
//               independence.
//             </p>
//             <button
//               className="w-full py-2 px-4 rounded-lg font-semibold transition-colors"
//               style={{
//                 backgroundColor: COLORS.landing2.button,
//                 color: COLORS.landing2.text,
//               }}
//               onMouseOver={handleMouseOver}
//               onMouseOut={handleMouseOut}
//             >
//               Read Full Article
//             </button>
//           </div>

//           {/* Card 3 - AT Today */}
//           <div
//             className="rounded-lg p-6 shadow-sm"
//             style={{
//               backgroundColor: COLORS.landing2.card,
//               border: `1px solid ${COLORS.landing2.cardBorder}`,
//             }}
//           >
//             <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
//               <img
//                 src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=600&auto=format&fit=crop&q=60"
//                 alt="Woman with smart glasses"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <p
//               className="text-sm mb-2"
//               style={{ color: COLORS.landing2.accent }}
//             >
//               January 19, 2024
//             </p>
//             <h3
//               className="font-bold text-lg mb-2"
//               style={{ color: COLORS.landing2.text }}
//             >
//               AT Today
//             </h3>
//             <p className="text-sm mb-4" style={{ color: COLORS.landing2.text }}>
//               Smart glasses&apos; latest upgrade provides succinct AI-powered
//               scene descriptions.
//             </p>

//             <button
//               className="w-full py-2 px-4 rounded-lg font-semibold transition-colors"
//               style={{
//                 backgroundColor: COLORS.landing2.button,
//                 color: COLORS.landing2.text,
//               }}
//               onMouseOver={handleMouseOver}
//               onMouseOut={handleMouseOut}
//             >
//               Read Full Article
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
