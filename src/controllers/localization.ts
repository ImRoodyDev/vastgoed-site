import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

export const resources = {
	nl: {
		translation: {
			general: 'Algemeen',
			home: 'Home',
			about: 'Over',
			contact: 'Contact',
			projects: 'Projecten',
			blog: 'Blog',
			socials: 'Socials',
			sitemap: 'Sitemap',
			language: 'Taal',
			contact_me: 'Neem contact met mij op',
			vetrouwde_makelaar: 'Uw Vertrouwde \nMakelaar.',

			opening_hours: 'Openingstijden',
			monday: 'Ma',
			friday: 'Vr',

			contact_us_form: 'Contactformulier',
			contact_us_description: `Vul onderstaand formulier in om een bericht te sturen.
			We nemen zo snel mogelijk contact met u op.`,

			first_name: 'Voornaam',
			required_first_name: 'Alsjeblieft, voer je voornaam in.',

			last_name: 'Achternaam',
			required_last_name: 'Alsjeblieft, voornaam in.',

			full_name: 'Volledige naam',
			required_full_name: 'Alsjeblieft, voer je volledige naam in.',

			email_address: 'E-mailadres',
			required_email_address: 'Alsjeblieft, voer je e-mailadres in.',

			phone_number: 'Telefoonnummer',
			required_phone_number: 'Alsjeblieft, voer je telefoonnummer in.',

			your_message: 'Uw bericht',
			required_your_message: 'Alsjeblieft, voer uw bericht in.',

			send_message: 'Verstuur bericht',
			form_success_message: 'Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.',
			form_error_message: 'Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het later opnieuw.',

			success: 'Succes',
			error: 'Fout',
			required_field: 'Dit veld is verplicht.',

			mijn_naam: 'Mijn naam is',
			oprichter_van: 'Oprichter en eigenaar van',
			sinds_2026_actief: `Sinds 2026 ben ik actief in de makelaardij en heb ik in de afgelopen jaren een breed netwerk opgebouwd binnen
			de vastgoedsector.
			Dankzij mijn ervaring en betrokkenheid heb ik met succes bemiddeld bij diverse grote projecten en vele klanten begeleid bij de aan- en
			verkoop van hun woning.`,

			kwaliteit: 'Kwaliteit',
			transparantie: 'Transparantie',
			persoonlijke_service: 'Persoonlijke Service',
			bij_mij_staat: 'Bij Mij staat', // in spanish 'Conmigo es',
			bij_mij_staat2: 'centraal.', // in english should be "come first." and any other language accordingly
			ik_zorg_ervoor: `Ik zorg ervoor dat het woningaanbod altijd actueel is en dat iedere klant kan rekenen op deskundig advies en professionele ondersteuning gedurende het gehele traject van de eerste kennismaking tot aan de overdracht bij de notaris.
			Of het nu gaat om aankoop, verkoop, taxaties of begeleiding bij vastgoedtransacties, Ik biedt een complete dienstverlening die is afgestemd op uw wensen en situatie.`,

			years_of_experience: 'Jaren Ervaring',
			rented_properties: 'Verhuurde Woningen',
			satisfied_clients: 'Tevreden Klanten',

			project: 'Project',
			project_urban_loft_title: 'Urban Loft Collective',
			project_urban_loft_description: `Een flexibel herontwikkelingsconcept voor een stedelijk gebouw met lichte werkruimtes, gedeelde voorzieningen en ruimte voor lokale ondernemers. Deze voorbeeldcase laat zien hoe een bestaand object kan worden gepresenteerd met focus op potentie, fasering en toekomstig gebruik.`,
			project_canal_view_title: 'Canal View Residences',
			project_canal_view_description: `Een residentieel showcaseproject met ruime appartementen, warme materialen en een rustige indeling. De case is geschreven als neutrale template-inhoud en kan eenvoudig worden aangepast voor verkoop, verhuur of projectontwikkeling.`,
			project_greenfield_title: 'Greenfield Retreat',
			project_greenfield_description: `Een recreatief vastgoedconcept met aandacht voor natuur, verblijfskwaliteit en lange termijn waarde. Deze demo-omschrijving helpt bezoekers snel begrijpen wat het project bijzonder maakt zonder naar een echte locatie of opdrachtgever te verwijzen.`,

			send_inquiry: 'Verstuur uw aanvraag',
			get_in_touch: 'Neem contact met mij',
			get_in_touch_description: `Heeft u vragen of wilt u meer informatie over mijn diensten? Neem gerust contact met mij op via onderstaand formulier of bel mij direct. Ik sta klaar om u te helpen bij al uw vastgoedwensen.`,
			footer_description: `{{company}} is uw betrouwbare partner voor al uw vastgoedbehoeften. Met jarenlange ervaring en een uitgebreid netwerk bied ik deskundige begeleiding bij aan- en verkoop, taxaties en vastgoedtransacties. Mijn persoonlijke aanpak en toewijding zorgen ervoor dat u altijd kunt rekenen op professionele service en maatwerkoplossingen. Neem vandaag nog contact met mij op en ontdek hoe ik u kan helpen bij het realiseren van uw vastgoeddoelen.`,
			footer_copyright: '{{company}}. Alle rechten voorbehouden.',

			error_sending_message: 'Fout opgetreden van bericht.',
			error_sending_description: 'Fout opgetreden bij het verzenden van bericht.',

			successfully_sent_message: 'Bericht succesvol verzonden.',
			successfully_sent_message_description: 'Uw bericht is verzonden. Bedankt voor het contact opnemen!',

			loading_sending_message: 'Bericht wordt verzonden..',
			loading_sending_message_description: 'Uw bericht wordt verzonden, even geduld aub...', //in other language Please wait while we process your submission

			something_went_wrong: 'Er is iets misgegaan.',
			unexpected_happened: 'Er is een onverwachte fout opgetreden. Probeer het later opnieuw.',

			page_not_found: 'Pagina niet gevonden',
			page_not_found_description: `De pagina die u zoekt bestaat niet of is verplaatst. Ga terug naar de homepagina of neem contact met ons op voor hulp.`,
			go_back_home: 'Ga naar homepagina',

			aria_logo: 'Logo van de website',
			alt_error_bug_picture: 'Fout bug afbeelding',
			alt_clouds_picture: 'afbeelding van wolken',
			alt_houses_picture: 'afbeelding van huizen',
			alt_close_button: 'sluit knop',
			alt_picture_of_the_makelaar: 'afbeelding van de makelaar',
			alt_shape_behind_makelaar: 'vorm achter de makelaar afbeelding',
			alt_contact_us_picture: 'Neem contact met ons op afbeelding',
			alt_sofa_picture: 'Bank afbeelding',
			alt_light_bolb: 'Licht bol afbeelding',
		},
	},
	en: {
		translation: {
			general: 'General',
			home: 'Home',
			about: 'About',
			contact: 'Contact',
			projects: 'Projects',
			blog: 'Blog',
			socials: 'Socials',
			sitemap: 'Sitemap',
			language: 'Language',
			contact_me: 'Get in touch with me',
			vetrouwde_makelaar: 'Your Trusted \nReal Estate Agent.',

			opening_hours: 'Opening Hours',
			monday: 'Mon',
			friday: 'Fri',

			contact_us_form: 'Contact Form',
			contact_us_description: `Fill in the form below to send us a message.
			We will get back to you as soon as possible.`,

			first_name: 'First Name',
			required_first_name: 'Please enter your first name.',

			last_name: 'Last Name',
			required_last_name: 'Please enter your last name.',

			full_name: 'Full Name',
			required_full_name: 'Please enter your full name.',

			email_address: 'Email Address',
			required_email_address: 'Please enter your email address.',

			phone_number: 'Phone Number',
			required_phone_number: 'Please enter your phone number.',

			your_message: 'Your Message',
			required_your_message: 'Please enter your message.',

			send_message: 'Send Message',
			form_success_message: 'Thank you for your message! We will get back to you as soon as possible.',
			form_error_message: 'An error occurred while sending your message. Please try again later.',

			success: 'Success',
			error: 'Error',
			required_field: 'This field is required.',

			mijn_naam: 'My name is',
			oprichter_van: 'Founder and owner of',
			sinds_2026_actief: `Since 2026, I have been active in real estate and have built an extensive network within
			the real estate sector over the years.
			Thanks to my experience and commitment, I have successfully mediated various major projects and guided many clients through buying and
			selling their homes.`,

			kwaliteit: 'Quality',
			transparantie: 'Transparency',
			persoonlijke_service: 'Personal Service',
			bij_mij_staat: 'With me,', // in english should be "come first." and any other language accordingly
			bij_mij_staat2: 'come first.',
			ik_zorg_ervoor: `I ensure that the property offer is always up-to-date and that every client can count on expert advice and professional support throughout the entire process from the first meeting to the transfer at the notary.
			Whether it is a purchase, sale, appraisals, or guidance in real estate transactions, I offer a comprehensive service tailored to your needs and situation.`,

			years_of_experience: 'Years of Experience',
			rented_properties: 'Rental Properties',
			satisfied_clients: 'Satisfied Clients',

			project: 'Project',
			project_urban_loft_title: 'Urban Loft Collective',
			project_urban_loft_description: `A flexible redevelopment concept for an urban building with bright workspaces, shared amenities, and room for local businesses. This sample case shows how an existing property can be presented around potential, phasing, and future use.`,
			project_canal_view_title: 'Canal View Residences',
			project_canal_view_description: `A residential showcase project with spacious apartments, warm materials, and a calm layout. The case is written as neutral template content and can be adapted easily for sales, rentals, or property development.`,
			project_greenfield_title: 'Greenfield Retreat',
			project_greenfield_description: `A leisure real estate concept focused on nature, guest experience, and long-term value. This demo description helps visitors understand what makes the project attractive without referring to a real location or client.`,

			send_inquiry: 'Send Your Inquiry',
			get_in_touch: 'Get in Touch',
			get_in_touch_description: `Do you have questions or want more information about my services? Feel free to contact me via the form below or call me directly. I am ready to help you with all your real estate needs.`,
			footer_description: `{{company}} is your trusted partner for all your real estate needs. With years of experience and an extensive network, I offer expert guidance in buying and selling, valuations, and real estate transactions. My personal approach and commitment ensure that you can always count on professional service and tailor-made solutions. Contact me today and discover how I can help you achieve your real estate goals.`,
			footer_copyright: '{{company}}. All rights reserved.',

			error_sending_message: 'Error sending message.',
			error_sending_description: 'An error occurred while sending your message.',

			successfully_sent_message: 'Message sent successfully.',
			successfully_sent_message_description: 'Your message has been sent. Thank you for reaching out!',

			loading_sending_message: 'Sending message..',
			loading_sending_message_description: 'Your message is being sent, please wait...', //in other language Please wait while we process your submission

			something_went_wrong: 'Something went wrong.',
			unexpected_happened: 'An unexpected error occurred. Please try again later.',

			page_not_found: 'Page Not Found',
			page_not_found_description: `The page you are looking for does not exist or has been moved. Go back to the home page or contact us for assistance.`,
			go_back_home: 'Go to Home Page',

			aria_logo: 'Website logo',
			alt_error_bug_picture: 'Error bug image',
			alt_clouds_picture: 'Image of clouds',
			alt_houses_picture: 'Image of houses',
			alt_close_button: 'Close button',
			alt_picture_of_the_makelaar: 'Image of the real estate agent',
			alt_shape_behind_makelaar: 'Shape behind the agent image',
			alt_contact_us_picture: 'Contact us image',
			alt_sofa_picture: 'Sofa image',
			alt_light_bolb: 'Light bulb image',
		},
	},
	es: {
		translation: {
			general: 'General',
			home: 'Inicio',
			about: 'Acerca de',
			contact: 'Contacto',
			projects: 'Proyectos',
			blog: 'Blog',
			socials: 'Redes Sociales',
			sitemap: 'Mapa del sitio',
			language: 'Idioma',
			contact_me: 'Ponte en contacto conmigo',
			vetrouwde_makelaar: 'Tu Agente Inmobiliario \nde Confianza.',

			opening_hours: 'Horario de Atención',
			monday: 'Lun',
			friday: 'Vie',

			contact_us_form: 'Formulario de Contacto',
			contact_us_description: `Completa el formulario a continuación para enviarnos un mensaje.
			Nos pondremos en contacto contigo lo antes posible.`,

			first_name: 'Nombre',
			required_first_name: 'Por favor, ingresa tu nombre.',

			last_name: 'Apellido',
			required_last_name: 'Por favor, ingresa tu apellido.',

			full_name: 'Nombre Completo',
			required_full_name: 'Por favor, ingresa tu nombre completo.',

			email_address: 'Correo Electrónico',
			required_email_address: 'Por favor, ingresa tu correo electrónico.',

			phone_number: 'Número de Teléfono',
			required_phone_number: 'Por favor, ingresa tu número de teléfono.',

			your_message: 'Tu Mensaje',
			required_your_message: 'Por favor, ingresa tu mensaje.',

			send_message: 'Enviar Mensaje',
			form_success_message: '¡Gracias por tu mensaje! Nos pondremos en contacto contigo lo antes posible.',
			form_error_message: 'Ocurrió un error al enviar tu mensaje. Por favor, intenta más tarde.',

			success: 'Éxito',
			error: 'Error',
			required_field: 'Este campo es obligatorio.',

			mijn_naam: 'Mi nombre es',
			oprichter_van: 'Fundador y propietario de',
			sinds_2026_actief: `Desde 2026, he estado activo en el sector inmobiliario y he construido una red extensa dentro
			del sector inmobiliario a lo largo de los años.
			Gracias a mi experiencia y compromiso, he mediado exitosamente en varios proyectos importantes y he guiado a muchos clientes en la compra y
			venta de sus propiedades.`,

			kwaliteit: 'Calidad',
			transparantie: 'Transparencia',
			persoonlijke_service: 'Servicio Personal',
			bij_mij_staat: 'Conmigo es', // in spanish 'Conmigo es',
			bij_mij_staat2: 'lo primero.',
			ik_zorg_ervoor: `Me aseguro de que la oferta de propiedades siempre esté actualizada y que cada cliente pueda contar con asesoramiento experto y apoyo profesional en todo el proceso desde el primer encuentro hasta la transferencia en notaría.
			Ya sea una compra, venta, tasaciones o guía en transacciones inmobiliarias, ofrezco un servicio integral adaptado a tus necesidades y situación.`,

			years_of_experience: 'Años de Experiencia',
			rented_properties: 'Propiedades en Alquiler',
			satisfied_clients: 'Clientes Satisfechos',

			project: 'Proyecto',
			project_urban_loft_title: 'Colectivo Loft Urbano',
			project_urban_loft_description: `Un concepto flexible de remodelacion para un edificio urbano con espacios de trabajo luminosos, servicios compartidos y lugar para negocios locales. Este caso de ejemplo muestra como presentar una propiedad existente por su potencial, fases y uso futuro.`,
			project_canal_view_title: 'Residencias Vista Canal',
			project_canal_view_description: `Un proyecto residencial de muestra con apartamentos amplios, materiales calidos y una distribucion tranquila. El texto esta escrito como contenido neutro de plantilla y se puede adaptar para venta, alquiler o desarrollo inmobiliario.`,
			project_greenfield_title: 'Retiro Greenfield',
			project_greenfield_description: `Un concepto inmobiliario recreativo centrado en naturaleza, experiencia del visitante y valor a largo plazo. Esta descripcion demo ayuda a explicar el atractivo del proyecto sin mencionar una ubicacion o cliente real.`,

			send_inquiry: 'Envía Tu Consulta',
			get_in_touch: 'Ponte en Contacto',
			get_in_touch_description: `¿Tienes preguntas o deseas más información sobre mis servicios? Siéntete libre de contactarme a través del formulario a continuación o llámame directamente. Estoy listo para ayudarte con todas tus necesidades inmobiliarias.`,
			footer_description: `{{company}} es tu socio de confianza para todas tus necesidades inmobiliarias. Con años de experiencia y una red extensa, ofrezco orientación experta en compra y venta, valuaciones y transacciones inmobiliarias. Mi enfoque personal y compromiso aseguran que siempre puedas contar con servicio profesional y soluciones personalizadas. Contáctame hoy y descubre cómo puedo ayudarte a lograr tus objetivos inmobiliarios.`,
			footer_copyright: '{{company}}. Todos los derechos reservados.',

			error_sending_message: 'Error al enviar el mensaje.',
			error_sending_description: 'Ocurrió un error al enviar tu mensaje.',

			successfully_sent_message: 'Mensaje enviado exitosamente.',
			successfully_sent_message_description: '¡Tu mensaje ha sido enviado. Gracias por contactarnos!',

			loading_sending_message: 'Enviando mensaje..',
			loading_sending_message_description: 'Tu mensaje está siendo enviado, por favor espera...', //in other language Please wait while we process your submission

			something_went_wrong: 'Algo salió mal.',
			unexpected_happened: 'Ocurrió un error inesperado. Por favor, intenta más tarde.',

			page_not_found: 'Página No Encontrada',
			page_not_found_description: `La página que buscas no existe o ha sido movida. Regresa a la página de inicio o contáctanos para obtener ayuda.`,
			go_back_home: 'Ir a la Página de Inicio',

			aria_logo: 'Logo del sitio web',
			alt_error_bug_picture: 'Imagen de error',
			alt_clouds_picture: 'Imagen de nubes',
			alt_houses_picture: 'Imagen de casas',
			alt_close_button: 'Botón cerrar',
			alt_picture_of_the_makelaar: 'Imagen del agente inmobiliario',
			alt_shape_behind_makelaar: 'Forma detrás de la imagen del agente',
			alt_contact_us_picture: 'Imagen de contáctanos',
			alt_sofa_picture: 'Imagen de sofá',
			alt_light_bolb: 'Imagen de bombilla',
		},
	},
	fr: {
		translation: {
			general: 'Général',
			home: 'Accueil',
			about: 'À Propos',
			contact: 'Contact',
			projects: 'Projets',
			blog: 'Blog',
			socials: 'Réseaux Sociaux',
			sitemap: 'Plan du Site',
			language: 'Langue',
			contact_me: 'Mettez-vous en contact avec moi',
			vetrouwde_makelaar: 'Votre Agent Immobilier \nde Confiance.',

			opening_hours: "Heures d'Ouverture",
			monday: 'Lun',
			friday: 'Ven',

			contact_us_form: 'Formulaire de Contact',
			contact_us_description: `Remplissez le formulaire ci-dessous pour nous envoyer un message.
			Nous vous répondrons dès que possible.`,

			first_name: 'Prénom',
			required_first_name: 'Veuillez entrer votre prénom.',

			last_name: 'Nom de Famille',
			required_last_name: 'Veuillez entrer votre nom de famille.',

			full_name: 'Nom Complet',
			required_full_name: 'Veuillez entrer votre nom complet.',

			email_address: 'Adresse E-mail',
			required_email_address: 'Veuillez entrer votre adresse e-mail.',

			phone_number: 'Numéro de Téléphone',
			required_phone_number: 'Veuillez entrer votre numéro de téléphone.',

			your_message: 'Votre Message',
			required_your_message: 'Veuillez entrer votre message.',

			send_message: 'Envoyer le Message',
			form_success_message: 'Merci pour votre message ! Nous vous répondrons dès que possible.',
			form_error_message: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard.",

			success: 'Succès',
			error: 'Erreur',
			required_field: 'Ce champ est obligatoire.',

			mijn_naam: 'Mon nom est',
			oprichter_van: 'Fondateur et propriétaire de',
			sinds_2026_actief: `Depuis 2026, j'exerce dans le secteur immobilier et j'ai constitué un large réseau au cours des dernières années dans
			le secteur immobilier.
			Grâce à mon expérience et à mon engagement, j'ai réussi à intervenir dans divers grands projets et j'ai accompagné de nombreux clients dans l'achat et
			la vente de leurs propriétés.`,

			kwaliteit: 'Qualité',
			transparantie: 'Transparence',
			persoonlijke_service: 'Service Personnel',
			bij_mij_staat: 'Chez moi, Le', // in english should be "come first." and any other language accordingly
			bij_mij_staat2: 'vient en premier.',
			ik_zorg_ervoor: `Je m'assure que l'offre immobilière est toujours à jour et que chaque client peut compter sur des conseils d'experts et un soutien professionnel tout au long du processus de la première rencontre jusqu'à la signature chez le notaire.
			Qu'il s'agisse d'un achat, d'une vente, d'évaluations ou d'orientation dans les transactions immobilières, j'offre un service complet adapté à vos besoins et à votre situation.`,

			years_of_experience: "Années d'Expérience",
			rented_properties: 'Propriétés en Location',
			satisfied_clients: 'Clients Satisfaits',

			project: 'Projet',
			project_urban_loft_title: 'Collectif Loft Urbain',
			project_urban_loft_description: `Un concept flexible de redeveloppement pour un immeuble urbain avec des espaces de travail lumineux, des services partages et de la place pour des entreprises locales. Cet exemple montre comment presenter un bien existant par son potentiel, ses phases et son usage futur.`,
			project_canal_view_title: 'Residences Vue Canal',
			project_canal_view_description: `Un projet residentiel de demonstration avec des appartements spacieux, des materiaux chaleureux et une organisation claire. Le texte est neutre pour une template et peut etre adapte a la vente, a la location ou au developpement immobilier.`,
			project_greenfield_title: 'Retraite Greenfield',
			project_greenfield_description: `Un concept immobilier de loisirs axe sur la nature, l experience des visiteurs et la valeur a long terme. Cette description demo explique rapidement l interet du projet sans citer de lieu ou de client reel.`,

			send_inquiry: 'Envoyer Votre Demande',
			get_in_touch: 'Contactez-Nous',
			get_in_touch_description: `Avez-vous des questions ou souhaitez-vous plus d'informations sur mes services ? N'hésitez pas à me contacter via le formulaire ci-dessous ou appelez-moi directement. Je suis prêt à vous aider avec tous vos besoins immobiliers.`,
			footer_description: `{{company}} est votre partenaire de confiance pour tous vos besoins immobiliers. Avec des années d'expérience et un vaste réseau, j'offre des conseils d'experts en achat et vente, évaluations et transactions immobilières. Mon approche personnelle et mon engagement garantissent que vous pouvez toujours compter sur un service professionnel et des solutions sur mesure. Contactez-moi dès aujourd'hui et découvrez comment je peux vous aider à atteindre vos objectifs immobiliers.`,
			footer_copyright: '{{company}}. Tous les droits réservés.',

			error_sending_message: "Erreur lors de l'envoi du message.",
			error_sending_description: "Une erreur s'est produite lors de l'envoi de votre message.",

			successfully_sent_message: 'Message envoyé avec succès.',
			successfully_sent_message_description: 'Votre message a été envoyé. Merci de nous avoir contactés !',

			loading_sending_message: 'Envoi du message..',
			loading_sending_message_description: "Votre message est en cours d'envoi, veuillez patienter...", //in other language Please wait while we process your submission

			something_went_wrong: "Quelque chose s'est mal passé.",
			unexpected_happened: "Une erreur inattendue s'est produite. Veuillez réessayer plus tard.",

			page_not_found: 'Page Non Trouvée',
			page_not_found_description: `La page que vous recherchez n'existe pas ou a été déplacée. Retournez à la page d'accueil ou contactez-nous pour obtenir de l'aide.`,
			go_back_home: "Aller à la Page d'Accueil",

			aria_logo: 'Logo du site web',
			alt_error_bug_picture: "Image d'erreur",
			alt_clouds_picture: 'Image de nuages',
			alt_houses_picture: 'Image de maisons',
			alt_close_button: 'Bouton fermer',
			alt_picture_of_the_makelaar: "Image de l'agent immobilier",
			alt_shape_behind_makelaar: "Forme derrière l'image de l'agent",
			alt_contact_us_picture: 'Image Contactez-nous',
			alt_sofa_picture: 'Image de canapé',
			alt_light_bolb: "Image d'ampoule",
		},
	},
} as const;

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: 'nl', // if you're using a language detector, do not define the lng option
		fallbackLng: 'nl',
		debug: false,
		interpolation: { escapeValue: false },
	})
	.then(null);

export type LocalizationResources = (typeof resources)['nl']; //keyof typeof resources['nl']['translation'];
export type LocalizationTexts = keyof (typeof resources)['nl']['translation'];
export type SupportedLanguages = keyof typeof resources;
export { useTranslation };
