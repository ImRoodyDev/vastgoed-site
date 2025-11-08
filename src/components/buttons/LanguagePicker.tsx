// External imports
import React from 'react';
import clsx from "clsx";

// Internal imports
import CustomDropdown, {DropdownItem} from "./Dropdown";
import {SupportedLanguages} from "../../controllers/localization";
import {useRootContext} from "../../contexts/RootContext";
import {joinClsx} from "../../utils/classPrefixer";

type Props = {
	className?: string;
}

function LanguagePicker({className}: Props) {
	const {t, changeLanguage} = useRootContext();

	const languages: DropdownItem<SupportedLanguages>[] = [
		{id: 'en', label: 'English', type: 'button', as: 'button'},
		{id: 'es', label: 'Español', type: 'button', as: 'button'},
		{id: 'fr', label: 'Français', type: 'button', as: 'button'},
		{id: 'nl', label: 'Nederlands', type: 'button', as: 'button'},
	]

	// Find the label of the current language
	const currentLanguageLabel = languages.find(lang => lang.id === window.application.languageCode)?.label || t('language')

	return (
		<CustomDropdown
			menuClassName={'rounded-xl'}
			buttonClassName={clsx('base-btn btn-fill-anim language-picker-btn', className)}
			itemButtonClassName={clsx('language-picker-item-btn', joinClsx(className, 'item-btn'))}
			buttonChildren={
				<>
					<i className={clsx("base-btn-icon btn-fill-anim-icon bi bi-globe-americas", joinClsx(className, 'icon'))}/>
					<span className={clsx("base-btn-txt btn-fill-anim-txt", joinClsx(className, 'txt'))}>
						{currentLanguageLabel}
					</span>
				</>
			}
			items={languages}
			onItemSelect={({id}) => changeLanguage(id)}
		/>
	);
}

export default LanguagePicker;