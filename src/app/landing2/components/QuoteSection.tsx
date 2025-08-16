import { COLORS } from "../../../constants/colors";

export default function QuoteSection() {
  return (
    <section
      className="w-screen py-20 relative"
      style={{ 
        backgroundColor: COLORS.pink,
        margin: 0,
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative">
          {/* Large Quote Marks */}
          <div className="text-8xl md:text-9xl text-orange-300 mb-8 opacity-60">
            &quot;
          </div>

          {/* Main Quote */}
          <p className="text-2xl md:text-3xl font-bold text-black mb-8 leading-relaxed max-w-5xl mx-auto">
            The first time I used Envision was to describe my own living room.
            Tears came to my eyes. I finally knew what my living room really
            looked like and I didn&apos;t hear it from somebody else. That was
            such an overwhelming experience. I felt it gave me back a part of
            me.
          </p>

          {/* Attribution */}
          <p className="text-lg text-black font-medium mb-12">
            Quote by Joy Barry
          </p>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-3">
            <span className="w-3 h-3 bg-orange-300 rounded-full opacity-50" />
            <span className="w-3 h-3 bg-orange-300 rounded-full opacity-50" />
            <span className="w-4 h-4 bg-orange-500 rounded-full" />
            <span className="w-3 h-3 bg-orange-300 rounded-full opacity-50" />
            <span className="w-3 h-3 bg-orange-300 rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}







// import { COLORS } from "../../../constants/colors";

// export default function QuoteSection() {
//   return (
//     <section
//       className="w-full py-20"
//       style={{ backgroundColor: COLORS.pink }} // ✅ dynamic inline style is fine
//     >
//       <div className="max-w-6xl mx-auto px-8">
//         <div className="text-center relative">
//           {/* Large Quote Marks */}
//           <div className="text-8xl md:text-9xl text-orange-300 mb-8 opacity-60">
//             &quot;
//           </div>

//           {/* Main Quote */}
//           <p className="text-2xl md:text-3xl font-bold text-black mb-8 leading-relaxed max-w-5xl mx-auto">
//             The first time I used Envision was to describe my own living room.
//             Tears came to my eyes. I finally knew what my living room really
//             looked like and I didn&apos;t hear it from somebody else. That was
//             such an overwhelming experience. I felt it gave me back a part of
//             me.
//           </p>

//           {/* Attribution */}
//           <p className="text-lg text-black font-medium mb-12">
//             Quote by Joy Barry
//           </p>

//           {/* Pagination Dots */}
//           <div className="flex justify-center items-center gap-3">
//             <span className="w-3 h-3 bg-orange-300 rounded-full opacity-50" />
//             <span className="w-3 h-3 bg-orange-300 rounded-full opacity-50" />
//             <span className="w-4 h-4 bg-orange-500 rounded-full" />
//             <span className="w-3 h-3 bg-orange-300 rounded-full opacity-50" />
//             <span className="w-3 h-3 bg-orange-300 rounded-full opacity-50" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
