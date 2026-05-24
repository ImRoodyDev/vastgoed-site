// External imports
import React, {useCallback, useState} from 'react';
import {AnimatePresence, LayoutGroup, motion, Transition} from 'motion/react';

// Internal imports
import {useRootContext} from "../../contexts/RootContext";
import {useComponentStateReducer} from "../../hooks/useComponentStateReducer";
import FormInputField from "../elements/FormInputField";
import TextAreaInputField from "../elements/TextAreaInputField";
import Button from "../buttons/Button";
import Logo from "../elements/Logo";
import Spinner from "../elements/Spinner";
import {isContactFormValid} from "../../utils/dataValidation";
import {delay} from "../../utils/standards";
import {ContactFormValidationErrors} from "../../types/ContactFormData";
import {fetchResponse} from "../../utils/fetchHelpers";
import AppConfig from "../../constant/application";
import {publicPath} from "../../utils/publicPath";

// Framer Motion shared animation properties
const cardContentAnimation = {
	initial: {opacity: 0, y: 30, scale: 0.95},
	animate: {opacity: 1, y: 0, scale: 1},
	exit: {opacity: 0, y: -30, scale: 0.95},
	transition: {duration: 0.4, ease: "easeInOut"} as Transition,
};

type Web3FormsResponse = {
	success: boolean;
	message?: string;
}

const SectionContactForm: React.FC = () => {
	const {t, navigate} = useRootContext();

	// Component state
	const [state, setState] = useComponentStateReducer();
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	const [validationErrors, setValidationErrors] = useState<ContactFormValidationErrors>(); // New state for validation errors

	// Go home button
	const handleBack = useCallback(() => {
		navigate('/');
	}, [navigate]);

	// Contact form submission
	const handleFormSubmission = useCallback(async (e: any) => {
		if (!e || isSubmitting) return;
		e?.preventDefault();

		// Block input fields
		setIsSubmitting(true);

		const formTarget = e.target as HTMLFormElement;
		const formData = new FormData(formTarget);

		// Set component to loading state
		setState({type: 'loading'})

		// Validate the form data
		const [isValid, validatedForm, formErrors] = isContactFormValid(formData);

		// Set validation errors state
		setValidationErrors(formErrors);

		// Wait 2 seconds for a nice animation
		await delay(2000);

		// Check validated results
		if (isValid && validatedForm) {
			try {
				// Submit form
				const response = await fetchResponse<Web3FormsResponse>(formTarget.action, {method: formTarget.method, body: formData});

				if (response.success) {
					setState({type: 'succeed'});
				}

				await delay(3000);
				formTarget.reset();
				handleBack();
			} catch (e) {
				setState({type: 'error'});

				// Wait 2 seconds for a nice animation
				await delay(3000);
			}
		}

		// Reset submitting state
		setIsSubmitting(false);
		setState({type: 'idle'});
	}, [isSubmitting, setState, handleBack]);

	const layoutTransition: Transition = {type: 'spring', duration: 0.4 /*type: 'spring', damping: 25, stiffness: 300*/} as const;

	return (
		<LayoutGroup>
			<motion.div className="contact-form-wrapper" layout transition={layoutTransition}>
				<div className={'contact-form-side'}>
					<div className={'contact-form-side-header'}>
						<Button
							className={'contact-form-side-header-btn'}
							icon={'bi-x-lg'}
							aria-label={t('alt_close_button')}
							onClick={handleBack}
						/>
					</div>
					<div className={'contact-form-gallery'}>
						<Logo className='contact-form-gallery-logo'/>
						<img src={publicPath('/pictures/den_haag_houses.png')} className={'contact-form-houses-img'} alt={t('alt_houses_picture')}/>
						<img src={publicPath('/pictures/clouds.png')} className={'contact-form-clouds-img'} alt={t('alt_clouds_picture')}/>
						<div className={'contact-form-gallery-gradient'}/>
					</div>
				</div>

				<motion.div
					layout
					className="contact-form-card"
					transition={layoutTransition}
				>
					<AnimatePresence mode="wait" initial={false}>
						{/* 1. Success View */}
						{state.type === 'succeed' && (
							<motion.div layout key="success-screen" {...cardContentAnimation} className="contact-form-full-screen">
								<i className="bi bi-envelope-check-fill contact-form-large-icon contact-form-icon-success"></i>
								<h2 className="contact-form-full-screen-title">{t('successfully_sent_message')}!</h2>
								<p className="contact-form-full-screen-message">{t('successfully_sent_message_description')}</p>
							</motion.div>
						)}

						{/* 2. Error View */}
						{state.type === 'error' && (
							<motion.div layout key="error-screen" {...cardContentAnimation} className="contact-form-full-screen">
								<i className={'bi bi-x-circle-fill contact-form-large-icon contact-form-icon-error'}/>
								<h2 className="contact-form-full-screen-title">{t('error_sending_message')}</h2>
								<p className="contact-form-full-screen-message">{t('error_sending_description')}</p>
							</motion.div>
						)}

						{/* 3. Loading View */}
						{state.type === 'loading' && (
							<motion.div layout key="loading-screen" {...cardContentAnimation} className="contact-form-full-screen">
								<Spinner className="contact-form-large-spinner"/>
								<h2 className="contact-form-full-screen-title">{t('loading_sending_message')}</h2>
								<p className="contact-form-full-screen-message">{t('loading_sending_message_description')}</p>
							</motion.div>
						)}

						{/* 4. Default Form View */}
						{state.type === 'idle' && (
							<motion.div layout key="form-view" {...cardContentAnimation} className="contact-form">
								<div className="contact-form-header-center">
									<Button
										className={'contact-form-side-header-btn mobile'}
										icon={'bi-x-lg'}
										aria-label={t('alt_close_button')}
										onClick={handleBack}
									/>
									<h1 className="contact-form-title">{t('contact_us_form')}</h1>
									<p className="contact-form-subtitle">{t('contact_us_description')}</p>
								</div>

								<form action={AppConfig.WEB3FORMS_URL} method="POST" id="form" onSubmit={handleFormSubmission} noValidate>
									<input aria-hidden={true} type="hidden" name="access_key" value={AppConfig.WEB3FORMS_ACCESS_KEY}/>
									{/*<input aria-hidden={true} type="hidden" name="subject" value="New Submission from Web3Forms"/>*/}
									<input aria-hidden={true} aria-label={'bot-check'} type="checkbox" name="botcheck" className="contact-form-botcheck"/>

									<div className="contact-form-field-group">
										<FormInputField
											mainClassName="contact-form-half-width"
											label={t('first_name')}
											error={t('required_first_name')}
											name="name"
											id="first_name"
											placeholder="John"
											required
											isError={!!validationErrors?.firstName}
											disabled={isSubmitting}
										/>

										<FormInputField
											mainClassName="contact-form-half-width"
											label={t('last_name')}
											error={t('required_last_name')}
											id="lname"
											name="lname"
											placeholder="Doe"
											required
											isError={!!validationErrors?.lastName}
											disabled={isSubmitting}
										/>
									</div>

									<div className="contact-form-field-group">
										<FormInputField
											mainClassName="contact-form-half-width"
											label={t('email_address')}
											error={t('required_email_address')}
											name="email"
											id="email"
											placeholder="you@company.com"
											required
											isError={!!validationErrors?.email}
											disabled={isSubmitting}
										/>

										<FormInputField
											mainClassName="contact-form-half-width"
											label={t('phone_number')}
											error={t('required_phone_number')}
											id="phone"
											name={"phone"}
											placeholder="+1 (555) 1234-567"
											required
											isError={!!validationErrors?.telephone}
											disabled={isSubmitting}
										/>
									</div>

									<TextAreaInputField
										mainClassName="contact-form-full-width"
										label={t('your_message')}
										error={t('required_your_message')}
										id="message"
										name="message"
										placeholder="Your Message"
										required
										isError={!!validationErrors?.message}
										disabled={isSubmitting}
									/>

									<Button className={'contact-form-button'} label={'Send Message'} icon={'bi-send-fill'} disabled={isSubmitting}/>
								</form>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
			</motion.div>
		</LayoutGroup>
	);
};

// The main App component export
export default SectionContactForm;
