const postsService = {};

const _key = 'justADay';

postsService.get = function () {

	const mockPosts = [

		{
			id: 1,
			header: 'Post One Header',
			paragraph: 'Post One Paragraph',
			pDate: '2023-06-01'
		},
		{
			id: 2,
			header: 'Post Two Header',
			paragraph: 'Post Two Paragraph',
			pDate: '2023-06-02'
		},
		{
			id: 3,
			header: 'Post Three Header',
			paragraph: 'Post Three Paragraph',
			pDate: '2023-06-03'
		}

	];

	let realPosts = localStorage.getItem(_key);

	if (realPosts) {
		realPosts = JSON.parse(realPosts);
	}

	return realPosts || mockPosts;

}

postsService.set = function (posts) {
	const j = JSON.stringify(posts);
	localStorage.setItem(_key, j);
}

export default postsService;