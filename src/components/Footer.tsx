import { Facebook, Instagram, Mail, Youtube } from "lucide-react";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
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
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Policies</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-conditions" className="hover:text-white">
                Term of Service
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
          <h3 className="text-lg font-semibold mb-4">Our Company</h3>

          <div className="text-gray-300 space-y-3 leading-relaxed">
            <p>
              <strong>Head Office:</strong>
              <br />
              Chandmari, Tezpur, Sonitpur, Assam – 784001
            </p>

            <p>
              <strong>City Outlet:</strong>
              <br />
              Bonfresh Ethnic Hub, VIP Road, Near BOI Branch,
              <br />
              Guwahati – 781022, Assam
            </p>

            <p>
              <strong>Proprietor No.:</strong>
              <a href="tel:+919859600157" className="hover:text-white">
                {" "}
                +91 9859600157
              </a>
            </p>

            <p>
              <strong>Customer Care No.:</strong>
              <a href="tel:+917896043182" className="hover:text-white">
                {" "}
                +91 7896043182
              </a>
            </p>

            <p>
              <strong>Sales Enquiry:</strong>
              <a href="tel:+918752852464" className="hover:text-white">
                {" "}
                +91 8752852464
              </a>
            </p>

            <p>
              <strong>Email:</strong>
              <a
                href="mailto:bonfresh.assam@gmail.com"
                className="hover:text-white"
              >
                {" "}
                bonfresh.assam@gmail.com
              </a>
            </p>
          </div>

          <div className="flex gap-4 mt-6">
            {[Facebook, Instagram, Youtube, Mail].map((Icon, index) => (
              <div
                key={index}
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src="gpay.png" className="h-6 rounded" />
          <img src="paytm.png" className="h-6 rounded" />
          <img src="upi.png" className="h-6 rounded" />
          <img src="amazon.png" className="h-6 rounded" />
        </div>

        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Bonfresh / The Assam Shop. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
