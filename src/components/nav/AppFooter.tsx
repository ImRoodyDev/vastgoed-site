// Internal imports
import React, { useCallback } from 'react';

// Internal imports
import Logo from '../elements/Logo';
import LanguagePicker from '../buttons/LanguagePicker';
import { useRootContext } from '../../contexts/RootContext';
import AppConfig from '../../constant/application';

export function AppFooter() {
	const { t } = useRootContext();

	const handleSocialClick = useCallback((platform: 'tiktok' | 'whatsapp') => {
		let url;

		switch (platform) {
			case 'tiktok':
				url = AppConfig.tiktok_url;
				break;
			case 'whatsapp':
				url = AppConfig.whatsapp_url;
				break;
			default:
				url = undefined;
		}
		if (url) {
			window.open(url, '_blank');
		}
	}, []);

	return (
		<footer className="app-footer">
			<div className="app-footer-ctn">
				<div className="app-footer-block flex-[2] first">
					<Logo className="app-footer-logo" />
					<h3 className={'app-footer-description'}>{t('footer_description', { company: AppConfig.company })}</h3>
					<div className="social-card">
						<button
							className="socialContainer containerTwo"
							aria-label="TikTok"
							onClick={() => handleSocialClick('tiktok')}
						>
							<i className="socialSvg bi bi-tiktok"></i>
						</button>
						<button
							className="socialContainer containerFour"
							aria-label={'Whatsapp'}
							onClick={() => handleSocialClick('whatsapp')}
						>
							<i className="socialSvg bi bi-whatsapp"></i>
						</button>

						{/*<a className="socialContainer containerOne" href="/#instragram" aria-label="TikTok">*/}
						{/*	<i className="socialSvg instagramSvg bi bi-instagram"></i>*/}
						{/*</a>*/}
						{/*<a className="socialContainer containerThree" href="/#linkedin" aria-label={'LinkedIn'}>*/}
						{/*	<svg viewBox="0 0 448 512" className="socialSvg linkdinSvg">*/}
						{/*		<path*/}
						{/*			d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>*/}
						{/*	</svg>*/}
						{/*</a>*/}
					</div>
				</div>
				<div className="app-footer-block">
					<div className={'app-footer-nav'}>
						<h4 className={'app-footer-anchor-title'}>{t('general')}</h4>
						<div className={'app-footer-anchor'}>
							<i className="bi bi-geo-alt-fill app-footer-anchor-icon"></i>
							<span className={'app-footer-anchor-txt'}>{AppConfig.location}</span>
						</div>
						<div className={'app-footer-anchor'}>
							<i className="bi bi-clock-fill app-footer-anchor-icon"></i>
							<span className={'app-footer-anchor-txt'}>
								{t('opening_hours')}:{' ' + t('monday')}-{t('friday') + ' '}
								9:00 - 18:00
							</span>
						</div>
						<div className={'app-footer-anchor'}>
							<i className="bi bi-at app-footer-anchor-icon"></i>
							<a className={'app-footer-anchor-txt'} href={`mailto:${AppConfig.email}`}>
								{AppConfig.email}
							</a>
						</div>
						<div className={'app-footer-anchor'}>
							<i className="bi bi-telephone-fill app-footer-anchor-icon"></i>
							<a className={'app-footer-anchor-txt'} href={`tel:${AppConfig.phone.replace(/\s+/g, '')}`}>
								{AppConfig.phone}
							</a>
						</div>
					</div>
				</div>
				<div className="app-footer-block">
					<nav id={'footer-nav'} className={'app-footer-nav'}>
						<h4 className={'app-footer-anchor-title'}>{t('sitemap')}</h4>
						<a className={'app-footer-anchor'} href={'#home'}>
							{t('home')}
						</a>
						<a className={'app-footer-anchor'} href={'#blog'}>
							{t('blog')}
						</a>
						<a className={'app-footer-anchor'} href={'#projecten'}>
							{t('projects')}
						</a>
						<a className={'app-footer-anchor'} href={'#contact'}>
							{t('contact')}
						</a>
					</nav>
				</div>
				<div className="app-footer-block">
					<LanguagePicker />
				</div>
			</div>
			<div className="app-footer-line" />
			<div className={'app-footer-copyright'}>
				<p className={'app-footer-copyright-txt'}>
					&copy; {new Date().getFullYear()} {t('footer_copyright', { company: AppConfig.company })}
				</p>
			</div>
		</footer>
	);
}

export default AppFooter;
