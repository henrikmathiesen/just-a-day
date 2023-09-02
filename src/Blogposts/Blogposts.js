import Blogpost from './Blogpost.js';
import postsService from '../services/posts.service.js';
import utilService from '../services/util.service.js';

import './Blogposts.css';

function Blogposts() {

	const posts = postsService.get();
	const postsSorted = utilService.sortByProperty(posts, 'id');

	return (
		<>
			{postsSorted.map((post) => (<Blogpost post={post} key={post.id} />))}
		</>
	);

}

export default Blogposts;