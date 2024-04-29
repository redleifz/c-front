import Header from "@/components/header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSection from "@/components/productSection";
import Footer from "@/components/footer";
import Coloceal from "@/components/coloceal";


export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center bg-gray-100">
      <Header />
      <Coloceal />
      <ProductSection />
      <Footer />
{/* //repush */}
    </div>
  );
}
