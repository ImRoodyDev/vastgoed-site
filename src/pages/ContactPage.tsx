// External imports
import React from 'react';

// Internal imports
import Page from '../components/screens/Page';
import SectionContactForm from "../components/sections/SectionContactForm";
import {useRootContext} from "../contexts/RootContext";

function ContactPage() {
	const {t} = useRootContext();

	return (
		<Page className={'min-h-screen'}>
			<SectionContactForm/>
			<img src={'/pictures/den_haag_houses.png'} className={'contact-bg-img'} alt={t('alt_houses_picture')}/>
		</Page>
	);
}

export default ContactPage;