import {useEffect, useState} from 'react';
import clsx from "clsx";

// Generate colorful gradient images as placeholders
export const generateGradient = (color1: string, color2: string) => {
	return `data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:${color1};stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:${color2};stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23grad)' /%3E%3C/svg%3E`;
};

export interface CarouselImage {
	url: string;
	alt: string;
	className?: string;
}

export interface CarouselItem {
	id: number;
	subtitle: string;
	title: string;
	description: string;
	images: CarouselImage[];
}

interface CarouselProps {
	items: CarouselItem[];
	maxWidth?: string;
	maxHeight?: string;
	autoPlayDuration?: number;
}

function CarouselSwitcher({items, autoPlayDuration = 3000}: CarouselProps) {
	const [currentItem, setCurrentItem] = useState(0);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [, setProgress] = useState(0);

	const total = items.length;
	const currentImages = items[currentItem].images;
	const totalImages = currentImages.length;

	// Auto-play timer
	useEffect(() => {
		const startTime = Date.now();

		const timer = setInterval(() => {
			const elapsed = Date.now() - startTime;
			const progressPercent = (elapsed / autoPlayDuration) * 100;

			if (progressPercent >= 100) {
				if (currentImageIndex < totalImages - 1) {
					setCurrentImageIndex(currentImageIndex + 1);
				} else {
					setCurrentImageIndex(0);
					setCurrentItem((currentItem + 1) % total);
				}
				setProgress(0);
			} else {
				setProgress(progressPercent);
			}
		}, 50);

		return () => clearInterval(timer);
	}, [currentItem, currentImageIndex, totalImages, total, autoPlayDuration]);

	const moveLeft = () => {
		setCurrentImageIndex(0);
		setProgress(0);
		setCurrentItem(currentItem === 0 ? total - 1 : currentItem - 1);
	};

	const moveRight = () => {
		setCurrentImageIndex(0);
		setProgress(0);
		setCurrentItem(currentItem === total - 1 ? 0 : currentItem + 1);
	};

	const goToImage = (index: number) => {
		setCurrentImageIndex(index);
		setProgress(0);
	};

	return (
		<div className="carousel">
			<div className="carousel__nav">
				<span className="carousel__arrow" onClick={moveLeft}>
					<svg className="carousel__icon" width="24" height="24" viewBox="0 0 24 24">
						<path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
					</svg>
				</span>
				<span className="carousel__arrow" onClick={moveRight}>
					<svg className="carousel__icon" width="24" height="24" viewBox="0 0 24 24">
						<path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
					</svg>
				</span>
			</div>

			{
				items.map((item, index) => (
					<div key={item.id} className={`carousel-item ${index === currentItem ? 'active' : ''}`}>
						<div className="carousel-item__info">
							<div className="carousel-item__info-ctn">
								<div className="carousel-item__info-header">
									<div className={'carousel-subtitle-container'}>
										<h2 className="carousel-item__subtitle">{item.subtitle}</h2>
									</div>
									<h1 className="carousel-item__title">{item.title}</h1>
								</div>
								<div className="carousel-item__container">
									<p className="carousel-item__description">{item.description}</p>
								</div>
							</div>
						</div>

						<div className="carousel-item__image">
							<div className="carousel-item__image-container">
								{item.images.map((img, imgIndex) => (
									<div key={imgIndex} className={`carousel-item__image-slide ${index === currentItem && imgIndex === currentImageIndex ? 'active-slide' : ''}`}>
										<img className={clsx("carousel-item__image-element", img.className)} src={img.url} alt={img.alt}/>
									</div>
								))}
							</div>

							{index === currentItem && item.images.length > 1 && (
								<div className="progress-bar-container" key={`progress-${currentItem}`}>
									{item.images.map((_, imgIndex) => (
										<div
											key={imgIndex}
											className={`progress-circle ${imgIndex === currentImageIndex ? 'active-circle' : ''}`}
											onClick={() => goToImage(imgIndex)}
											style={{
												animationDelay: `${imgIndex * 0.05}s`,
											}}
										/>
									))}
								</div>
							)}
						</div>
					</div>
				))
			}
		</div>
	);
}

export default CarouselSwitcher;
