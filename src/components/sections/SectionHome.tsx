// External imports
import React from 'react';

// Internal imports
import Button from '../buttons/Button';
import {useRootContext} from '../../contexts/RootContext';
import AppConfig from '../../constant/application';

function SectionHome() {
	const {t, navigate} = useRootContext();

	return (
		<section id={'home'} className={'section-home'}>
			<div className={'sofa-img-ctn'}>
				<div className={'sofa-r-ctn'}>
					{/*<img src={'/pictures/sofa-light.png'} className={'sofa-light-img'} alt={t('alt_light_bolb')}/>*/}
					{/*<img src={'/pictures/sofa.png'} className={'sofa-img'} alt={t('alt_sofa_picture')}/>*/}
					{/*<div className={'section-about-top-gradient'}/>*/}
					<img src={'/pictures/den_haag_houses.png'} className={'house-img'} alt={t('alt_houses_picture')}/>
				</div>
			</div>

			<div className={'section-home-block'}>
				<h1 className={'section-home-block-title primary'}>{AppConfig.company}</h1>
				<h1 className={'section-home-block-title'}>{t('vetrouwde_makelaar')}</h1>
				<Button className={'section-home-block-btn btn-fill-anim'} label={t('contact_me')} onClick={() => navigate('/contact')}/>
			</div>
		</section>
	);
}

export default SectionHome;
