import React, { useContext, useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import helpers from '../../helpers';
import AppContext from '../../contexts/AppContext';
import SignedUrl from '../configuration/Gallery/SignedUrl';

function About() {
	const [ appData ] = useContext(AppContext);
	const [ height, setHeight ] = useState('100%');
	const [ width, setWidth ] = useState('100%');
	document.title = `${appData.display_name} | About`;

	useEffect(() => {
		window.addEventListener('resize', (event) => {
			setHeight(document.body.clientHeight);
			setWidth(document.body.clientWidth);
		});
	}, []);

	return (
		<div className="video-section">
			<SignedUrl
				className="banner-img"
				optionalAttr={{ width, height }}
				type="image"
				appData={appData}
				unsignedUrl={'bharani.tech/avatar/20191006_161009.jpg'}
			/>
			<div className="home-message">
				<div className="nameHeading">
					<h3>{'Bharani Palani'}</h3>
					<div className="skillset">{'MERN | MEAN | XAMP Architect'}</div>
				</div>
			</div>
		</div>
	);
}

export default About;
