import utilService from './util.service';
import { blogpostCategories } from '../constants/constants';

const postsService = {};

const _key = 'justADay';

postsService.get = function () {

	const mockPosts = [

		{
			id: 1,
			categories: [blogpostCategories.FINANCE, blogpostCategories.OTHER],
			header: 'Post One Header',
			paragraph: 'Post One Paragraph',
			pDate: new Date()
		},
		{
			id: 2,
			categories: [blogpostCategories.PHYSICAL_HEALTH],
			header: 'Post Two Header',
			paragraph: 'Post Two Paragraph',
			pDate: new Date()
		},
		{
			id: 3,
			categories: [blogpostCategories.MENTAL_HEALTH, blogpostCategories.OTHER],
			header: 'Post Three Header',
			paragraph: 'Post Three Paragraph',
			pDate: new Date()
		},
		{
			id: 4,
			categories: [blogpostCategories.PROGRAMMING, blogpostCategories.OTHER],
			header: 'Post Four Header',
			paragraph: 'Post Four Paragraph',
			pDate: new Date()
		},
		{
			id: 5,
			categories: [blogpostCategories.OTHER],
			header: 'Post Five Header',
			paragraph: 'Post Five Paragraph',
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