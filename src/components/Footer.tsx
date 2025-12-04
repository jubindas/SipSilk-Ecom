export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-xl font-semibold mb-3">E-Shop</h2>

        <p className="text-sm">
          © {new Date().getFullYear()} E-Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
