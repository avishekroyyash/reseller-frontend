import Banner from "@/Component/All-home-page-cmp/Banner";
import MarketplaceStatistics from "@/Component/All-home-page-cmp/MarketplaceStatistic";
import PopularCategories from "@/Component/All-home-page-cmp/PopularCatagory";
import SuccessStories from "@/Component/All-home-page-cmp/SuccessStory";
import SustainabilityImpact from "@/Component/All-home-page-cmp/SustainAbility";
import TrustedSellers from "@/Component/All-home-page-cmp/TrustedSeller";

import Image from "next/image";

export default function Home() {
  return (
    <div> 
     <Banner></Banner>
     <PopularCategories></PopularCategories>
     <SuccessStories></SuccessStories>
     <MarketplaceStatistics></MarketplaceStatistics>
     <SustainabilityImpact></SustainabilityImpact>
     <TrustedSellers></TrustedSellers>
    </div>
  );
}
