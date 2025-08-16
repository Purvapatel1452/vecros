"use client";
import { COLORS } from "../../../constants/colors";

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      title: "Envision App",
      description:
        "The free app uses your smartphone's camera to speak out written information, describe surroundings and objects, and even tell you who's nearby.",
      features:
        "Excelling in all kinds of text and object recognition, Envision can read text in over 60 languages. Be it handwritten notes, text on food packages or the pages of an entire book.",
      primaryButton: "Download now",
      secondaryButton: "Discover more",
      image:
        "https://images.unsplash.com/photo-1512099053734-e6767b535838?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "Smartphone with Envision App showing text recognition",
    },
    {
      id: 2,
      title: "Envision Companion",
      description:
        "The Envision App and Glasses open up a world of independence, but every now and then we all need a little human help.",
      features:
        "With hands-free video calling from your Envision Glasses, get the assistance you need from trusted friends and family members, in real-time.",
      primaryButton: "Discover more",
      secondaryButton: "Learn more",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Two people using Envision Glasses for video calling",
    },
    {
      id: 3,
      title: "Envision Glasses",
      description:
        "Envision Glasses brings our award-winning software to smartglasses, enabling the unprecedented experience of unobtrusive access to the visual world.",
      features:
        "With features ranging from real-time text recognition, to voice controls and even hands-free video calling, Envision Glasses open the door for the future of wearable assistive technology.",
      primaryButton: "Learn More",
      secondaryButton: "Shop Now",
      image:
        "https://images.unsplash.com/photo-1512099053734-e6767b535838?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "Person wearing Envision Glasses",
    },
  ];

  return (
    <section
      className="w-full py-12 sm:py-16 lg:py-20"
      style={{ backgroundColor: COLORS.landing2.background }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p
            className="text-base sm:text-lg font-medium mb-4"
            style={{ color: COLORS.landing2.text }}
          >
            Our Products
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4 sm:px-0"
            style={{ color: COLORS.landing2.text }}
          >
            Articulating visual information into speech.
          </h2>
        </div>

        {/* Products Container */}
        <div className="relative">
          {/* Products List */}
          <div className="space-y-12 sm:space-y-16">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 p-4 sm:p-6 rounded-lg"
                style={{
                  backgroundColor: COLORS.landing2.card,
                  border: `1px solid ${COLORS.landing2.cardBorder}`,
                }}
              >
                {/* Conditional Layout: Even index (0,2) = Text first on desktop, Odd index (1) = Image first on desktop */}
                {/* On mobile, always show image first */}
                
                {/* Mobile Layout - Always Image First */}
                <div className="lg:hidden w-full">
                  {/* Product Image - Mobile */}
                  <div className="w-full flex justify-center mb-6">
                    <div className="relative w-full max-w-md h-[250px] sm:h-[300px] rounded-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.imageAlt}
                        className="w-full h-full object-cover"
                        style={{
                          filter: "brightness(0.95) contrast(1.05)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Text Content - Mobile */}
                  <div className="text-center">
                    <h3
                      className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6"
                      style={{ color: COLORS.landing2.text }}
                    >
                      {product.title}
                    </h3>
                    <p
                      className="text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed"
                      style={{ color: COLORS.landing2.text }}
                    >
                      {product.description}
                    </p>
                    <p
                      className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed"
                      style={{ color: COLORS.landing2.text }}
                    >
                      {product.features}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                      <button
                        className="px-6 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base"
                        style={{
                          backgroundColor: COLORS.landing2.primary,
                          color: COLORS.landing2.text,
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            COLORS.landing2.secondary)
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            COLORS.landing2.primary)
                        }
                      >
                        {product.primaryButton}
                      </button>
                      <button
                        className="px-6 py-3 rounded-lg font-semibold transition-colors border text-sm sm:text-base"
                        style={{
                          borderColor: COLORS.landing2.cardBorder,
                          color: COLORS.landing2.text,
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            COLORS.landing2.accent)
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.backgroundColor = "transparent")
                        }
                      >
                        {product.secondaryButton}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                {index % 2 === 0 ? (
                  <>
                    {/* Left Side - Text Content (Even products) */}
                    <div className="hidden lg:block flex-1 max-w-2xl">
                      <h3
                        className="text-3xl xl:text-4xl font-bold mb-6"
                        style={{ color: COLORS.landing2.text }}
                      >
                        {product.title}
                      </h3>
                      <p
                        className="text-lg xl:text-xl mb-6 leading-relaxed"
                        style={{ color: COLORS.landing2.text }}
                      >
                        {product.description}
                      </p>
                      <p
                        className="text-lg xl:text-xl mb-8 leading-relaxed"
                        style={{ color: COLORS.landing2.text }}
                      >
                        {product.features}
                      </p>
                      <div className="flex flex-col xl:flex-row gap-4">
                        <button
                          className="px-6 py-3 rounded-lg font-semibold transition-colors"
                          style={{
                            backgroundColor: COLORS.landing2.primary,
                            color: COLORS.landing2.text,
                          }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              COLORS.landing2.secondary)
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              COLORS.landing2.primary)
                          }
                        >
                          {product.primaryButton}
                        </button>
                        <button
                          className="px-6 py-3 rounded-lg font-semibold transition-colors border"
                          style={{
                            borderColor: COLORS.landing2.cardBorder,
                            color: COLORS.landing2.text,
                          }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              COLORS.landing2.accent)
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.backgroundColor = "transparent")
                          }
                        >
                          {product.secondaryButton}
                        </button>
                      </div>
                    </div>

                    {/* Right Side - Product Image (Even products) */}
                    <div className="hidden lg:flex flex-1 justify-center">
                      <div className="relative w-full max-w-[500px] xl:max-w-[600px] h-[400px] xl:h-[500px] rounded-lg overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.imageAlt}
                          className="w-full h-full object-cover"
                          style={{
                            filter: "brightness(0.95) contrast(1.05)",
                          }}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left Side - Product Image (Odd products) */}
                    <div className="hidden lg:flex flex-1 justify-center">
                      <div className="relative w-full max-w-[500px] xl:max-w-[600px] h-[400px] xl:h-[500px] rounded-lg overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.imageAlt}
                          className="w-full h-full object-cover"
                          style={{
                            filter: "brightness(0.95) contrast(1.05)",
                          }}
                        />
                      </div>
                    </div>

                    {/* Right Side - Text Content (Odd products) */}
                    <div className="hidden lg:block flex-1 max-w-2xl">
                      <h3
                        className="text-3xl xl:text-4xl font-bold mb-6"
                        style={{ color: COLORS.landing2.text }}
                      >
                        {product.title}
                      </h3>
                      <p
                        className="text-lg xl:text-xl mb-6 leading-relaxed"
                        style={{ color: COLORS.landing2.text }}
                      >
                        {product.description}
                      </p>
                      <p
                        className="text-lg xl:text-xl mb-8 leading-relaxed"
                        style={{ color: COLORS.landing2.text }}
                      >
                        {product.features}
                      </p>
                      <div className="flex flex-col xl:flex-row gap-4">
                        <button
                          className="px-6 py-3 rounded-lg font-semibold transition-colors"
                          style={{
                            backgroundColor: COLORS.landing2.primary,
                            color: COLORS.landing2.text,
                          }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              COLORS.landing2.secondary)
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              COLORS.landing2.primary)
                          }
                        >
                          {product.primaryButton}
                        </button>
                        <button
                          className="px-6 py-3 rounded-lg font-semibold transition-colors border"
                          style={{
                            borderColor: COLORS.landing2.cardBorder,
                            color: COLORS.landing2.text,
                          }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              COLORS.landing2.accent)
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.backgroundColor = "transparent")
                          }
                        >
                          {product.secondaryButton}
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



// "use client";
// import { COLORS } from "../../../constants/colors";

// export default function ProductsSection() {
//   const products = [
//     {
//       id: 1,
//       title: "Envision App",
//       description:
//         "The free app uses your smartphone's camera to speak out written information, describe surroundings and objects, and even tell you who's nearby.",
//       features:
//         "Excelling in all kinds of text and object recognition, Envision can read text in over 60 languages. Be it handwritten notes, text on food packages or the pages of an entire book.",
//       primaryButton: "Download now",
//       secondaryButton: "Discover more",
//       image:
//         "https://images.unsplash.com/photo-1512099053734-e6767b535838?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
//       imageAlt: "Smartphone with Envision App showing text recognition",
//     },
//     {
//       id: 2,
//       title: "Envision Companion",
//       description:
//         "The Envision App and Glasses open up a world of independence, but every now and then we all need a little human help.",
//       features:
//         "With hands-free video calling from your Envision Glasses, get the assistance you need from trusted friends and family members, in real-time.",
//       primaryButton: "Discover more",
//       secondaryButton: "Learn more",
//       image:
//         "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       imageAlt: "Two people using Envision Glasses for video calling",
//     },
//     {
//       id: 3,
//       title: "Envision Glasses",
//       description:
//         "Envision Glasses brings our award-winning software to smartglasses, enabling the unprecedented experience of unobtrusive access to the visual world.",
//       features:
//         "With features ranging from real-time text recognition, to voice controls and even hands-free video calling, Envision Glasses open the door for the future of wearable assistive technology.",
//       primaryButton: "Learn More",
//       secondaryButton: "Shop Now",
//       image:
//         "https://images.unsplash.com/photo-1512099053734-e6767b535838?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
//       imageAlt: "Person wearing Envision Glasses",
//     },
//   ];

//   return (
//     <section
//       className="w-full py-20"
//       style={{ backgroundColor: COLORS.landing2.background }}
//     >
//       <div className="max-w-7xl mx-auto px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <p
//             className="text-lg font-medium mb-4"
//             style={{ color: COLORS.landing2.text }}
//           >
//             Our Products
//           </p>
//           <h2
//             className="text-4xl md:text-5xl font-bold"
//             style={{ color: COLORS.landing2.text }}
//           >
//             Articulating visual information into speech.
//           </h2>
//         </div>

//         {/* Products Container */}
//         <div className="relative">
//           {/* Products List */}
//           <div className="space-y-16 pr-8">
//             {products.map((product, index) => (
//               <div
//                 key={product.id}
//                 className="flex flex-col lg:flex-row items-center gap-16 p-6 rounded-lg"
//                 style={{
//                   backgroundColor: COLORS.landing2.card,
//                   border: `1px solid ${COLORS.landing2.cardBorder}`,
//                 }}
//               >
//                 {/* Conditional Layout: Even index (0,2) = Text first, Odd index (1) = Image first */}
//                 {index % 2 === 0 ? (
//                   <>
//                     {/* Left Side - Text Content */}
//                     <div className="flex-1 max-w-2xl">
//                       <h3
//                         className="text-3xl md:text-4xl font-bold mb-6"
//                         style={{ color: COLORS.landing2.text }}
//                       >
//                         {product.title}
//                       </h3>
//                       <p
//                         className="text-lg mb-6 leading-relaxed"
//                         style={{ color: COLORS.landing2.text }}
//                       >
//                         {product.description}
//                       </p>
//                       <p
//                         className="text-lg mb-8 leading-relaxed"
//                         style={{ color: COLORS.landing2.text }}
//                       >
//                         {product.features}
//                       </p>
//                       <div className="flex flex-col sm:flex-row gap-4">
//                         <button
//                           className="px-6 py-3 rounded-lg font-semibold transition-colors"
//                           style={{
//                             backgroundColor: COLORS.landing2.primary,
//                             color: COLORS.landing2.text,
//                           }}
//                           onMouseOver={(e) =>
//                             (e.currentTarget.style.backgroundColor =
//                               COLORS.landing2.secondary)
//                           }
//                           onMouseOut={(e) =>
//                             (e.currentTarget.style.backgroundColor =
//                               COLORS.landing2.primary)
//                           }
//                         >
//                           {product.primaryButton}
//                         </button>
//                         <button
//                           className="px-6 py-3 rounded-lg font-semibold transition-colors border"
//                           style={{
//                             borderColor: COLORS.landing2.cardBorder,
//                             color: COLORS.landing2.text,
//                           }}
//                           onMouseOver={(e) =>
//                             (e.currentTarget.style.backgroundColor =
//                               COLORS.landing2.accent)
//                           }
//                           onMouseOut={(e) =>
//                             (e.currentTarget.style.backgroundColor = "transparent")
//                           }
//                         >
//                           {product.secondaryButton}
//                         </button>
//                       </div>
//                     </div>

//                     {/* Right Side - Product Image */}
//                     <div className="flex-1 flex justify-center">
//                       <div className="relative w-[600px] h-[500px] rounded-lg overflow-hidden">
//                         <img
//                           src={product.image}
//                           alt={product.imageAlt}
//                           className="w-full h-full object-cover"
//                           style={{
//                             filter: "brightness(0.95) contrast(1.05)",
//                           }}
//                         />
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     {/* Left Side - Product Image */}
//                     <div className="flex-1 flex justify-center">
//                       <div className="relative w-[600px] h-[500px] rounded-lg overflow-hidden">
//                         <img
//                           src={product.image}
//                           alt={product.imageAlt}
//                           className="w-full h-full object-cover"
//                           style={{
//                             filter: "brightness(0.95) contrast(1.05)",
//                           }}
//                         />
//                       </div>
//                     </div>

//                     {/* Right Side - Text Content */}
//                     <div className="flex-1 max-w-2xl">
//                       <h3
//                         className="text-3xl md:text-4xl font-bold mb-6"
//                         style={{ color: COLORS.landing2.text }}
//                       >
//                         {product.title}
//                       </h3>
//                       <p
//                         className="text-lg mb-6 leading-relaxed"
//                         style={{ color: COLORS.landing2.text }}
//                       >
//                         {product.description}
//                       </p>
//                       <p
//                         className="text-lg mb-8 leading-relaxed"
//                         style={{ color: COLORS.landing2.text }}
//                       >
//                         {product.features}
//                       </p>
//                       <div className="flex flex-col sm:flex-row gap-4">
//                         <button
//                           className="px-6 py-3 rounded-lg font-semibold transition-colors"
//                           style={{
//                             backgroundColor: COLORS.landing2.primary,
//                             color: COLORS.landing2.text,
//                           }}
//                           onMouseOver={(e) =>
//                             (e.currentTarget.style.backgroundColor =
//                               COLORS.landing2.secondary)
//                           }
//                           onMouseOut={(e) =>
//                             (e.currentTarget.style.backgroundColor =
//                               COLORS.landing2.primary)
//                           }
//                         >
//                           {product.primaryButton}
//                         </button>
//                         <button
//                           className="px-6 py-3 rounded-lg font-semibold transition-colors border"
//                           style={{
//                             borderColor: COLORS.landing2.cardBorder,
//                             color: COLORS.landing2.text,
//                           }}
//                           onMouseOver={(e) =>
//                             (e.currentTarget.style.backgroundColor =
//                               COLORS.landing2.accent)
//                           }
//                           onMouseOut={(e) =>
//                             (e.currentTarget.style.backgroundColor = "transparent")
//                           }
//                         >
//                           {product.secondaryButton}
//                         </button>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
