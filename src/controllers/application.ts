// External imports
import LocalStorage from "./localStorage";

/** Initialize application global variable */
export default async function initializeApp() {
	window.application = {
		initialized: true,
		pathname: window.location.pathname,
		languageCode: LocalStorage.getItem('language') || 'nl',
	}

}