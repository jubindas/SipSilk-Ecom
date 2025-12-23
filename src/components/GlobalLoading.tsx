import { motion } from "framer-motion";

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#ffffff]">
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src="/sipsilk-logo.png"
            alt="SipSilk Logo"
            className="h-24 w-auto object-contain"
          />
        </motion.div>

        <div className="relative h-0.5 w-48 overflow-hidden bg-gray-200">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="absolute h-full w-full bg-linear-to-r from-transparent via-[#8B1D1D] to-transparent"
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-4 font-serif text-sm tracking-[0.2em] text-[#8B1D1D] uppercase"
        >
          Brewing Perfection...
        </motion.p>
      </div>
    </div>
  );
}
