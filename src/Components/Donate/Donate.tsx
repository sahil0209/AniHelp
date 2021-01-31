import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { fireDb } from "../../firebaseApp";
import { UserCtx } from "../App";
import { IDBPet } from "../Petify";
import "./Donate.css";

export interface IDonateParams {
	petId: string;
}

export type donationDuration = "1 M" | "2 M" | "6 M" | "1 Y";

export const Donate: React.FC<RouteComponentProps<IDonateParams>> = ({ match, history }) => {
	const [error, setError] = React.useState(false);
	const [loading, setLoading] = React.useState(true);
	const [pet, setPet] = React.useState<IDBPet | null>(null);
	const [duration, setDuration] = React.useState<donationDuration>("1 M");
	const currentUser = React.useContext(UserCtx);

	React.useEffect(() => {
		const petId = match.params.petId;
		if (currentUser === null) history.push("/");
		setLoading(true);
		fireDb
			.collection("pets")
			.doc(petId)
			.get()
			.then(doc => {
				setPet(doc.exists ? ({ id: doc.id, ...doc.data() } as IDBPet) : null);
				setError(!doc.exists);
				setLoading(false);
			});
	}, [match.params.petId]);

	const changeDuration = React.useCallback(event => {
		setDuration(event.currentTarget.value as donationDuration);
	}, []);

	const submitDonation = React.useCallback(() => {
		fireDb
			.collection("donations")
			.add({ petId: match.params.petId, userId: currentUser!.uid, duration })
			.then(() => {
				history.push("/");
			});
	}, []);

	if (error) return null;
	if (loading) return <div>Loading</div>;

	return (
		<div className='main m-auto'>
			<div className='pet-info'>
				<div className='petImage'>
					<img alt='' className='mb-4' src={pet!.photoUrl}></img>
				</div>
				<div className='panel-heading'>
					<p>
						<strong>Name:</strong>
						{pet!.name}
					</p>
				</div>
				<div className='panel-body'>
					<p>
						<strong>Age:</strong>
						{pet!.age}
					</p>
					<p>
						<strong>Breed:</strong>
						{pet!.breed}
					</p>
				</div>
			</div>
			<hr></hr>
			<form>
				<div className='payment-input'>
					<div className='duration'>
						<p>
							<strong>Select Duration</strong>
						</p>
						<select onChange={changeDuration}>
							<option value='1 M'>1 month</option>
							<option value='2 M'>2 months</option>
							<option value='6 M'>6 months</option>
							<option value='1 Y'>1 year</option>
						</select>
					</div>
					<button onClick={submitDonation}>Submit</button>
				</div>
			</form>
		</div>
	);
};
