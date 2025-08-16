import { COLORS } from "../../../constants/colors";

export default function FeaturedOnSection() {
  return (
    <section className="w-full py-4 pt-10" style={{ backgroundColor: COLORS.pink }}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center flex flex-row gap-10 items-start justify-center">
          <p className="text-lg font-medium text-black mb-8">As featured on:</p>
          <div className="flex justify-center items-center gap-10">
            {/* BBC Logo */}
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-8 bg-black flex items-center justify-center">
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
    </section>
  );
}
