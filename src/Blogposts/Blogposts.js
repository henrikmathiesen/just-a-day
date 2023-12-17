import { useState, useEffect } from 'react';

import Blogpost from './Blogpost.js';
import { getPosts } from '../services/posts.service.js';
import { sortByProperty } from '../services/util.service.js';

import './Blogposts.css';

function Blogposts({ filterByRating, filterByCategory }) {

	const [postsSorted, setPostsSorted] = useState(sortByProperty(getPosts(), 'id'));

	useEffect(() => {

		if (+filterByRating !== 0 && +filterByCategory === 0) {
			const filtered = getPosts().filter(p => p.rating === +filterByRating);
			setPostsSorted(sortByProperty(filtered, 'id'));
		}

		if (+filterByCategory !== 0 && +filterByRating === 0) {
			const filtered = getPosts().filter(p => p.categories.includes(filterByCategory));
			setPostsSorted(sortByProperty(filtered, 'id'));
		}

		if (+filterByCategory === 0 && +filterByRating === 0) {
			setPostsSorted(sortByProperty(getPosts(), 'id'));
		}

	}, [filterByRating, filterByCategory]);

	return (
		<>
			{postsSorted.map((post) => (<Blogpost post={post} key={post.id} />))}
		</>
	);

}

export default Blogposts;