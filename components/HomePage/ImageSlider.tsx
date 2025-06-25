'use client';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const images = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png"
];

export default function ImageSlider(){
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    return (
        <div className="relative w-full rounded-md overflow-hidden mt-6 
                        h-[300px] sm:h-[450px] md:h-[550px] lg:h-[650px]">
            <img 
                src={images[currentIndex]}
                alt="ImageSlider"
                className="w-full h-full object-cover"
            />
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-white/70 p-1.5 sm:p-2 rounded-full shadow hover:bg-white"
                aria-label="Previous Slide"
            >
                <ChevronLeft size={20} className="sm:text-white text-gray-700"/>
            </button>

            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-white/70 p-1.5 sm:p-2 rounded-full shadow hover:bg-white"
                aria-label="Next Slide"
            >
                <ChevronRight size={20} className="sm:text-white text-gray-700"/>
            </button>
        </div>
    );
}
