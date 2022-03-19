import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignedUrl from '../configuration/Gallery/SignedUrl';
import { UserContext } from "../../contexts/UserContext";

const MobileApp = (props) => {
	const { menu, onNavBarToggle, navBarExpanded, appData } = props;
	const userContext = useContext(UserContext);

	return (
		<div className="mobile-menu">
			<Navbar style={{top: "50px"}} className={`py-0 ps-2 pe-3 ${userContext.userData.theme === 'dark' ? 'bg-dark' : 'bg-light'}`} fixed={'top'} onToggle={onNavBarToggle} expanded={navBarExpanded} expand="lg">
				<Navbar.Brand className="navbar-brand pt-2">
					<SignedUrl type="image" appData={appData} unsignedUrl={appData.logoImg} className="brand img-fluid" />
				</Navbar.Brand>
				<Navbar.Toggle style={{boxShadow: "none"}} className='p-0 pe-1 fs-2 btn text-secondary border-1' aria-controls="basic-navbar-nav" bsPrefix="navbar-toggle">
					<i className={`fa fa-bars icon-bni`} />
				</Navbar.Toggle>
				<Navbar.Collapse>
					<ul className="header-menu">
						{menu.map((menu, i) => (
							<li key={i}>
								<Link
									className={userContext.userData.theme === 'dark' ? 'link-light' : 'link-dark'}
									onClick={onNavBarToggle}
									to={menu.href}
								>
									{menu.label}
								</Link>
							</li>
						))}
					</ul>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

MobileApp.propTypes = {
	property: PropTypes.string
};
MobileApp.defaultProps = {
	property: 'String name'
};

export default MobileApp;
