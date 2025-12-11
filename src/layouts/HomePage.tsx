import CategoriesList from "@/components/CategoriesList";
import HomeCarousel from "../pages/HomeCarousel";
import PopulerItems from "@/pages/PopulerItems";
import BeforeAfterSlider from "@/pages/BeforeAfterSlider";

export default function HomePage() {
  return (
    <>
      <div className="px-6 py-6">
        <CategoriesList />
        <HomeCarousel />
        <PopulerItems />
      </div>
      <BeforeAfterSlider />
    </>
  );
}
