
import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {

        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000);


        return () => clearInterval(intervalId);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className="relative w-full overflow-hidden ">
            <button
                onClick={prevSlide}
                className="absolute top-1/2 transform -translate-y-1/2 left-4 text-2xl"
            >
                &lt;
            </button>
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-[450px] rounded-md transition-transform duration-500 ease-in-out transform translate-x-0"
            />
            <button
                onClick={nextSlide}
                className="absolute top-1/2 transform -translate-y-1/2 right-4  text-white text-2xl"
            >
                &gt;
            </button>
        </div>
    );
};

export default ImageSlider;
