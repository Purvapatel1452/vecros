export default function NavBar() {
  return (
    <nav className="w-full bg-black flex items-center justify-between px-8 py-4 shadow z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="Envision Logo" className="h-8" />
        <span className="text-white text-xl font-bold tracking-widest">envision</span>
      </div>
      {/* Menu */}
      <ul className="flex gap-8 text-white font-medium text-base">
        <li><a href="#" className="hover:text-[#7C3AED]">Home</a></li>
        <li><a href="#" className="hover:text-[#7C3AED]">Ally</a></li>
        <li><a href="#" className="hover:text-[#7C3AED]">Glasses</a></li>
        <li><a href="#" className="hover:text-[#7C3AED]">App</a></li>
        <li><a href="#" className="hover:text-[#7C3AED]">Enterprise</a></li>
        <li><a href="#" className="hover:text-[#7C3AED]">Shop</a></li>
      </ul>
      {/* CTA Button */}
      <a href="#" className="bg-[#FFE04B] text-black px-6 py-2 rounded-full font-bold text-base shadow hover:bg-yellow-400 transition">Pre-Order Ally Solos Glasses</a>
    </nav>
  );
}
