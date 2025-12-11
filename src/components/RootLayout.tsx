import { Outlet } from "react-router-dom";

import Header from "./Navbar";

import Footer from "./Footer";

import ScrollToTop from "./ScrollToTop";

export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-[80vh] container mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
