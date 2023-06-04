const postsService = {};

postsService.get = function() {

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
	
	return mockPosts;

}

export default postsService;