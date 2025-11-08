import React from 'react';
import RotatingText from '../../libraries/react-bits/RotatingText';
import {useRootContext} from '../../contexts/RootContext';
import AppConfig from '../../constant/application'

function SectionAbout() {
	const {t} = useRootContext();

	const qualityTexts = [t('kwaliteit'), t('transparantie'), t('persoonlijke_service')];
	return (
		<section id={'blog'} className={'section-about'}>
			<div className={'section-about-block'}>
				<div className={'section-me-picture'}>
					{/*<img src={'/svg/shape.svg'} className={'section-home-block-me-shape'} alt={t('alt_shape_behind_makelaar')}/>*/}
					<img src={'/pictures/arjun2.png'} className={'section-home-block-me-img'} alt={t('alt_picture_of_the_makelaar')}/>
				</div>

				<div className={'section-about-info'}>
					<h2 className={'section-about-info-title'}>
						{t('mijn_naam')}
						<span className={'section-about-info-title text-secondary-main ml-4 mr-4'}>{AppConfig.owner},</span>
					</h2>
					<span className={'section-about-info-txt'}>
						{t('oprichter_van')}
						<h2 className={'section-about-info-title-2 text-secondary-main ml-3 mr-3'}>{AppConfig.company}</h2>
						{t('sinds_2018_actief')}
					</span>

					<div className={'flex flex-row items-center justify-center gap-4 self-start mt-8 mb-8 about-rotating'}>
						<h3 className={'section-about-info-h3 whitespace-nowrap'}>{t('bij_mij_staat')}</h3>
						<RotatingText
							texts={qualityTexts}
							mainClassName="rotating-text-main"
							staggerFrom="last"
							initial={{y: '100%'}}
							animate={{y: 0}}
							exit={{y: '-120%'}}
							staggerDuration={0.025}
							splitLevelClassName="rotating-text-split"
							transition={{
								type: 'spring',
								damping: 30,
								stiffness: 400,
							}}
							rotationInterval={2000}
						/>
						<h3 className={'section-about-info-h3 section-about-info-h3'}>{t('bij_mij_staat2')}</h3>
					</div>

					<p className={'section-about-info-txt'}>{t('ik_zorg_ervoor')}</p>
				</div>
			</div>
		</section>
	);
}

export default SectionAbout;
