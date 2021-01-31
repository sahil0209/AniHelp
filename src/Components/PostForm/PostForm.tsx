import "./PostForm.css";

export const PostForm = () => {
	return (
		<div>
			<div className='main'>
				<h2>New Post: </h2>
				<hr></hr>
				<div className='Input'>
					<p>Title:</p>
					<p>
						<input type='text'></input>
					</p>
					<p>Content: </p>
					<p>
						<textarea></textarea>
					</p>
					<p>
						<button>Post</button>
					</p>
				</div>
			</div>
		</div>
	);
};
