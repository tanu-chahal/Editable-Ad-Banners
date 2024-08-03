'use client'
import React, {useRef} from 'react'
import { Banner } from "../utils/types"
import { toPng } from "html-to-image";

interface BannerImageProps {
    banner: Banner;
    setOpen:  (open: boolean) => void;
    setUpdateBanner: (b: Banner) => void;
  }

const BannerImageA: React.FC<BannerImageProps> = ({banner, setOpen, setUpdateBanner}) => {
  const bannerRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    console.log("handleDownload() called")
    if (bannerRef.current === null) {
      return;
    }

    const bannerActions = bannerRef.current.querySelector('.bannerActions') as HTMLElement;
    if (bannerActions) {
      bannerActions.style.display = 'none';
    }

    console.log("handling Download")
    try {
      const dataUrl = await toPng(bannerRef.current, { cacheBust: true });
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "banner.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Error generating image: ", err);
      alert("Error downloading image.");
    } finally {
      if (bannerActions) {
        bannerActions.style.display = 'flex';
      }
    }
  };

  const handleBannerEdit = (b: Banner) => {
    setOpen(true)
    setUpdateBanner(b)
  }

  return (
    <div className='relative overflow-hidden max-h-[350px]' ref={bannerRef}>
      <div className="bannerActions absolute top-3 right-3 flex flex-col gap-2">
      <div className="editIcon bg-white w-fit h-fit p-1 rounded-full flex justify-center items-center cursor-pointer z-10" onClick={()=>{handleBannerEdit(banner)}}><img className='w-5 h-5' src="/assets/edit-icon.svg" alt="" /></div>
      <div className="downloadIcon bg-white w-fit h-fit p-1 rounded-full flex justify-center items-center cursor-pointer z-10" onClick={handleDownload}><img className='w-5 h-5' src="/assets/download-icon.svg" alt="" /></div>
      </div>
        <img className='' src={banner.img} alt="" />
        <div className="bannerContent absolute top-3 left-3 flex flex-col text-white align-start z-0 h-full sm:top-6 lg:top-3">
        <h2 className="title text-xl font-bold text-shadow-lg">{banner.title}</h2>
        <p className="desc max-w-[330px] mt-2 text-shadow-md text-sm text-wrap sm:text-lg sm:mt-7 lg:mt-4">{banner.desc}</p>
        <button className="cta bg-purple-600 px-2 py-1 w-fit rounded-sm justify-end mt-auto mb-14 lg:mb-20">{banner.cta}</button>
        </div>
    </div>
  )
}

export default BannerImageA