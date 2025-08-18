"use client";
import { COLORS } from "../../../constants/colors";

export default function HeroSection() {
  return (
    <section
      className="w-screen min-h-screen relative"
      style={{ 
        backgroundColor: COLORS.landing2.background,
        margin: 0,
        padding: 0,
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
      }}
    >
      {/* Yellow Promotional Banner - Absolute full width */}
      <div
        className="w-full py-2 sm:py-3 text-center px-4 relative"
        style={{ 
          backgroundColor: COLORS.yellow,
          margin: 0,
          padding: '0.5rem 1rem',
        }}
      >
        <p className="font-medium text-sm sm:text-base" style={{ color: COLORS.background }}>
          Pre-order the Ally Solos Glasses today &amp; save big
        </p>
      </div>

      {/* Hero Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 relative">
        {/* Left Side - Text Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight"
            style={{ color: COLORS.landing2.text }}
          >
            Perceive Possibility
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed"
            style={{ color: COLORS.landing2.text }}
          >
            Envision empowers people who are blind or have low vision to access
            everyday visual information for themselves. Because it isn&apos;t
            just information. It&apos;s knowledge, independence, and
            possibility.
          </p>

          <button
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-colors w-full sm:w-auto"
            style={{
              backgroundColor: COLORS.landing2.button,
              color: COLORS.landing2.text,
              border: 'none',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                COLORS.landing2.secondary)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.landing2.button)
            }
          >
            Shop now
          </button>
        </div>

        {/* Right Side - Hero Image */}
        <div className="flex-1 flex justify-center items-center relative w-full">
          <div className="relative w-full max-w-[600px] h-[400px] sm:h-[500px] md:h-[600px]">
            {/* Background Dots Pattern */}
            <div className="absolute inset-0">
              <div className="grid grid-cols-6 sm:grid-cols-8 gap-2 sm:gap-4 opacity-30 p-4">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                    style={{ backgroundColor: COLORS.landing2.text }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative z-10 w-full h-full rounded-lg overflow-hidden">
              <img
                src="/images/glasses.jpg"
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

// "use client";
// import { COLORS } from "../../../constants/colors";

// export default function HeroSection() {
//   return (
//     <section
//       className="w-full"
//       style={{ backgroundColor: COLORS.landing2.background }}
//     >
//       {/* Yellow Promotional Banner */}
//       <div
//         className="w-full py-2 sm:py-3 text-center px-4"
//         style={{ backgroundColor: COLORS.yellow }}
//       >
//         <p className="font-medium text-sm sm:text-base" style={{ color: COLORS.background }}>
//           Pre-order the Ally Solos Glasses today &amp; save big
//         </p>
//       </div>

//       {/* Hero Content */}
//       <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
//         {/* Left Side - Text Content */}
//         <div className="flex-1 max-w-2xl text-center lg:text-left">
//           <h1
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight"
//             style={{ color: COLORS.landing2.text }}
//           >
//             Perceive Possibility
//           </h1>

//           <p
//             className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed"
//             style={{ color: COLORS.landing2.text }}
//           >
//             Envision empowers people who are blind or have low vision to access
//             everyday visual information for themselves. Because it isn&apos;t
//             just information. It&apos;s knowledge, independence, and
//             possibility.
//           </p>

//           <button
//             className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg border transition-colors w-full sm:w-auto"
//             style={{
//               backgroundColor: COLORS.landing2.button,
//               color: COLORS.landing2.text,
//               borderColor: COLORS.landing2.cardBorder,
//             }}
//             onMouseOver={(e) =>
//               (e.currentTarget.style.backgroundColor =
//                 COLORS.landing2.secondary)
//             }
//             onMouseOut={(e) =>
//               (e.currentTarget.style.backgroundColor = COLORS.landing2.button)
//             }
//           >
//             Shop now
//           </button>
//         </div>

//         {/* Right Side - Hero Image */}
//         <div className="flex-1 flex justify-center items-center relative w-full">
//           <div className="relative w-full max-w-[500px] h-[400px] sm:h-[500px] md:h-[600px]">
//             {/* Background Dots Pattern */}
//             <div className="absolute inset-0">
//               <div className="grid grid-cols-6 sm:grid-cols-8 gap-2 sm:gap-4 opacity-30 p-4">
//                 {Array.from({ length: 48 }).map((_, i) => (
//                   <div
//                     key={i}
//                     className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
//                     style={{ backgroundColor: COLORS.landing2.text }}
//                   ></div>
//                 ))}
//               </div>
//             </div>

//             {/* Hero Image */}
//             <div className="relative z-10 w-full h-full rounded-lg overflow-hidden">
//               <img
//                 src="https://images.unsplash.com/photo-1512099053734-e6767b535838?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D"
//                 alt="Person wearing smart glasses"
//                 className="w-full h-full object-cover"
//                 style={{
//                   filter: "brightness(0.9) contrast(1.1)",
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";
// import { COLORS } from "../../../constants/colors";

// export default function HeroSection() {
//   return (
//     <section
//       className="w-full"
//       style={{ backgroundColor: COLORS.landing2.background }}
//     >
//       {/* Yellow Promotional Banner */}
//       <div
//         className="w-full py-3 text-center"
//         style={{ backgroundColor: COLORS.yellow }}
//       >
//         <p className="font-medium" style={{ color: COLORS.background }}>
//           Pre-order the Ally Solos Glasses today &amp; save big
//         </p>
//       </div>

//       {/* Hero Content */}
//       <div className="w-full max-w-7xl mx-auto px-8 py-20 flex items-center justify-between">
//         {/* Left Side - Text Content */}
//         <div className="flex-1 max-w-2xl">
//           <h1
//             className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
//             style={{ color: COLORS.landing2.text }}
//           >
//             Perceive Possibility
//           </h1>

//           <p
//             className="text-xl mb-8 leading-relaxed"
//             style={{ color: COLORS.landing2.text }}
//           >
//             Envision empowers people who are blind or have low vision to access
//             everyday visual information for themselves. Because it isn&apos;t
//             just information. It&apos;s knowledge, independence, and
//             possibility.
//           </p>

//           <button
//             className="px-8 py-3 rounded-full font-semibold text-lg border transition-colors"
//             style={{
//               backgroundColor: COLORS.landing2.button,
//               color: COLORS.landing2.text,
//               borderColor: COLORS.landing2.cardBorder,
//             }}
//             onMouseOver={(e) =>
//               (e.currentTarget.style.backgroundColor =
//                 COLORS.landing2.secondary)
//             }
//             onMouseOut={(e) =>
//               (e.currentTarget.style.backgroundColor = COLORS.landing2.button)
//             }
//           >
//             Shop now
//           </button>
//         </div>

//         {/* Right Side - Hero Image */}
//         <div className="flex-1 flex justify-center items-center relative">
//           <div className="relative w-[500px] h-[600px]">
//             {/* Background Dots Pattern */}
//             <div className="absolute inset-0">
//               <div className="grid grid-cols-8 gap-4 opacity-30">
//                 {Array.from({ length: 64 }).map((_, i) => (
//                   <div
//                     key={i}
//                     className="w-2 h-2 rounded-full"
//                     style={{ backgroundColor: COLORS.landing2.text }}
//                   ></div>
//                 ))}
//               </div>
//             </div>

//             {/* Hero Image */}
//             <div className="relative z-10 w-full h-full rounded-lg overflow-hidden">
//               <img
//                 src="https://images.unsplash.com/photo-1512099053734-e6767b535838?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D"
//                 alt="Person wearing smart glasses"
//                 className="w-full h-full object-cover"
//                 style={{
//                   filter: "brightness(0.9) contrast(1.1)",
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
