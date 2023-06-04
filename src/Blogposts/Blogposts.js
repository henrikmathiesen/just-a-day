import Blogpost from './Blogpost.js';
import postsService from '../services/posts.service.js';

function Blogposts() {

	const posts = postsService.get();
	
	return (
		<>
		{ posts.map((post) => ( <Blogpost post={post} key={post.id} /> )) }
		</>
	);

}

export default Blogposts;