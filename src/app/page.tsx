import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <Navbar />
        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs />
      </main>
    </>
  );
}
