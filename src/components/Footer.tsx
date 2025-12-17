import {
  Facebook,
  Instagram,
  Mail,
  Youtube,
  Phone,
  MapPin,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1b2f4a] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
            About Us
          </h3>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-white">
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
            Help
          </h3>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li>
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-conditions" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/refund" className="hover:text-white">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link to="/shipping" className="hover:text-white">
                Shipping Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
            Contact
          </h3>

          <ul className="space-y-4 text-slate-300 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5" />
              <span>
                Chandmari, Tezpur, Sonitpur Assam. <br /> Pin – 784001
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Phone size={16} />
              <span>+91 9859600157</span>
            </li>

            <li className="flex items-center gap-3">
              <Phone size={16} />
              <span>+91 7896043182 </span>
            </li>

            <li className="flex items-center gap-3">
              <Mail size={16} />
              <span>bonfresh.assam@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
            Social
          </h3>

          <div className="grid grid-cols-2 gap-3">
            {[Facebook, Instagram, Youtube, Mail].map((Icon, i) => (
              <Link
                key={i}
                to="#"
                className="bg-[#223a5a] hover:bg-[#2b4a73] transition-colors
                           w-20 h-16 flex items-center justify-center
                           border border-white/10"
              >
                <Icon size={22} strokeWidth={1.5} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-6 pt-6">
        <div className="flex items-center justify-center gap-4 mb-4">
          <img src="gpay.png" className="h-6 rounded" />
          <img src="paytm.png" className="h-6 rounded" />
          <img src="upi.png" className="h-6 rounded" />
          <img src="amazon.png" className="h-6 rounded" />
        </div>

        <p className="text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Bonfresh / The Assam Shop. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
