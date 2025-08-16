"use client";
import { COLORS } from "../../../constants/colors";

export default function PartnersSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-2xl md:text-3xl font-semibold text-black mb-2 tracking-wide">
            Our Partners
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Doing better, together.
          </h2>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-16">
          {/* Google */}
          <div className="group flex items-center transition-transform duration-300 hover:scale-110">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            </div>
            <span className="ml-2 text-2xl font-bold text-gray-800 group-hover:text-black">
              Google
            </span>
          </div>

          {/* ABN AMRO */}
          <div className="group flex items-center transition-transform duration-300 hover:scale-110">
            <div className="w-12 h-8 bg-green-500 rounded mr-3 shadow-md"></div>
            <span className="text-2xl font-bold text-gray-700 group-hover:text-black">
              ABN AMRO
            </span>
          </div>

          {/* ImpactCity */}
          <div className="group flex items-center transition-all duration-300 hover:scale-110">
            <span className="text-2xl font-bold text-blue-600 group-hover:text-blue-800">
              Impact
            </span>
            <span className="text-2xl font-bold text-green-600 group-hover:text-green-800 ml-1">
              City
            </span>
          </div>

          {/* The Hague */}
          <div className="group flex items-center transition-transform duration-300 hover:scale-110">
            <div className="w-12 h-12 bg-yellow-400 rounded mr-3 flex items-center justify-center shadow-md">
              <span className="text-[10px] font-bold text-black text-center">
                Coat of Arms
              </span>
            </div>
            <span className="text-2xl font-bold text-green-700 group-hover:text-green-900">
              The Hague
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
