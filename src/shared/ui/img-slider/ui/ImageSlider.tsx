import React, { useState } from 'react';
import ArrowLeftIcon from 'shared/assets/icons/ArrowLeftIcon';
import ArrowRightIcon from 'shared/assets/icons/ArrowRightIcon';

interface ImageSliderProps {
	images: string[];
	description: string[];
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
		<div className="relative w-full max-w-3xl mx-auto flex flex-col items-center col-span-2 bg-bg-color rounded-lg">
			<div className="w-full max-h-96 flex items-center justify-center bg-bg-color rounded-lg overflow-hidden">
				<img
					src={images[currentIndex]}
					alt="slider"
					className="max-w-full max-h-full object-contain"
				/>
			</div>
			<div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex gap-2">
				<button
					className="rounded-lg bg-color-accent hover:scale-110 transition duration-300 ease-in-out"
					onClick={goToPrevious}
				>
					<ArrowLeftIcon />
				</button>
				<button
					className="rounded-lg bg-color-accent hover:scale-110 transition duration-300 ease-in-out"
					onClick={goToNext}
				>
					<ArrowRightIcon />
				</button>
			</div>
			<span className="mt-2 text-center">{description[currentIndex]}</span>
		</div>
	);
};
