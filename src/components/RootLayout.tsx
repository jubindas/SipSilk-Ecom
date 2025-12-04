import { Outlet } from "react-router-dom";

import Header from "./Navbar";

import Footer from "./Footer";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] container mx-auto px-6 py-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
