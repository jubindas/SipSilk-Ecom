import { RefreshCcw, BadgeCheck, Wallet, Lock } from "lucide-react";

export default function FeaturesStrip() {
  const features = [
    {
      icon: Wallet,
      title: "Cash On Delivery",
      subtitle: "Pay when you receive",
    },
    {
      icon: RefreshCcw,
      title: "Easy Returns",
      subtitle: "7 Days return policy",
    },
    {
      icon: Lock,
      title: "100% Secure",
      subtitle: "Encrypted payments",
    },
    {
      icon: BadgeCheck,
      title: "Quality Assured",
      subtitle: "Certified handicrafts",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-row lg:flex-col xl:flex-row items-center justify-center gap-5 px-4 lg:first:pl-0 lg:last:pr-0 transition-transform duration-300 hover:scale-105"
              >
                <div className="shrink-0 w-14 h-14 flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                  <Icon
                    size={58}
                    strokeWidth={1.5}
                    className="text-green-700 group-hover:text-white transition-colors"
                  />
                </div>

                <div className="text-left">
                  <h4 className="text-base font-bold text-slate-900 tracking-tight leading-none mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500 font-medium">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
