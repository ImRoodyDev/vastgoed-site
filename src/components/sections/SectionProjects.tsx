import React from 'react';
import CarouselSwitcher from '../elements/CarouselSwitcher';
import { useRootContext } from '../../contexts/RootContext';
import { publicPath } from '../../utils/publicPath';

function SectionProjects() {
	const { t } = useRootContext();

	const carouselData = [
		{
			id: 1,
			title: t('project_urban_loft_title'),
			subtitle: `${t('project')} 1`,
			description: t('project_urban_loft_description'),
			images: [
				{ url: publicPath('/pictures/projects/urban-loft-exterior.png'), alt: 'Urban loft exterior' },
				{ url: publicPath('/pictures/projects/urban-loft-interior.png'), alt: 'Urban loft interior' },
				{ url: publicPath('/pictures/projects/urban-loft-exterior-2.png'), alt: 'Urban loft courtyard exterior' },
				{ url: publicPath('/pictures/projects/urban-loft-interior-2.png'), alt: 'Urban loft shared interior' },
			],
		},
		{
			id: 2,
			subtitle: `${t('project')} 2`,
			title: t('project_canal_view_title'),
			description: t('project_canal_view_description'),
			images: [
				{ url: publicPath('/pictures/projects/canal-view-exterior.png'), alt: 'Canal view residence exterior', className: 'carousel-item__image-element-center' },
				{ url: publicPath('/pictures/projects/canal-view-interior.png'), alt: 'Canal view residence interior' },
				{ url: publicPath('/pictures/projects/canal-view-exterior-2.png'), alt: 'Canal view residence entrance' },
				{ url: publicPath('/pictures/projects/canal-view-interior-2.png'), alt: 'Canal view residence bedroom' },
			],
		},
		{
			id: 3,
			subtitle: `${t('project')} 3`,
			title: t('project_greenfield_title'),
			description: t('project_greenfield_description'),
			images: [
				{ url: publicPath('/pictures/projects/greenfield-exterior.png'), alt: 'Greenfield retreat exterior' },
				{ url: publicPath('/pictures/projects/greenfield-interior.png'), alt: 'Greenfield retreat interior' },
				{ url: publicPath('/pictures/projects/greenfield-exterior-2.png'), alt: 'Greenfield retreat lodge exterior' },
				{ url: publicPath('/pictures/projects/greenfield-interior-2.png'), alt: 'Greenfield retreat guest room' },
			],
		},
	];

	return (
		<section id={'projecten'} className={'section-project'}>
			<CarouselSwitcher items={carouselData} />
		</section>
	);
}

export default SectionProjects;
