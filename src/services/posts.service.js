import utilService from './util.service';

const postsService = {};

const _key = 'justADay';

postsService.get = function () {

	let posts = localStorage.getItem(_key);

	if (posts) {
		posts = JSON.parse(posts);
	}

	return posts || [];
}

postsService.addPost = function(post) {
	const currentPosts = postsService.get();
	
	post.id = utilService.getNewId(currentPosts);
	post.pDate = utilService.setDate();

	const newPosts = [...currentPosts, post];

	const j = JSON.stringify(newPosts);
	localStorage.setItem(_key, j);
}

export default postsService;