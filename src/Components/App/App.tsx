import firebase from "firebase";
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { authProvider } from "../../firebaseApp";
import { Community } from "../Community";
import { Donate } from "../Donate";
import { Navbar } from "../Navbar";
import { Petify } from "../Petify";
import { Pets } from "../Pets";
import { PostForm } from "../PostForm";
import "./App.css";

export interface ICurrentUser {
	uid: string;
	name: string | null;
	photoURL: string | null;
	email: string | null;
}

export const UserCtx = React.createContext<ICurrentUser | null>(null);

export const App = () => {
	const [currentUser, setCurrentUser] = React.useState<ICurrentUser | null>(null);

	React.useEffect(() => {
		firebase.auth().onAuthStateChanged(user => {
			setCurrentUser(
				user === null
					? null
					: {
							uid: user.uid,
							name: user.displayName,
							email: user.email,
							photoURL: user.photoURL,
					  }
			);
		});
	}, []);

	const signIn = React.useCallback(() => {
		firebase.auth().signInWithPopup(authProvider);
	}, []);

	const signOut = React.useCallback(() => {
		firebase.auth().signOut();
	}, []);

	return (
		<div className='App'>
			<UserCtx.Provider value={currentUser}>
				<Navbar signIn={signIn} signOut={signOut} />
				<HashRouter>
					<Route exact path='/' component={Pets} />
					<Route exact path='/donate/:petId' component={Donate} />
					<Route exact path='/post' component={PostForm} />
					<Route exact path='/community' component={Community} />
					<Route exact path='/petify/:petType' component={Petify} />
				</HashRouter>
			</UserCtx.Provider>
		</div>
	);
};
