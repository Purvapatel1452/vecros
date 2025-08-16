"use client";
import { COLORS } from "../../../constants/colors";

const products = [
  {
    name: "ATHERA",
    tag: "Enterprise",
    tagColor: "text-white",
    tagBgColor: COLORS.landing1.cardBorder,
    image: "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "India's 1st Spatial AI Drone",
    button: "EXPLORE",
    comingSoon: false,
  },
  {
    name: "JASPER",
    tag: "Coming Soon",
    tagColor: "text-white",
    tagBgColor: COLORS.landing1.button,
    image: "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyb25lfGVufDB8fDB8fHww",
    description: "Tactical and Confined space agnostic",
    button: "EXPLORE",
    comingSoon: true,
  },
  {
    name: "JETCORE",
    tag: "R & D",
    tagColor: "text-white",
    tagBgColor: COLORS.landing1.cardBorder,
    image: "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJvbmV8ZW58MHx8MHx8fDA%3D",
    description: "Designed for Spatial AI",
    button: "EXPLORE",
    comingSoon: false,
  },
];

export default function ProductsSection() {
  return (
    <section className="w-full flex flex-col items-center py-16" style={{ backgroundColor: COLORS.landing1.background }}>
      <h2 className="text-4xl font-extrabold text-center mb-12 tracking-tight" style={{ color: COLORS.landing1.text }}>Our Products</h2>
      <div className="w-full max-w-6xl px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <div
            key={product.name}
            className="relative rounded-2xl shadow-2xl flex flex-col justify-between p-8 min-h-[340px] transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: COLORS.landing1.card, borderColor: COLORS.landing1.cardBorder, borderWidth: '1px' }}
          >
            <span className={`absolute -top-4 left-4 px-5 py-1 rounded-md text-sm font-semibold shadow ${product.tagColor} ${product.comingSoon ? 'rounded-bl-none rounded-br-none' : ''}`}
                  style={{ backgroundColor: product.tagBgColor }}>
              {product.tag}
            </span>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-70 object-cover my-8"
            />
            <div className="flex flex-col flex-1 justify-end">
              <h3 className="text-lg font-bold mb-1" style={{ color: COLORS.landing1.text }}>{product.name}</h3>
              <p className="text-xs mb-6" style={{ color: COLORS.landing1.cardBorder }}>{product.description}</p>
              <div className="flex justify-end">
                <button className="text-white px-7 py-2 rounded-full font-semibold text-base shadow transition"
                        style={{ backgroundColor: COLORS.landing1.button }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.landing1.buttonHover}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.landing1.button}>
                  {product.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
