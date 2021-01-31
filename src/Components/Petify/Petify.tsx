import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { fireDb } from "../../firebaseApp";
import "./Petify.css";
export interface IDBPet {
	id: string;
	name: string;
	age: number;
	gender: "MALE" | "FEMALE";
	breed: string;
	type: string;
	photoUrl: string;
}

export interface IPetifyParams {
	petType: string;
}

export const Petify: React.FC<RouteComponentProps<IPetifyParams>> = ({ match }) => {
	const [pets, setPets] = React.useState<IDBPet[]>([]);

	React.useEffect(() => {
		const petType = match.params.petType.toUpperCase();
		fireDb
			.collection("pets")
			.where("type", "==", petType)
			.get()
			.then(({ docs }) => {
				setPets(docs.map(doc => ({ id: doc.id, ...doc.data() } as IDBPet)));
			});
	}, [match.params.petType]);

	const petsMap = pets.map(({ id, photoUrl, name }) => (
		<div key={id} className='col-lg-4 col-md-5 col-sm-12 text-center'>
			<div className='xyz card text-white mb-3'>
				<img src={photoUrl} className='card-img-top' alt='...' />
				<div className='card-body'>
					<h1 className='card-title'>{name}</h1>
					<p className='abc'>
						Some quick example text to build on the card title and make up the bulk of the card's
						content.
					</p>
					<span className='btn btn-primary btn-lg'>
						<Link style={{ color: "white" }} to={`/donate/${id}`}>
							Go somewhere
						</Link>
					</span>
				</div>
			</div>
		</div>
	));

	return (
		<div>
			<div className='container'>
				<div className='row row-cols-3 mt-5'>{petsMap}</div>
			</div>
		</div>
	);
};
