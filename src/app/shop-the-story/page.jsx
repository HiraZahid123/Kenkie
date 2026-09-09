import Breadcrumbs from "@/components/common/Breadcrumbs";
import ShopTheStory from "@/components/Home/ShopTheStory";
import Testimonials from "@/components/Home/Testimonials";

export default function ShopTheStoryPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: "Our Story" }]} />
      <ShopTheStory />
      <Testimonials />
    </>
  );
}
