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
		<div className="bg-bg-color rounded-lg pt-5 px-10 flex flex-col gap-5">
			<img
				src={images[currentIndex]}
				alt="slider"
				className="w-full h-96 object-contain"
			/>
			<div className="flex gap-5 justify-center">
				<button
					className="rounded-lg bg-color-accent hover:scale-110 transition duration-300 ease-in-out w-full"
					onClick={goToPrevious}
				>
					<ArrowLeftIcon />
				</button>
				<button
					className="rounded-lg bg-color-accent hover:scale-110 transition duration-300 ease-in-out w-full"
					onClick={goToNext}
				>
					<ArrowRightIcon />
				</button>
			</div>
			<span className="text-center block">{description[currentIndex]}</span>
		</div>
	);
};
