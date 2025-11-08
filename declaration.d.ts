// External imports
import {TFunction} from 'i18next';
import {NavigateFunction} from "react-router-dom";

// Internal imports
import {SupportedLanguages, LocalizationResources} from "./src/controllers/localization";

declare global {
	interface Application {
		initialized: boolean;
		pathname: string;
		languageCode: SupportedLanguages;
	}

	interface Window {
		application: Application;
	}
}

// This is making sure that the i18next module recognizes our custom types in our translation files
declare module "i18next" {
	interface CustomTypeOptions {
		defaultNS: "translation";
		resources: LocalizationResources;
	}
}
