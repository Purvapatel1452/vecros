export default function NavBar() {
  return (
    <nav className="w-full bg-black flex items-center justify-between px-8 py-4 shadow z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="Vecros Logo" className="h-8" />
        <span className="text-white text-xl font-bold tracking-widest">VECROS</span>
      </div>
      {/* Menu */}
      <ul className="flex gap-8 text-white font-medium text-base">
        <li><a href="#" className="hover:text-[#0070F3]">Products</a></li>
        <li><a href="#" className="hover:text-[#0070F3]">Solutions</a></li>
        <li><a href="#" className="hover:text-[#0070F3]">Resources</a></li>
        <li><a href="#" className="hover:text-[#0070F3]">Support</a></li>
        <li><a href="#" className="hover:text-[#0070F3]">About</a></li>
      </ul>
      {/* CTA Button */}
      <a href="#" className="bg-[#0070F3] text-white px-6 py-2 rounded-full font-semibold text-base shadow hover:bg-blue-700 transition">Book Free Demo</a>
    </nav>
  );
}
