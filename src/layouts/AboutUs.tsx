import { HeartHandshake, Leaf, Star, Truck } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="w-full font-serif text-[#1a1a1a] m-0">
      <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
        <img
          src="https://i.pinimg.com/1200x/5f/13/61/5f136137410ed81df130e97c45156068.jpg"
          alt="Assam Tea Gardens"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-24 text-white">
          <p className="text-lg tracking-widest mb-2 text-orange-300">
            ABOUT US
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            We Bring Assam’s Heritage <br /> to Your Home
          </h1>
        </div>
      </div>

      <section className="bg-[#ffffff] py-16 md:py-24 px-6 md:px-24">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-orange-600 font-semibold tracking-widest text-sm mb-2">
              WHAT WE STAND FOR
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              We celebrate Assam’s tea & silk legacy.
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg">
              Sipsilk brings together two of Assam’s proudest treasures —
              <strong> Bonfresh Organic Tea</strong> and
              <strong> Harmohan Silk Factory’s hand-woven silk</strong>. Our
              mission is to preserve heritage while supporting local farmers and
              skilled weavers of Sualkuchi.
            </p>
          </div>

          <div>
            <h3 className="text-green-700 font-bold mb-2">
              We Make a Huge Difference
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Every sip of tea and every thread of silk tells a story — a story
              of Assam’s golden fields, ancient crafts, and sustainable
              livelihoods. By choosing Sipsilk, you support artisans and farmers
              who keep this culture alive.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          <div className="relative overflow-hidden rounded-2xl p-8 bg-linear-to-br from-green-50 to-green-100 shadow-lg">
            <div className="absolute right-0 top-0 w-48 h-48 bg-green-200 rounded-full blur-3xl opacity-40 translate-x-10 -translate-y-10"></div>

            <span className="text-xs font-semibold px-3 py-1 bg-white/70 rounded-md text-green-700">
              OUR TEA
            </span>

            <h2 className="text-2xl font-semibold mt-3 text-gray-900">
              Bonfresh Organic Tea
            </h2>

            <p className="mt-2 text-gray-600 leading-relaxed text-lg">
              Sustainably harvested, 100% plastic-free organic tea from Assam’s
              misty green hills — crafted to give you the purest sip.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl p-8 bg-linear-to-br from-pink-50 to-pink-100 shadow-lg">
            <div className="absolute right-0 top-0 w-48 h-48 bg-pink-200 rounded-full blur-3xl opacity-40 translate-x-10 -translate-y-10"></div>

            <span className="text-xs font-semibold px-3 py-1 bg-white/70 rounded-md text-pink-700">
              OUR SILK
            </span>

            <h2 className="text-2xl font-semibold mt-3 text-gray-900">
              Harmohan Silk Factory
            </h2>

            <p className="mt-2 text-gray-600 leading-relaxed text-lg">
              Authentic Eri, Muga, and Mulberry silk woven in Sualkuchi — the
              “Manchester of Assam.” Every saree carries the shine of tradition
              and the hands of skilled artisans.
            </p>
          </div>
        </div>

        <section className="mt-24 px-6 md:px-24 ">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
              Our Mission: Sip the Moment, Wear the Tradition.
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
              We exist to support Assam’s local farmers, weavers, and
              sustainable artists. We bring their craft directly to you
              without middlemen, without exploitation, and without compromise on
              authenticity.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-lg mt-4 mx-auto max-w-3xl">
              <div className="flex items-start gap-4 justify-center md:justify-start">
                <span className="text-3xl">
                  <Leaf />
                </span>
                <p>
                  <span className="font-semibold">Organic, traceable tea</span>
                </p>
              </div>

              <div className="flex items-start gap-4 justify-center md:justify-start">
                <span className="text-3xl">
                  <Star />
                </span>
                <p>
                  <span className="font-semibold">
                    Handwoven, certified silk
                  </span>
                </p>
              </div>

              <div className="flex items-start gap-4 justify-center md:justify-start">
                <span className="text-3xl">
                  <HeartHandshake />
                </span>
                <p>
                  <span className="font-semibold">
                    Direct from farms & looms
                  </span>
                </p>
              </div>

              <div className="flex items-start gap-4 justify-center md:justify-start">
                <span className="text-3xl">
                  <Truck />
                </span>
                <p>
                  <span className="font-semibold">Fast worldwide shipping</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center">
            <img
              src="/sipsilk-logo.png"
              alt="Sipsilk Logo"
              className="w-28 md:w-36 opacity-90 hover:opacity-100 transition"
            />
            <p className="mt-3 text-gray-600 text-sm tracking-wide">
              Sipsilk • Assam Heritage Collection
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}
