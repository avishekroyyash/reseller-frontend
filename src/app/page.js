import Banner from "@/Component/All-home-page-cmp/Banner";
import Footer from "@/Component/All-home-page-cmp/Footer";
import MarketplaceStatistics from "@/Component/All-home-page-cmp/MarketplaceStatistic";
import PopularCategories from "@/Component/All-home-page-cmp/PopularCatagory";
import SuccessStories from "@/Component/All-home-page-cmp/SuccessStory";
import Navber from "@/Component/Navber";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Navber></Navber>
     <Banner></Banner>
     <PopularCategories></PopularCategories>
     <SuccessStories></SuccessStories>
     <MarketplaceStatistics></MarketplaceStatistics>
     <Footer></Footer>
    </div>
  );
}
