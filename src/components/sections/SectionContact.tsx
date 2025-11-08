import React from 'react';
import Button from '../buttons/Button';
import {useRootContext} from '../../contexts/RootContext';

function SectionContact() {
	const {t, navigate} = useRootContext();

	return (
		<section id={'contact'} className={'section-contact'}>
			<div className={'section-contact-img-ctn'}>
				{/*<img className={'section-contact-img'} src={'/pictures/dow.png'} alt={t('alt_contact_us_picture')}/>*/}
			</div>
			<div className={'section-contact-info'}>
				<h2 className={'section-contact-title'}>{t('get_in_touch')}</h2>
				<p className={'section-contact-description'}>{t('get_in_touch_description')}</p>
				<Button className={'section-contact-btn'} icon={'bi-send-fill'} label={t('send_inquiry')} onClick={() => navigate('/contact')}/>
			</div>
		</section>
	);
}

export default SectionContact;
