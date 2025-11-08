import React from 'react';
import {useRootContext} from "../contexts/RootContext";
import Button from "../components/buttons/Button";
import Page from "../components/screens/Page";
import Not404Found from "../components/elements/Not404Found";

function NotFoundPage() {
	const {t, navigate} = useRootContext();
	return (
		<Page>
			<main className={'page-not-found'}>
				<div className={'page-not-found-gallery'}>
					<div className={'contact-form-gallery-gradient'}/>
				</div>

				<div className={'page-not-found-info'}>
					<Not404Found/>
					<h1 className={'page-not-found-h1'}>{t('page_not_found')}</h1>
					<p className={'page-not-found-txt'}>{t('page_not_found_description')}</p>
					<Button className={'page-not-found-btn'} icon={'bi-arrow-left-short'} label={t('go_back_home')} onClick={() => navigate('/', {replace: true})}/>
				</div>

			</main>
		</Page>
	);
}

export default NotFoundPage;