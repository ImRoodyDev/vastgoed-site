import React from 'react';
import CountUp from '../../libraries/react-bits/CountUp';
import {useRootContext} from '../../contexts/RootContext';
import AppConfig from '../../constant/application';

function SectionProgress() {
	const {t} = useRootContext();

	return (
		<section className={'section-progress'}>
			<div className={'section-progress-item'}>
				<CountUp from={0} to={AppConfig.jarenErvaring} className={'section-progress-item-number'} endText={'+'}/>
				<p className={'section-progress-item-txt'}>{t('years_of_experience')}</p>
			</div>
			<div className={'section-progress-item'}>
				<CountUp from={0} to={AppConfig.gehuurd} className={'section-progress-item-number'} endText={'+'}/>
				<p className={'section-progress-item-txt'}>{t('rented_properties')}</p>
			</div>
			<div className={'section-progress-item'}>
				<CountUp from={0} to={AppConfig.projecten} className={'section-progress-item-number'} endText={'+'}/>
				<p className={'section-progress-item-txt'}>{t('projects')}</p>
			</div>
		</section>
	);
}

export default SectionProgress;
