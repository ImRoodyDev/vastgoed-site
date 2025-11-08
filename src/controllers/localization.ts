import i18n from 'i18next';
import {initReactI18next, useTranslation} from 'react-i18next';

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
			sinds_2018_actief: `Sinds 2018 ben ik actief in de makelaardij en heb ik in de afgelopen jaren een breed netwerk opgebouwd binnen
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
			ibcc: `Volmerlaan 17 is een kantoorpand van 5.600 m², gelegen in Rijswijk en gebouwd in 1972. 
			 Het pand beschikt over energielabel C (Energie-index 1.29) en is momenteel in ontwikkeling.
			 Samen met de gemeente en lokale ondernemers werken we aan een nieuwe invulling van het gebouw, 
			 met ruimte voor flexibele kantoorruimtes, culturele activiteiten en maatschappelijke initiatieven. 
			 Dit project is nog in volle gang en biedt veel mogelijkheden voor samenwerking en creatieve ideeën.`,
			parlement_residences: `Samen met mijn netwerk heb ik een monumentaal pand in hartje Den Haag getransformeerd tot Parlement Residences: een stijlvol woongebouw met twaalf ruime, lichte appartementen.
			Ik heb bemiddeld bij de aankoop en financiering, en was verantwoordelijk voor het overleg met architecten en de gemeente. Onze aannemers hebben het pand met zorg verbouwd, met behoud van karakter en focus op modern wooncomfort.
			Momenteel werken we aan de realisatie van een privé spa als exclusieve toevoeging aan het project.
			Parlement Residences ligt op een unieke locatie vlak bij het Binnenhof en combineert historie met hoogwaardige afwerking en toekomstgericht wonen`,
			vakantiepark_zwartemeer: `Voor dit bijzondere project heb ik mogen bemiddelen bij de aankoop van Vakantiepark Zwartemeer, gelegen in het prachtige Emmen. Het park vormt een unieke locatie, omringd door natuur en rust, en biedt veel potentie voor verdere ontwikkeling en recreatieve mogelijkheden.
			Voor dit bijzondere project heb ik mogen bemiddelen bij de aankoop van Vakantiepark Zwartemeer, gelegen in het prachtige Emmen. Het park vormt een unieke locatie, omringd door natuur en rust, en biedt veel potentie voor verdere ontwikkeling en recreatieve mogelijkheden.
			Vanaf de eerste kennismaking tot aan de overdracht heb ik de aankoopbegeleiding volledig verzorgd. Daarbij lag de focus op het zorgvuldig beoordelen van de waarde, het voeren van onderhandelingen en het waarborgen van een soepel proces tot aan de notaris.
			Dit project illustreert waar Bridj Makelaardij voor staat: persoonlijke betrokkenheid, deskundig advies en resultaatgerichte bemiddeling. Dankzij nauwe samenwerking met de opdrachtgever en betrokken partijen is een solide basis gelegd voor de toekomst van dit veelbelovende vakantiepark.`,

			send_inquiry: 'Verstuur uw aanvraag',
			get_in_touch: 'Neem contact met mij',
			get_in_touch_description: `Heeft u vragen of wilt u meer informatie over mijn diensten? Neem gerust contact met mij op via onderstaand formulier of bel mij direct. Ik sta klaar om u te helpen bij al uw vastgoedwensen.`,
			footer_description: `Bridj Makelaardij is uw betrouwbare partner voor al uw vastgoedbehoeften. Met jarenlange ervaring en een uitgebreid netwerk bied ik deskundige begeleiding bij aan- en verkoop, taxaties en vastgoedtransacties. Mijn persoonlijke aanpak en toewijding zorgen ervoor dat u altijd kunt rekenen op professionele service en maatwerkoplossingen. Neem vandaag nog contact met mij op en ontdek hoe ik u kan helpen bij het realiseren van uw vastgoeddoelen.`,
			footer_copyright: 'Bridj Makelaardij. Alle rechten voorbehouden.',

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
			sinds_2018_actief: `Since 2018, I have been active in real estate and have built an extensive network within
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
			ibcc: `Volmerlaan 17 is an office building of 5,600 m², located in Rijswijk and built in 1972.
			 The building has an energy label C (Energy index 1.29) and is currently under development.
			 Together with the municipality and local entrepreneurs, we are working on a new use of the building,
			 with space for flexible office spaces, cultural activities, and social initiatives.
			 This project is still in progress and offers many opportunities for collaboration and creative ideas.`,
			parlement_residences: `Together with my network, I transformed a monumental building in the heart of The Hague into Parlement Residences: a stylish residential building with twelve spacious, bright apartments.
			I mediated in the purchase and financing, and was responsible for negotiations with architects and the municipality. Our contractors carefully renovated the building while preserving its character and focusing on modern living comfort.
			We are currently working on the realization of a private spa as an exclusive addition to the project.
			Parlement Residences is located in a unique location near the Binnenhof and combines history with high-quality finishes and forward-thinking living.`,
			vakantiepark_zwartemeer: `For this special project, I had the privilege of mediating the purchase of Vakantiepark Zwartemeer, located in beautiful Emmen. The park is a unique location surrounded by nature and tranquility, and offers great potential for further development and recreational opportunities.
			For this special project, I had the privilege of mediating the purchase of Vakantiepark Zwartemeer, located in beautiful Emmen. The park is a unique location surrounded by nature and tranquility, and offers great potential for further development and recreational opportunities.
			From the first meeting to the transfer, I took care of the entire purchase guidance. The focus was on carefully assessing the value, conducting negotiations, and ensuring a smooth process until the notary.
			This project illustrates what Bridj Real Estate stands for: personal involvement, expert advice, and results-oriented mediation. Thanks to close cooperation with the client and involved parties, a solid foundation has been laid for the future of this promising holiday park.`,

			send_inquiry: 'Send Your Inquiry',
			get_in_touch: 'Get in Touch',
			get_in_touch_description: `Do you have questions or want more information about my services? Feel free to contact me via the form below or call me directly. I am ready to help you with all your real estate needs.`,
			footer_description: `Bridj Real Estate is your trusted partner for all your real estate needs. With years of experience and an extensive network, I offer expert guidance in buying and selling, valuations, and real estate transactions. My personal approach and commitment ensure that you can always count on professional service and tailor-made solutions. Contact me today and discover how I can help you achieve your real estate goals.`,
			footer_copyright: 'Bridj Real Estate. All rights reserved.',

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
			sinds_2018_actief: `Desde 2018, he estado activo en el sector inmobiliario y he construido una red extensa dentro
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
			ibcc: `Volmerlaan 17 es un edificio de oficinas de 5.600 m², ubicado en Rijswijk y construido en 1972.
			 El edificio tiene una etiqueta energética C (índice de energía 1.29) y actualmente está en desarrollo.
			 Junto con el municipio y emprendedores locales, estamos trabajando en un nuevo uso del edificio,
			 con espacio para oficinas flexibles, actividades culturales e iniciativas sociales.
			 Este proyecto aún está en progreso y ofrece muchas oportunidades para la colaboración e ideas creativas.`,
			parlement_residences: `Junto con mi red, transformé un edificio monumental en el corazón de La Haya en Parlement Residences: un edificio residencial elegante con doce apartamentos espaciosos y luminosos.
			Medié en la compra y financiamiento, y fui responsable de las negociaciones con arquitectos y el municipio. Nuestros contratistas renovaron cuidadosamente el edificio mientras preservaban su carácter y enfocándose en la comodidad moderna de la vivienda.
			Actualmente estamos trabajando en la realización de un spa privado como adición exclusiva al proyecto.
			Parlement Residences se encuentra en una ubicación única cerca del Binnenhof y combina historia con acabados de alta calidad y vivienda de mentalidad futura.`,
			vakantiepark_zwartemeer: `Para este proyecto especial, tuve el privilegio de mediar en la compra de Vakantiepark Zwartemeer, ubicado en el hermoso Emmen. El parque es una ubicación única rodeada de naturaleza y tranquilidad, y ofrece gran potencial para desarrollo adicional y oportunidades recreativas.
			Para este proyecto especial, tuve el privilegio de mediar en la compra de Vakantiepark Zwartemeer, ubicado en el hermoso Emmen. El parque es una ubicación única rodeada de naturaleza y tranquilidad, y ofrece gran potencial para desarrollo adicional y oportunidades recreativas.
			Desde el primer encuentro hasta la transferencia, me encargué de toda la guía de compra. El enfoque estuvo en evaluar cuidadosamente el valor, conducir negociaciones y garantizar un proceso sin problemas hasta la notaría.
			Este proyecto ilustra lo que representa Bridj Inmobiliaria: involucramiento personal, asesoramiento experto y mediación orientada a resultados. Gracias a la estrecha cooperación con el cliente y las partes involucradas, se ha sentado una base sólida para el futuro de este prometedor parque vacacional.`,

			send_inquiry: 'Envía Tu Consulta',
			get_in_touch: 'Ponte en Contacto',
			get_in_touch_description: `¿Tienes preguntas o deseas más información sobre mis servicios? Siéntete libre de contactarme a través del formulario a continuación o llámame directamente. Estoy listo para ayudarte con todas tus necesidades inmobiliarias.`,
			footer_description: `Bridj Inmobiliaria es tu socio de confianza para todas tus necesidades inmobiliarias. Con años de experiencia y una red extensa, ofrezco orientación experta en compra y venta, valuaciones y transacciones inmobiliarias. Mi enfoque personal y compromiso aseguran que siempre puedas contar con servicio profesional y soluciones personalizadas. Contáctame hoy y descubre cómo puedo ayudarte a lograr tus objetivos inmobiliarios.`,
			footer_copyright: 'Bridj Inmobiliaria. Todos los derechos reservados.',

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

			opening_hours: 'Heures d\'Ouverture',
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
			form_error_message: 'Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer plus tard.',

			success: 'Succès',
			error: 'Erreur',
			required_field: 'Ce champ est obligatoire.',

			mijn_naam: 'Mon nom est',
			oprichter_van: 'Fondateur et propriétaire de',
			sinds_2018_actief: `Depuis 2018, j'exerce dans le secteur immobilier et j'ai constitué un large réseau au cours des dernières années dans
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

			years_of_experience: 'Années d\'Expérience',
			rented_properties: 'Propriétés en Location',
			satisfied_clients: 'Clients Satisfaits',

			project: 'Projet',
			ibcc: `Volmerlaan 17 est un bâtiment de bureaux de 5 600 m², situé à Rijswijk et construit en 1972.
			 Le bâtiment possède un label énergétique C (indice énergétique 1,29) et est actuellement en développement.
			 Ensemble avec la commune et les entrepreneurs locaux, nous travaillons à une nouvelle utilisation du bâtiment,
			 avec de l'espace pour des bureaux flexibles, des activités culturelles et des initiatives sociales.
			 Ce projet est encore en cours et offre de nombreuses possibilités de collaboration et d'idées créatives.`,
			parlement_residences: `Avec mon réseau, j'ai transformé un bâtiment monumental au cœur de La Haye en Parlement Residences : un immeuble résidentiel élégant avec douze appartements spacieux et lumineux.
			J'ai participé à l'achat et au financement, et j'ai été responsable des négociations avec les architectes et la commune. Nos entrepreneurs ont soigneusement rénové le bâtiment tout en préservant son caractère et en se concentrant sur le confort moderne de la vie.
			Nous travaillons actuellement à la réalisation d'un spa privé comme ajout exclusif au projet.
			Parlement Residences est situé dans un emplacement unique près du Binnenhof et combine l'histoire avec des finitions de haute qualité et une vie tournée vers l'avenir.`,
			vakantiepark_zwartemeer: `Pour ce projet spécial, j'ai eu le privilège de participer à l'achat de Vakantiepark Zwartemeer, situé dans le magnifique Emmen. Le parc est un emplacement unique entouré par la nature et la tranquillité, et offre un grand potentiel pour un développement ultérieur et des possibilités récréatives.
			Pour ce projet spécial, j'ai eu le privilège de participer à l'achat de Vakantiepark Zwartemeer, situé dans le magnifique Emmen. Le parc est un emplacement unique entouré par la nature et la tranquillité, et offre un grand potentiel pour un développement ultérieur et des possibilités récréatives.
			De la première rencontre à la signature, j'ai géré l'ensemble du processus d'achat. L'accent a été mis sur l'évaluation prudente de la valeur, la conduite des négociations et la garantie d'un processus en douceur jusqu'au notaire.
			Ce projet illustre ce que représente Bridj Immobilier : engagement personnel, conseil d'expert et médiation orientée résultats. Grâce à une étroite coopération avec le client et les parties impliquées, une base solide a été établie pour l'avenir de ce parc de vacances prometteur.`,

			send_inquiry: 'Envoyer Votre Demande',
			get_in_touch: 'Contactez-Nous',
			get_in_touch_description: `Avez-vous des questions ou souhaitez-vous plus d'informations sur mes services ? N'hésitez pas à me contacter via le formulaire ci-dessous ou appelez-moi directement. Je suis prêt à vous aider avec tous vos besoins immobiliers.`,
			footer_description: `Bridj Immobilier est votre partenaire de confiance pour tous vos besoins immobiliers. Avec des années d'expérience et un vaste réseau, j'offre des conseils d'experts en achat et vente, évaluations et transactions immobilières. Mon approche personnelle et mon engagement garantissent que vous pouvez toujours compter sur un service professionnel et des solutions sur mesure. Contactez-moi dès aujourd'hui et découvrez comment je peux vous aider à atteindre vos objectifs immobiliers.`,
			footer_copyright: 'Bridj Immobilier. Tous les droits réservés.',

			error_sending_message: 'Erreur lors de l\'envoi du message.',
			error_sending_description: 'Une erreur s\'est produite lors de l\'envoi de votre message.',

			successfully_sent_message: 'Message envoyé avec succès.',
			successfully_sent_message_description: 'Votre message a été envoyé. Merci de nous avoir contactés !',

			loading_sending_message: 'Envoi du message..',
			loading_sending_message_description: 'Votre message est en cours d\'envoi, veuillez patienter...', //in other language Please wait while we process your submission

			something_went_wrong: 'Quelque chose s\'est mal passé.',
			unexpected_happened: 'Une erreur inattendue s\'est produite. Veuillez réessayer plus tard.',

			page_not_found: 'Page Non Trouvée',
			page_not_found_description: `La page que vous recherchez n'existe pas ou a été déplacée. Retournez à la page d'accueil ou contactez-nous pour obtenir de l'aide.`,
			go_back_home: 'Aller à la Page d\'Accueil',

			aria_logo: 'Logo du site web',
			alt_error_bug_picture: 'Image d\'erreur',
			alt_clouds_picture: 'Image de nuages',
			alt_houses_picture: 'Image de maisons',
			alt_close_button: 'Bouton fermer',
			alt_picture_of_the_makelaar: 'Image de l\'agent immobilier',
			alt_shape_behind_makelaar: 'Forme derrière l\'image de l\'agent',
			alt_contact_us_picture: 'Image Contactez-nous',
			alt_sofa_picture: 'Image de canapé',
			alt_light_bolb: 'Image d\'ampoule',
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
		interpolation: {escapeValue: false},
	})
	.then(null);

export type LocalizationResources = (typeof resources)['nl']; //keyof typeof resources['nl']['translation'];
export type LocalizationTexts = keyof (typeof resources)['nl']['translation'];
export type SupportedLanguages = keyof typeof resources;
export {useTranslation};
