export const Pets = (props: any) => {
	return (
		<div className='col-lg-4 col-md-5 col-sm-12 text-center'>
			<div className='card m-2'>
				<img src={props.link} className='card-img-top' alt='...' />
				<div className='card-body'>
					<h5 className='card-title'>{props.type}</h5>
					<p className='card-text'>
						Some quick example text to build on the card title and make up the bulk of the card's
						content.
					</p>
					<a href='' className='btn btn-primary btn-lg'>
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
