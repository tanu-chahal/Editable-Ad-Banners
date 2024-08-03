'use client'
import React from 'react'
import { Banner } from "../utils/types"

interface BannerImageProps {
    banner: Banner;
    setOpen:  (open: boolean) => void;
    setUpdateBanner: (b: Banner) => void;
  }

const BannerImageA: React.FC<BannerImageProps> = ({banner, setOpen, setUpdateBanner}) => {

  const handleBannerEdit = (b: Banner) => {
    setOpen(true)
    setUpdateBanner(b)
  }

  return (
    <div className='relative overflow-hidden max-h-[350px]'>
      <div className="editIcon absolute top-3 right-3 bg-white w-fit h-fit p-1 rounded-full flex justify-center items-center cursor-pointer z-10" onClick={()=>{handleBannerEdit(banner)}}><img className='w-5 h-5' src="/assets/edit-icon.svg" alt="" /></div>
        <img className='' src={banner.img} alt="" />
        <div className="bannerContent absolute top-3 left-3 flex flex-col text-white align-start z-0 h-full sm:top-6 lg:top-3">
        <h2 className="title text-xl font-bold text-shadow-xl">{banner.title}</h2>
        <p className="desc max-w-[330px] mt-2 text-shadow-md text-sm text-wrap sm:text-lg sm:mt-7 lg:mt-4">{banner.desc}</p>
        <button className="cta bg-purple-600 px-2 py-1 w-fit rounded-sm justify-end mt-auto mb-14 lg:mb-20">{banner.cta}</button>
        </div>
    </div>
  )
}

export default BannerImageA