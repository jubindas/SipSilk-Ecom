import { Outlet } from "react-router-dom";

import Header from "./Navbar";

import Footer from "./Footer";

import ScrollToTop from "./ScrollToTop";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />

      <main className="flex-1 container mx-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
