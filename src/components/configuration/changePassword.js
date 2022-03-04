import React, { useState, useContext } from 'react';
import apiInstance from '../../services/apiServices';
import Loader from 'react-loader-spinner';
import helpers from '../../helpers';
import { UserContext } from '../../contexts/UserContext';

function ChangePassword(props) {
	const userContext = useContext(UserContext);
	const [ username, setUsername ] = useState('');
	const [ currentPass, setCurrentPass ] = useState('');
	const [ newPass, setNewPass ] = useState('');
	const [ repeatPass, setRepeatPass ] = useState('');
	const [ loader, setLoader ] = useState(false);

	const [ CP, setCP ] = useState(false);
	const [ NP, setNP ] = useState(false);
	const [ RP, setRP ] = useState(false);

	const changeAction = () => {
		setLoader(true);
		const formdata = new FormData();
		formdata.append('currentPass', currentPass);
		formdata.append('newPass', newPass);
		formdata.append('repeatPass', repeatPass);

		apiInstance
			.post('/changePassword', formdata)
			.then((response) => {
				const respText = response.data.response.status;
				if (respText === 'Password successfully changed') {
					userContext.renderToast({ message: respText });
				} else {
					userContext.renderToast({
						type: 'error',
						icon: 'fa fa-times-circle',
						message: respText
					});
				}
			})
			.catch((error) => console.error(error))
			.finally(() => setLoader(false));
	};
  // todo: need to add user name along with change password
	return (
		<div>
			{!loader ? (
				<div className="row">
					<div className="col-lg-12 py-2">
						<div class="form-floating">
							<input
								onChange={(e) => setUsername(e.target.value)}
								type="text"
								id="username"
								className="form-control"
							/>
							<label htmlFor="username">User name</label>
						</div>
					</div>
					<div className="col-lg-12 py-2">
						<div className="form-floating passwordArea">
							<input
								onChange={(e) => {
									setCurrentPass(e.target.value);
									setCP(true);
								}}
								type="password"
								className="form-control"
								placeholder="Current Password"
								onBlur={(e) => setCP(true)}
								id="currentPassword"
							/>
							{CP && <i className={`fa fa-${currentPass.length > 0 ? 'check good' : 'times bad'}`} />}
							<label htmlFor="currentPassword">Current Password</label>
						</div>
					</div>
					<div className="col-lg-12  py-2">
						<div className="form-floating passwordArea">
							<input
								onChange={(e) => {
									setNewPass(e.target.value);
									setNP(true);
								}}
								type="password"
								className="form-control"
								placeholder="New Password"
								onBlur={(e) => setNP(true)}
								id="newPassword"
							/>
							{NP && <i className={`fa fa-${newPass.length > 0 ? 'check good' : 'times bad'}`} />}
							<label htmlFor="newPassword">New Password</label>
						</div>
					</div>
					<div className="col-lg-12 py-2">
						<div className="form-floating passwordArea">
							<input
								onChange={(e) => {
									setRepeatPass(e.target.value);
									setRP(true);
								}}
								type="password"
								className="form-control"
								placeholder="Repeat Password"
								onBlur={(e) => setRP(true)}
								id="repeatPassword"
							/>
							{RP && (
								<i
									className={`fa fa-${repeatPass.length > 0 && repeatPass === newPass
										? 'check good'
										: 'times bad'}`}
								/>
							)}
							<label htmlFor="repeatPassword">Re-type Password</label>
						</div>
					</div>
					<div className="col-lg-12 py-2">
						<div className="d-grid">
							<button
								disabled={newPass.length === 0 && repeatPass.length === 0 && newPass !== repeatPass}
								onClick={() => changeAction()}
								className="btn btn-bni"
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className="login-loader">
					<Loader
						type={helpers.LoadRandomSpinnerIcon()}
						color={helpers.fluorescentColor}
						height={100}
						width={100}
					/>
				</div>
			)}
		</div>
	);
}

export default ChangePassword;
