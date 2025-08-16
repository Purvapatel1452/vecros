import { COLORS } from "../../../constants/colors";

export default function FeaturedOnSection() {
  return (
    <section className="w-full py-4 pt-6 sm:pt-10" style={{ backgroundColor: COLORS.pink }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Mobile Layout - Stacked */}
          <div className="flex flex-col sm:hidden items-center gap-6">
            <p className="text-base sm:text-lg font-medium text-black">As featured on:</p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {/* BBC Logo */}
              <div className="flex items-center justify-center">
                <div className="w-10 h-7 sm:w-12 sm:h-8 bg-black flex items-center justify-center rounded">
                  <span className="text-white font-bold text-xs sm:text-sm">BBC</span>
                </div>
              </div>
              
              {/* Forbes Logo */}
              <div className="flex items-center">
                <span className="text-black font-bold text-lg sm:text-xl">Forbes</span>
              </div>
              
              {/* CNET Logo */}
              <div className="flex items-center">
                <span className="text-black font-bold text-lg sm:text-xl">CNET</span>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Side by Side */}
          <div className="hidden sm:flex flex-col md:flex-row gap-4 md:gap-10 items-center justify-center">
            <p className="text-lg font-medium text-black mb-2 md:mb-0">As featured on:</p>
            <div className="flex justify-center items-center gap-6 lg:gap-10">
              {/* BBC Logo */}
              <div className="flex items-center justify-center">
                <div className="w-12 h-8 bg-black flex items-center justify-center rounded">
                  <span className="text-white font-bold text-sm">BBC</span>
                </div>
              </div>
              
              {/* Forbes Logo */}
              <div className="flex items-center">
                <span className="text-black font-bold text-xl">Forbes</span>
              </div>
              
              {/* CNET Logo */}
              <div className="flex items-center">
                <span className="text-black font-bold text-xl">CNET</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



// import { COLORS } from "../../../constants/colors";

// export default function FeaturedOnSection() {
//   return (
//     <section className="w-full py-4 pt-10" style={{ backgroundColor: COLORS.pink }}>
//       <div className="max-w-6xl mx-auto px-8">
//         <div className="text-center flex flex-row gap-10 items-start justify-center">
//           <p className="text-lg font-medium text-black mb-8">As featured on:</p>
//           <div className="flex justify-center items-center gap-10">
//             {/* BBC Logo */}
//             <div className="flex items-center justify-center gap-2">
//               <div className="w-12 h-8 bg-black flex items-center justify-center">
//                 <span className="text-white font-bold text-sm">BBC</span>
//               </div>
//             </div>
            
//             {/* Forbes Logo */}
//             <div className="flex items-center">
//               <span className="text-black font-bold text-xl">Forbes</span>
//             </div>
            
//             {/* CNET Logo */}
//             <div className="flex items-center">
//               <span className="text-black font-bold text-xl">CNET</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
