import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SignedUrl from '../configuration/Gallery/SignedUrl';

const DesktopApp = (props) => {
	const { menus, ls, setToggleSideBar, toggleSideBar, appData } = props;

	const toggleStyle = () => {
		return toggleSideBar ? { display: 'none' } : { display: 'block' };
	};

	const isGoogleLogged =
		ls && ls.profileObj && ls.profileObj.googleId && ls.profileObj.googleId === appData.google_id;

	let googleMenu = isGoogleLogged ? menus : menus.filter((menu) => menu.showOnlyIfSuperUser === false);

	googleMenu = googleMenu.sort((a, b) => (a.label > b.label ? 1 : -1));

	return (
		<header className={`vertical-header hidden-print ${appData.webLayoutType} ${appData.webMenuType}`}>
			{appData.webMenuType === 'sideMenu' && (
				<i
					onClick={() => setToggleSideBar(!toggleSideBar)}
					className={`fa ${toggleSideBar
						? 'fa-angle-double-right dToggleIcon collapsed'
						: 'fa-angle-double-left dToggleIcon open'}`}
				/>
			)}
			<div style={toggleStyle()} className={`vertical-header-wrapper slideRight ${appData.webMenuType}`}>
				<nav className={`nav-menu ${appData.webMenuType}`}>
					<div className="nav-header">
						<span className="p-5">
							<SignedUrl type="image" appData={appData} unsignedUrl={appData.logoImg} className="brand" />
						</span>
					</div>
					<ul className={`header-menu ${appData.webMenuType}`}>
						{googleMenu.map((menu, i) => (
							<li key={i}>
								<Link to={menu.href}>
									{menu.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

DesktopApp.propTypes = {
	property: PropTypes.string
};
DesktopApp.defaultProps = {
	property: 'String name'
};

export default DesktopApp;
