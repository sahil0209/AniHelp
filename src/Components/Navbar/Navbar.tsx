import React from "react";
import { UserCtx } from "../App";
import "./Navbar.css";

export interface INavbar {
	signIn(): void;
	signOut(): void;
}

export const Navbar: React.FC<INavbar> = ({ signIn, signOut }) => {
	const [isActive, setIsActive] = React.useState(false);
	const currentUser = React.useContext(UserCtx);

	React.useEffect(() => {
		window.addEventListener("scroll", () => setIsActive(window.scrollY > 0));
	}, []);

	return (
		<div>
			<header className={isActive ? "scrolling-active" : ""}>
				<div className='container'>
					<nav className='nav'>
						<i className='fa fa-paw'></i>
						<span className='logo'>AniHelp</span>
						<ul className='nav-list'>
							<li>
								<span className='nav-link'>Info</span>
							</li>
							<li>
								<span className='nav-link'>Community</span>
							</li>
							<li>
								<span className='nav-link'>Donate</span>
							</li>
							{currentUser !== null ? (
								<React.Fragment>
									<li>
										<span onClick={signOut} className='nav-link'>
											Sign Out
										</span>
									</li>
									<li>
										<span className='nav-link'>{currentUser.name}</span>
									</li>
								</React.Fragment>
							) : (
								<li>
									<span onClick={signIn} className='nav-link'>
										Sign In
									</span>
								</li>
							)}
						</ul>
					</nav>
				</div>
			</header>
		</div>
	);
};
