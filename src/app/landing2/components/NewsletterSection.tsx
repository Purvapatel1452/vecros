"use client";
import { COLORS } from "../../../constants/colors";

export default function NewsletterSection() {
  return (
    <section
      className="w-screen py-20 relative overflow-hidden"
      style={{ 
        backgroundColor: COLORS.yellow,
        margin: 0,
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Section Header */}
          <p className="text-2xl font-semibold text-black mb-2 tracking-wide">
            Newsletter
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
            Add impact to your inbox
          </h2>

          {/* Email Form */}
          <form className="flex flex-col md:flex-row gap-4 items-center justify-center w-full mx-auto">
            <input
              type="email"
              placeholder="Email address"
              className="w-80 px-6 py-3 rounded-full border border-black text-lg text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent shadow-md transition duration-300"
            />
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-full font-bold text-lg shadow-md transition-all duration-300 hover:bg-gray-800 hover:scale-105"
            >
              SUBMIT
            </button>
          </form>

          {/* Small Text */}
          <p className="mt-6 text-sm text-gray-800">
            Stay updated with our latest news, events, and opportunities.
          </p>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-black rounded-full opacity-10 animate-bounce" />
      <div className="absolute bottom-10 right-20 w-20 h-20 bg-white rounded-full opacity-20 animate-pulse" />
    </section>
  );
}



// "use client";
// import { COLORS } from "../../../constants/colors";

// export default function NewsletterSection() {
//   return (
//     <section
//       className="w-full py-20 relative overflow-hidden"
//       style={{ backgroundColor: COLORS.yellow }}
//     >
//       <div className="max-w-4xl mx-auto px-8 relative z-10">
//         <div className="text-center">
//           {/* Section Header */}
//           <p className="text-2xl font-semibold text-black mb-2 tracking-wide">
//             Newsletter
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
//             Add impact to your inbox
//           </h2>

//           {/* Email Form */}
//           <form className="flex flex-col md:flex-row gap-4 items-center justify-center w-full mx-auto">
//             <input
//               type="email"
//               placeholder="Email address"
//               className="w-80 px-6 py-3 rounded-full border border-black text-lg text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent shadow-md transition duration-300"
//             />
//             <button
//               type="submit"
//               className="bg-black text-white px-8 py-3 rounded-full font-bold text-lg shadow-md transition-all duration-300 hover:bg-gray-800 hover:scale-105"
//             >
//               SUBMIT
//             </button>
//           </form>

//           {/* Small Text */}
//           <p className="mt-6 text-sm text-gray-800">
//             Stay updated with our latest news, events, and opportunities.
//           </p>
//         </div>
//       </div>

//       {/* Decorative Shapes */}
//       <div className="absolute top-10 left-10 w-16 h-16 bg-black rounded-full opacity-10 animate-bounce" />
//       <div className="absolute bottom-10 right-20 w-20 h-20 bg-white rounded-full opacity-20 animate-pulse" />
//     </section>
//   );
// }
