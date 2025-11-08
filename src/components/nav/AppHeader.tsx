// External imports
import React from 'react';

// Internal imports
import Logo from '../elements/Logo';
import {useRootContext} from '../../contexts/RootContext';
import LanguagePicker from "../buttons/LanguagePicker";

function AppHeader() {
	const {t} = useRootContext();

	return (
		<header className={'app-header'}>
			<nav className={'app-header-nav-bar'}>
				<a className={'app-header-anchor'} href={'#home'}>{t('home')}</a>
				<a className={'app-header-anchor'} href={'#blog'}>{t('blog')}</a>
				<div className={'app-header-logo-ctn'}>
					<Logo className={'app-header-logo'}/>
				</div>
				<a className={'app-header-anchor'} href={'#projecten'}>{t('projects')}</a>
				<a className={'app-header-anchor'} href={'#contact'}>{t('contact')}</a>
			</nav>
			<LanguagePicker className={'header-language-picker'}/>
		</header>
	);
}

export default AppHeader;
