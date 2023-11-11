import { getNewId, setDate } from './util.service';

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
	
	post.id = getNewId(currentPosts);
	post.pDate = setDate();

	const newPosts = [...currentPosts, post];

	const j = JSON.stringify(newPosts);
	localStorage.setItem(_key, j);

}

function deletePosts(idsToDelete) {

	const currentPosts = getPosts();
	let remainingPosts = [];

	remainingPosts = currentPosts.filter((p) => {
		return !idsToDelete.includes(p.id);
	});

	const j = JSON.stringify(remainingPosts);
	localStorage.setItem(_key, j);

}

function importDb(dbAsJsonString) {
	localStorage.setItem(_key, dbAsJsonString);
}

export { getPosts, addPost, importDb, deletePosts };