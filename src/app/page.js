import Banner from "@/Component/All-home-page-cmp/Banner";
import Footer from "@/Component/All-home-page-cmp/Footer";
import Navber from "@/Component/Navber";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Navber></Navber>
     <Banner></Banner>
     <Footer></Footer>
    </div>
  );
}
