"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import banners from "../utils/banners-data";
import { Banner } from "@/utils/types";
import BannerImageA from "@/components/BannerImageA";
import EditBannerTemplateBs from "@/components/EditBannerTemplateBs";

export default function Home() {
  const [data, setData] = useState(banners);
  const [open, setOpen] = useState(false);
  const [updateBanner, setUpdateBanner] = useState<Banner | null>(null);
  const [customBanner, setCustomBanner] = useState<Banner | null>(null);

  useEffect(() => {
    if (customBanner) {
      console.log(customBanner);
      setData((prevData) =>
        prevData.map((b) => (b.id === customBanner.id ? customBanner : b))
      );
    }
  }, [customBanner]);

  return (
    <main className="app flex flex-col gap-10 justify-center p-5 sm:p-10 min-h-screen sm:gap-10">
      <Navbar />
        <div className="banners grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {data.map((b) => (
            <BannerImageA
              key={b.id}
              banner={b}
              setOpen={setOpen}
              setUpdateBanner={setUpdateBanner}
            />
          ))}
        </div>
        {updateBanner && open && (
          <EditBannerTemplateBs
            banner={updateBanner}
            setOpen={setOpen}
            setCustomBanner={setCustomBanner}
          />
        )}
    </main>
  );
}
