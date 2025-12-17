import CategoriesList from "@/components/CategoriesList";
import HomeCarousel from "../pages/HomeCarousel";
import PopulerItems from "@/pages/PopulerItems";
import BeforeAfterSlider from "@/pages/BeforeAfterSlider";
import NewArrivals from "@/pages/NewArrivals";
import BestSeller from "@/pages/BestSeller";
import FeaturesStrip from "@/pages/FeaturesStrip";
import Blogs from "@/pages/Blogs";

export default function HomePage() {
  return (
    <>
      <div className="px-6 py-6">
        <CategoriesList />
        <HomeCarousel />
      </div>
      <PopulerItems />
      <NewArrivals />
      <BestSeller />
      <Blogs />
      <FeaturesStrip />
      <BeforeAfterSlider />
    </>
  );
}
