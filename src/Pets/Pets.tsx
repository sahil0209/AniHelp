import { petType } from "../App";

export interface IPets {
	pets: petType[];
}

export const Pets: React.FC<IPets> = ({ pets }) => {
	return (
		<div className='container'>
			<div className='row row-cols-3 mt-5'>
				{pets.map((pet, idx) => (
					<div key={idx} className='col-lg-4 col-md-5 col-sm-12 text-center'>
						<div className='card m-2'>
							<img src={pet.link} className='card-img-top' alt='...' />
							<div className='card-body'>
								<h5 className='card-title'>{pet.type}</h5>
								<p className='card-text'>
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</p>
								<span className='btn btn-primary btn-lg'>Go somewhere</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
