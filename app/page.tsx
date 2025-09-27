import Hero from "../components/sections/Hero/Hero";
import WhyChooseUs from "../components/sections/WhyChooseUs/WhyChooseUs";
import PopularProducts from "../components/sections/PopularProducts/PopularProducts";
import WeHelp from "../components/sections/WeHelp/WeHelp";
import Testimonials from "../components/sections/Testimonials/Testimonials";
import BlogSection from "../components/sections/BlogSection/BlogSection";
import { getFeaturedProducts } from "../data/products";

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <main>
      <Hero />
      <PopularProducts products={featuredProducts} />
      <WhyChooseUs />
      <WeHelp />
      <Testimonials />
      <BlogSection />
    </main>
  );
}
