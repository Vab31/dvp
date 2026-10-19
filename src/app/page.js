import Image from "next/image";
import Nav from "./components/nav";
import HeroSlider from "./components/slider";
import Reels from "./components/reels";
import Footer from "./components/footer";
import Whyitmatter from "./components/whyitmatter";
import Counter from "./components/countnumber";
import CharityWork from "./components/charity_work";
import NgoPartners from "./components/ngo_partners";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Nav />
      <HeroSlider />
      <Whyitmatter />
      <Counter />
      <CharityWork />
      <Reels />
      <NgoPartners />
      <Footer />
    </div>
  );
}
