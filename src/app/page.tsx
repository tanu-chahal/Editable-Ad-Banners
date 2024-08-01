import Navbar from "@/components/Navbar";
import banners from "../utils/banners-data";
import BannerImage from "@/components/BannerImage";

export default function Home() {
  return (
    <main className="app flex flex-col gap-10 justify-center p-10 sm:p-10 sm:gap-10">
     <Navbar/>
     <div className="banners grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
     {banners.map((b, index)=><BannerImage key={index} banner={b} />)}
     </div>
    </main>
  );
}