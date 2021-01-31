import "./Community.css";

export const Community = () => {
	return (
		<div>
			<div className='media rounded-lg'>
				<img
					className='align-self-top mr-3'
					src='https://images.unsplash.com/photo-1566617947632-6198d642043c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cmFnZ2VkJTIwYW5pbWFsc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
					alt='...'
				></img>
				<div className='media-body'>
					<div className='username'>Username</div>
					<div className='date'>10/10/2020</div>
					<div className='title'>A Cry for help in my district</div>
					<div className='content'>
						<hr className='type_10'></hr>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
							has been the industry's standard dummy text ever since the 1500s{" "}
							<span>
								<a href=''>... Read More</a>
							</span>
						</p>

						<button className='btn btn-primary btn-lg'>
							<i className='fa fa-thumbs-up mr-2' aria-hidden='true'></i>
							Support
						</button>
						<button className='btn btn-danger btn-lg ml-3'>
							<i className='fa fa-flag mr-2' aria-hidden='true'></i>
							Report
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
