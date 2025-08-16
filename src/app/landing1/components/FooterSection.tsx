import { COMPANY } from "../constants";
import { COLORS } from "../../../constants/colors";

export default function FooterSection() {
  return (
    <footer className="text-white pt-20 pb-8 px-4 mt-16 w-full" style={{ backgroundColor: COLORS.landing1.background, borderColor: COLORS.landing1.cardBorder, borderTopWidth: '1px' }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Logo and description */}
        <div className="flex flex-col items-center mb-8">
          <img src="/logo.svg" alt="Vecros Logo" className="h-12 mb-4" />
          <p className="text-center max-w-2xl mb-4 text-base" style={{ color: COLORS.landing1.cardBorder }}>
            We are pushing state of the art technology to combine machine intelligence with robust & reliable systems for solving every day problems in ways no one has ever imagined.
          </p>
        
        </div>
        {/* Columns */}
        <div className="w-full flex flex-col md:flex-row justify-between gap-8 mb-8 text-sm">
          <div className="flex-1 min-w-[120px]">
            <h4 className="font-bold mb-2">Products</h4>
            <ul><li>ATHERA</li></ul>
          </div>
          <div className="flex-1 min-w-[120px]">
            <h4 className="font-bold mb-2">Resources</h4>
            <ul>
              <li>News</li>
              <li>Enterprise Customer</li>
              <li>Events</li>
              <li>Gallery</li>
              <li>Legal</li>
              <li>Policies</li>
            </ul>
          </div>
          <div className="flex-1 min-w-[120px]">
            <h4 className="font-bold mb-2">Support</h4>
            <ul>
              <li>FAQS</li>
              <li>Contact Support</li>
            </ul>
          </div>
          <div className="flex-1 min-w-[120px]">
            <h4 className="font-bold mb-2">About Us</h4>
            <ul>
              <li>Team</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="flex-1 min-w-[120px]">
            <h4 className="font-bold mb-2">Policies</h4>
            <ul>
              <li>Contact Information</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Shipping Policy</li>
              <li>Terms and Services</li>
            </ul>
          </div>
        </div>
        {/* Contact and Subscribe */}
        <div className="w-full flex flex-col md:flex-row justify-between gap-8 mb-8 text-sm">
          <div className="flex-1 min-w-[220px]">
            <h4 className="font-bold mb-2">Contact US</h4>
            <ul style={{ color: COLORS.landing1.cardBorder }}>
              <li className="flex items-center gap-2"><span>✉️</span> {COMPANY.email}</li>
              <li className="flex items-center gap-2"><span>📍</span> {COMPANY.address}</li>
              <li className="flex items-center gap-2"><span>📅</span> {COMPANY.workingDays}</li>
            </ul>
          </div>
          <div className="flex-1 min-w-[220px]">
            <h4 className="font-bold mb-2">Subscribe</h4>
            <p className="mb-2" style={{ color: COLORS.landing1.cardBorder }}>Be the first to hear about our new launch.</p>
            <form className="flex">
              <input type="email" placeholder="Your Email Address" className="text-white px-4 py-2 rounded-l-md focus:outline-none w-full" style={{ backgroundColor: COLORS.landing1.card }} />
              <button type="submit" className="text-white px-6 py-2 rounded-r-md font-semibold" style={{ backgroundColor: COLORS.landing1.button }}>SUBMIT</button>
            </form>
          </div>
        </div>
        {/* Copyright */}
        <div className="w-full text-center text-xs pt-4" style={{ color: COLORS.landing1.cardBorder, borderColor: COLORS.landing1.cardBorder, borderTopWidth: '1px' }}>
          {COMPANY.copyright}
        </div>
      </div>
    </footer>
  );
}
