import utilService from './util.service';

const postsService = {};

const _key = 'justADay';

postsService.get = function () {

	const mockPosts = [

		{
			id: 1,
			header: 'Post One Header',
			paragraph: 'Post One Paragraph',
			pDate: new Date()
		},
		{
			id: 2,
			header: 'Post Two Header',
			paragraph: 'Post Two Paragraph',
			pDate: new Date()
		},
		{
			id: 3,
			header: 'Post Three Header',
			paragraph: 'Post Three Paragraph',
			pDate: new Date()
		}

	];

	let realPosts = localStorage.getItem(_key);

	if (realPosts) {
		realPosts = JSON.parse(realPosts);
	}

	return realPosts || mockPosts;

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