import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="w-full">
      <section className="relative h-[80vh] w-full">
        <img
          src="https://i.pinimg.com/1200x/91/0e/45/910e45aa6dc23ee8dced89ab2c138347.jpg"
          alt="Contact background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">
              WE ARE HAPPY TO HELP
            </h1>

            <p className="text-sm md:text-base text-white/80 mb-8 leading-relaxed">
              If you have any queries regarding our brand, products, return or
              exchange policy, or just want to say Hi, feel free to contact us.
              We are committed to helping you as quickly as possible.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-400" />
                <span>Customer Care: +91 7896043182</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-400" />
                <span>Proprietor: +91 9859600157</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-400" />
                <span>Sales Enquiry: +91 8752852464</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-green-400" />
                <span>bonfresh.assam@gmail.com</span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-green-400 mt-1" />
                <span>
                  Head Office: Chandmari, Tezpur, Sonitpur, Assam – 784001{" "}
                  <br />
                  <br />
                  City Outlet: Bonfresh Ethnic Hub, VIP Road, Near BOI Branch,
                  Guwahati – 781022
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4efe9] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif text-slate-900 mb-4">
            GET IN TOUCH
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>

          <p className="text-sm text-gray-600 mb-10">
            We are just a message away. Send us your request and we will be
            happy to assist you.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 px-4 py-3 bg-transparent focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 px-4 py-3 bg-transparent focus:outline-none"
            />

            <textarea
              placeholder="Message"
              rows={5}
              className="md:col-span-2 border border-gray-300 px-4 py-3 bg-transparent focus:outline-none resize-none"
            ></textarea>

            <div className="md:col-span-2 flex justify-center">
              <button className="px-10 py-4 mb-5 bg-green-700 text-white cursor-pointer font-bold rounded-full hover:bg-green-800 hover:shadow-xl transition-all tracking-wide">
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
