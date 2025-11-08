// External imports
import React from 'react';

// Internal imports
import Page from '../components/screens/Page';
import SectionHome from "../components/sections/SectionHome";
import SectionAbout from "../components/sections/SectionAbout";
import SectionProjects from "../components/sections/SectionProjects";
import SectionProgress from "../components/sections/SectionProgress";
import SectionContact from "../components/sections/SectionContact";

function HomePage() {

	return (
		<Page enableHeader enableFooter>
			<SectionHome/>
			<SectionAbout/>
			<SectionProgress/>
			<SectionProjects/>
			<SectionContact/>
		</Page>
	);
}

export default HomePage;
