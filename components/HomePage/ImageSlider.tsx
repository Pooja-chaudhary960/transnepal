'use client';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const images = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png"
];

export default function ImageSlider(){
    const[currentIndex, setCurrentIndex]=useState(0);

    const prevSlide=()=>{
        setCurrentIndex((currentIndex -1 + images.length)%images.length)
    };

    const nextSlide=()=>{
        setCurrentIndex((currentIndex+1)%images.length);
    };

    return(
    <div className="relative w-full h-[650px] rounded-md overflow-hidden mt-6 ">
        <img 
        src={images[currentIndex]}
        alt="ImageSlider"
        className="w-full h-full object-cover"
        />
        <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow"
        >
        <ChevronLeft size={28} className="text-white"/>
        </button>

        <button
        onClick={nextSlide}
         className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow"
        >
        <ChevronRight size={28} className=" text-white"/>
        </button>
    </div>
    )
}