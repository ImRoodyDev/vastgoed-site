const config = {
	VERSION: '1.0.0',
	API: 'https://api.vastgoed.com',

	owner: 'John Doe',
	company: 'Jouw Vastgoed',
	location: 'Rotterdam, Nederland',
	WEB3FORMS_URL: 'https://api.web3forms.com/submit',
	WEB3FORMS_ACCESS_KEY: 'YOUR_ACCESS_KEY',

	email: 'info@vastgoed.com',
	phone: '00000000000',
	tiktok_url: 'https://www.tiktok.com/@vastgoed',
	whatsapp_url: 'https://wa.me/00000000000',

	gehuurd: 1000,
	projecten: 40,
	jarenErvaring: 15,
} as const;

export default config;
