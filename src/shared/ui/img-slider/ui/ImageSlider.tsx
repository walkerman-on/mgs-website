// src/ImageSlider.tsx

import React, { useState } from 'react';
import ArrowLeftIcon from 'shared/assets/icons/ArrowLeftIcon';
import ArrowRightIcon from 'shared/assets/icons/ArrowRightIcon';

interface ImageSliderProps {
	images: string[];
	description: string[]
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images, description }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrevious = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
	};

	const goToNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
	};

	return (
		<div className="relative w-full max-w-3xl mx-auto flex-1 overflow-hidden flex justify-center items-center flex-col">
			<button
				className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer rounded-lg bg-bg-color hover:scale-110 transition duration-300 ease-in-out"
				onClick={goToPrevious}
			>
				<ArrowLeftIcon />
			</button>
			<div className="w-full">
				<img
					src={images[currentIndex]}
					alt="slider"
					className="w-full h-auto object-cover"
				/>

			</div>
			<button
				className="absolute top-1/2 right-4 transform -translate-y-1/2 rounded-lg bg-bg-color cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
				onClick={goToNext}
			>
				<ArrowRightIcon />
			</button>
			<span>{description[currentIndex]}</span>
		</div>
	);
};

