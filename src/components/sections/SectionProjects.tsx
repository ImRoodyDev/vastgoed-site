import React from 'react';
import CarouselSwitcher from '../elements/CarouselSwitcher';
import {useRootContext} from '../../contexts/RootContext';

function SectionProjects() {
	const {t} = useRootContext();

	const carouselData = [
		{
			id: 1,
			title: 'Project IBCC',
			subtitle: `${t('project')} 1`,
			description: t('ibcc'),
			images: [
				{url: '/pictures/ibcc/ibcc-1.webp', alt: 'Tour 1'},
				{url: '/pictures/ibcc/ibcc-2.webp', alt: 'Tour 2'},
				{url: '/pictures/ibcc/ibcc-3.webp', alt: 'Tour 3'},
				{url: '/pictures/ibcc/ibcc-4.png', alt: 'Tour 4'},
			],
		},
		{
			id: 2,
			subtitle: `${t('project')} 2`,
			title: 'Project Parlement residences',
			description: t('parlement_residences'),
			images: [
				{url: '/pictures/ppt/ppt-1.webp', alt: 'Window 1', className: 'carousel-item__image-element-center'},
				{url: '/pictures/ppt/ppt-2.webp', alt: 'Window 2'},
			],
		},
		{
			id: 3,
			subtitle: `${t('project')} 3`,
			title: 'Vakantiepark Zwartemeer Emmen',
			description: t('vakantiepark_zwartemeer'),
			images: [
				{url: '/pictures/vkz/vkz-1.jpg', alt: 'Palms 1'},
				{url: '/pictures/vkz/vkz-2.jpg', alt: 'Palms 2'},
			],
		},
	];

	return (
		<section id={'projecten'} className={'section-project'}>
			<CarouselSwitcher items={carouselData}/>
		</section>
	);
}

export default SectionProjects;
