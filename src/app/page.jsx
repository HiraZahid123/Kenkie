import HeroSection from "@/components/Home/HeroSection";
import CategorySection from "@/components/Home/CategorySection";
import NewArrivalFeature from "@/components/Home/NewArrivalFeature";
import PromotionalBanner from "@/components/PromotionalBanner";
import FeatureBar from "@/components/Home/FeatureBar";
import TrendingSection from "@/components/Home/TrendingSection";
import ShopTheStory from "@/components/Home/ShopTheStory";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <NewArrivalFeature />
      <PromotionalBanner />
      <FeatureBar />
      <TrendingSection />
      <ShopTheStory />
      <Testimonials />
    </>
  );
}
