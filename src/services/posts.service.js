import { getNewId, setDate, getYearFromPdate } from './util.service';

const _key = 'justADay';

//
// CRUD

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

function updatePost(post) {

	const currentPosts = getPosts();
	const editPosts = [...currentPosts];

	const indexOfPostToReplace = editPosts.findIndex(p => p.id === post.id);

	editPosts.splice(indexOfPostToReplace, 1, post);

	const j = JSON.stringify(editPosts);
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

//
// Util

function getPostById(id) {
	const posts = getPosts();
	return posts.filter(p => p.id === id)[0];
}

function getNumberOfPosts() {
	const posts = getPosts();
	return posts.length;
}

function getNumberOfPostsWithRating(rating) {
	const posts = getPosts();
	return posts.filter(p => p.rating === rating).length;
}

function getNumberOfPostsWithCategory(category) {
	const posts = getPosts();
	return posts.filter(p => p.categories.includes(category)).length;
}

function getNumberOfPostsWithYear(year) {
	const posts = getPosts();
	const years = posts.map(v => getYearFromPdate(v.pDate));
	return years.filter(v => v === year).length;
}


export { 
	getPosts, 
	addPost, 
	importDb, 
	deletePosts, 
	getPostById, 
	updatePost, 
	getNumberOfPosts, 
	getNumberOfPostsWithRating,
	getNumberOfPostsWithCategory,
	getNumberOfPostsWithYear
};