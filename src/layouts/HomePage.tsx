import CategoriesList from "@/components/CategoriesList";
import HomeCarousel from "../pages/HomeCarousel";

export default function HomePage() {
  return (
    <div>
      <CategoriesList />
      <HomeCarousel />

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      </div>
    </div>
  );
}
