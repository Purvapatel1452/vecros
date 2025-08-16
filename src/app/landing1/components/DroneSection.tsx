
"use client";
import { COLORS } from "../../../constants/colors";

export default function DroneSection() {
  return (
    <section className="w-full relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: COLORS.landing1.background }}>
      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 py-12 lg:py-0">
        
        {/* Left side - Text content */}
        <div className="flex-1 max-w-2xl z-20 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 sm:mb-8" style={{ color: COLORS.landing1.text }}>
            Ready to Deploy across
            <br className="hidden sm:block" />
            <span style={{ color: COLORS.landing1.text }} className="block sm:inline">Construction, Logistics and Defence</span>
          </h1>
          
          <button className="text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-base sm:text-lg transition-colors duration-300 shadow-lg w-full sm:w-auto"
                  style={{ backgroundColor: COLORS.landing1.button }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.landing1.buttonHover}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.landing1.button}>
            CONTACT
          </button>
        </div>

        {/* Right side - Drone image with lights */}
        <div className="flex-1 flex justify-center items-center relative z-10 w-full">
          <div className="relative w-full max-w-[650px] h-[300px] sm:h-[400px] md:h-[500px]">
            {/* Foreground Drone Image */}
            <img 
              src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Drone"
              className="w-full h-full object-contain"
            />
            
            {/* Drone lights - responsive positioning */}
            <div className="absolute top-1/2 left-0 sm:-left-4 md:-left-6 lg:-left-10 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
            <div className="absolute top-1/2 right-0 sm:-right-4 md:-right-6 lg:-right-10 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}


// "use client";
// import { COLORS } from "../../../constants/colors";

// export default function DroneSection() {
//   return (
//     <section className="w-full relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: COLORS.landing1.background }}>
//       {/* Main content */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex items-center justify-between">
        
//         {/* Left side - Text content */}
//         <div className="flex-1 max-w-2xl z-20">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8" style={{ color: COLORS.landing1.text }}>
//             Ready to Deploy across
//             <br />
//             <span style={{ color: COLORS.landing1.text }}>Construction, Logistics and Defence</span>
//           </h1>
          
//           <button className="text-white font-bold py-3 px-6 rounded-full text-base transition-colors duration-300 shadow-lg"
//                   style={{ backgroundColor: COLORS.landing1.button }}
//                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.landing1.buttonHover}
//                   onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.landing1.button}>
//             CONTACT
//           </button>
//         </div>

//         {/* Right side - Drone image with lights */}
//         <div className="flex-1 flex justify-center items-center relative z-10">
//           <div className="relative w-[650px] h-[500px]">
//             {/* Foreground Drone Image */}
//             <img 
//               src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" // <- Use transparent PNG of your drone here
//               alt="Drone"
//               className="w-full h-full object-contain"
//             />
            
//             {/* Drone lights */}
//             <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
//             <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
