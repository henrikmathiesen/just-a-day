import utilService from './util.service';

const _key = 'justADay';

function getPosts() {

	let posts = localStorage.getItem(_key);

	if (posts) {
		posts = JSON.parse(posts);
	}

	return posts || [];

}

function addPost(post) {

	const currentPosts = getPosts();
	
	post.id = utilService.getNewId(currentPosts);
	post.pDate = utilService.setDate();

	const newPosts = [...currentPosts, post];

	const j = JSON.stringify(newPosts);
	localStorage.setItem(_key, j);

}

function importDb(dbAsJsonString) {
	localStorage.setItem(_key, dbAsJsonString);
}

export { getPosts, addPost, importDb };