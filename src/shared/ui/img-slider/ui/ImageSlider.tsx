import React, { useState } from 'react';

interface ImageSliderProps {
	images: string[];
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	};

	return (
		<div className="relative w-full max-w-4xl mx-auto overflow-hidden">
			<button
				className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100"
				onClick={prevSlide}
			>
				❮
			</button>
			<div className="relative">
				<img
					src={images[currentIndex]}
					alt={`slide-${currentIndex}`}
					className="w-full h-auto block"
				/>
			</div>
			<button
				className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100"
				onClick={nextSlide}
			>
				❯
			</button>
		</div>
	);
};

