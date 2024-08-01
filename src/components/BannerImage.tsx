import React from 'react'
import { Banner } from "../utils/types"

interface BannerImageProps {
    banner: Banner;
  }

const BannerImage: React.FC<BannerImageProps> = ({banner}) => {
  return (
    <div className='relative'>
        <img className='' src={banner.img} alt="" />
        <div className="bannerContent absolute top-6 left-3 flex flex-col text-white align-start">
        <h2 className="title text-xl font-bold text-shadow-2xl">{banner.title}</h2>
        <p className="desc mt-7 text-shadow-md font-semibold">{banner.desc}</p>
        <button className="cta bg-purple-600 px-2 py-1 mt-12 w-fit rounded-sm">{banner.cta}</button>
        </div>
    </div>
  )
}

export default BannerImage