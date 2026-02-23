import ActiveCourses from "@/components/ActiveCourses";
import Banner from "@/components/Banner";
import DesignDev from "@/components/DesignDev";
import Market from "@/components/Market";
import Reviews from "@/components/Reviews";

export default function HomePage() {
  return (
    <main>
      <Banner />
      <ActiveCourses />
      <DesignDev />
      <Market />
      <Reviews />
    </main>
  );
}