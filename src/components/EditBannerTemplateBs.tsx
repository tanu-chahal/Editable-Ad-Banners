"use client";
import { Banner } from "@/utils/types";
import React, { useState, useEffect } from "react";

interface EditBannerProps {
  banner: Banner | null;
  setOpen: (open: boolean) => void;
  setCustomBanner: (b: Banner) => void;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({
  banner,
  setOpen,
  setCustomBanner
}) => {
  const optionImages = [
    "/assets/banner-1.jpg",
    "/assets/banner-2.jpg",
    "/assets/banner-3.jpg",
    "/assets/banner-4.jpg",
    "/assets/banner-5.jpg",
    "/assets/banner-6.jpg",
    "/assets/banner-7.jpg",
    "/assets/banner-8.jpg",
    "/assets/banner-9.jpg",
    "/assets/banner-10.jpg"
  ]
  const [title, setTitle] = useState(banner?.title);
  const [description, setDescription] = useState(banner?.desc);
  const [buttonText, setButtonText] = useState(banner?.cta);
  const [selectedImage, setSelectedImage] = useState<string | null>(
    banner?.img || null
  );
  const [error, setError] = useState("");

  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
  };

  const handleBannerEdit = (e: any) => {
    setError('')
    e.preventDefault();
    if (!title) {
      setError("Enter a Banner title");
      return;
    } else if (!description) {
      setError("Enter a Banner description");
      return;
    } else if (!buttonText) {
      setError("Enter a Button text.");
      return;
    } else if (!selectedImage) {
      setError("Choose a Background image");
      return;
    }
    const b:Banner = {id: banner?.id || 1, img: selectedImage, title, desc: description, cta: buttonText}
    setCustomBanner(b)
    setOpen(false)
    setError('')
  };

  return (
    <div className="editBottomSheet shadow-lg h-fit w-full p-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md bg-white absolute z-50 sm:w-1/2">
      <img
        className="w-5 h-5 absolute right-5 top-5 cursor-pointer"
        src="/assets/close-icon.svg"
        alt=""
        onClick={() => setOpen(false)}
      />
      <form className="space-y-4" onSubmit={handleBannerEdit}>
        <div>
          <label className="block text-sm font-medium text-purple-600">
            Select Image
          </label>
           <div className="flex space-x-2 mt-2">

            <div className="optionImgs w-full overflow-x-scroll flex space-x-2 h-fit scrollbar-thin scrollbar-thumb-rounded">
              {optionImages.map((imgSrc) => (
                <div
                  key={imgSrc}
                  className={`w-[42px] h-[42px] rounded-full border-2 cursor-pointer flex-shrink-0 ${
                    selectedImage === imgSrc
                      ? "border-purple-600"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleImageSelect(imgSrc)}
                >
                  <img
                    src={imgSrc}
                    alt=""
                    className="object-fit w-full h-full rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-purple-600"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm  text-gray-400 focus:outline-purple-600 sm:text-sm "
            placeholder="Enter title"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-purple-600"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm text-gray-400 focus:outline-purple-600 sm:text-sm"
            placeholder="Enter description"
            rows={3}
          />
        </div>

        <div>
          <label
            htmlFor="buttonText"
            className="block text-sm font-medium text-purple-600"
          >
            Button Text
          </label>
          <input
            type="text"
            id="buttonText"
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm text-gray-400 focus:outline-purple-600 sm:text-sm"
            placeholder="Enter button text"
          />
        </div>
        <button
          className="cta bg-purple-600 px-2 py-1 mt-12 w-fit rounded-sm text-white"
          type="submit"
        >
          Save
        </button>
        {error && <div className="text-xs text-red-600">{error}</div>}
      </form>
    </div>
  );
};

export default EditBannerTemplateBs;
