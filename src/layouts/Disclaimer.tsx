import { AlertCircle } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="min-h-screen  p-6 lg:p-12 font-sans">
      <div className="max-w-3xl mx-auto">
        <main className="bg-white  overflow-hidden">
          <div className="p-8 lg:p-10 space-y-8">
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-2xl flex gap-4">
              <AlertCircle className="w-6 h-6 text-emerald-600 shrink-0" />
              <p className="text-sm text-emerald-800 leading-relaxed italic">
                Please read this disclaimer carefully before using our services.
                By accessing this platform, you agree to the terms outlined
                below.
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-emerald-950">
                1. No Professional Advice
              </h2>
              <p className="text-emerald-800/70 leading-relaxed">
                The information provided on this platform is for general
                informational purposes only. All information is provided in good
                faith, however we make no representation or warranty of any
                kind, express or implied, regarding the accuracy, adequacy,
                validity, reliability, or completeness of any information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-emerald-950">
                2. External Links
              </h2>
              <p className="text-emerald-800/70 leading-relaxed">
                Our service may contain links to external websites that are not
                provided or maintained by or in any way affiliated with us.
                Please note that we do not guarantee the accuracy, relevance,
                timeliness, or completeness of any information on these external
                websites.
              </p>
            </section>

            <section className="space-y-4 border-t border-emerald-50 pt-8">
              <h2 className="text-xl font-bold text-emerald-950">
                3. Limitation of Liability
              </h2>
              <p className="text-emerald-800/70 leading-relaxed">
                In no event shall we be liable for any special, direct,
                indirect, consequential, or incidental damages or any damages
                whatsoever, whether in an action of contract, negligence or
                other tort, arising out of or in connection with the use of the
                Service or the contents of the Service.
              </p>
            </section>

            <footer className="pt-10 border-t border-emerald-50 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest">
                Last Updated: December 2025
              </p>
            </footer>
          </div>
        </main>

        <p className="text-center mt-8 text-emerald-600/40 text-sm">
          © 2025 Your Company Name. All rights reserved.
        </p>
      </div>
    </div>
  );
}
