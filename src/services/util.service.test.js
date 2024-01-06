import { ratings } from '../constants/constants.js';
import { getNewId, sortByProperty, getAvarageRating } from './util.service';

describe('util.service.tests', () => {

    let arr;

    beforeEach(() => {
        arr = [
            {
                id: 10,
                name: 'Foo'
            },
            {
                id: 15,
                name: 'Foo'
            },
            {
                id: 20,
                name: 'Foo'
            },
            {
                id: 5,
                name: 'Foo'
            },
            {
                id: 21,
                name: 'Foo'
            },
        ];
    });

    describe('getNewId', () => {

        it('should return 1 if no items', () => {
            const posts = [];
            const id = getNewId(posts);

            expect(id).toBe(1);
        });

        it('should return an id that is higher than current highest id', () => {
            const posts = arr;
            const id = getNewId(posts);

            expect(id).toBe(22);
        });

    });

    describe('sortByProperty', () => {

        it('should sort integer, highest first -- test 1', () => {
            const sorted = sortByProperty(arr, 'id');

            expect(sorted[0].id).toBe(21);
            expect(sorted[1].id).toBe(20);
            expect(sorted[2].id).toBe(15);
            expect(sorted[3].id).toBe(10);
            expect(sorted[4].id).toBe(5);
        });

    });

    describe('getAvarageRating', () => {

        it('should calculate -- test 1', () => {
            const getNumberOfPostsWithRatingMock = (rating) => {
                const posts = [{ id: 1, rating: 1 }, { id: 2, rating: 1 }];
                return posts.filter(p => p.rating === rating).length;
            };

            const expected = 1;
            const actual = getAvarageRating(ratings, getNumberOfPostsWithRatingMock, 2);

            expect(expected).toBe(actual);
        });

        it('should calculate -- test 2', () => {
            const getNumberOfPostsWithRatingMock = (rating) => {
                const posts = [];
                return posts.filter(p => p.rating === rating).length;
            };

            const expected = 0;
            const actual = getAvarageRating(ratings, getNumberOfPostsWithRatingMock, 0);

            expect(expected).toBe(actual);
        });

        it('should calculate -- test 3', () => {
            const getNumberOfPostsWithRatingMock = (rating) => {
                const posts = [{ id: 1, rating: 5 }, { id: 2, rating: 5 }, { id: 3, rating: 5 }, { id: 4, rating: 5 }, { id: 5, rating: 5 }];
                return posts.filter(p => p.rating === rating).length;
            };

            const expected = 5;
            const actual = getAvarageRating(ratings, getNumberOfPostsWithRatingMock, 5);

            expect(expected).toBe(actual);
        });

        it('should calculate -- test 4', () => {
            const getNumberOfPostsWithRatingMock = (rating) => {
                const posts = [{id: 1, rating: 5}, {id: 2, rating: 1}];
                return posts.filter(p => p.rating === rating).length;
            };

            const expected = 3;
            const actual = getAvarageRating(ratings, getNumberOfPostsWithRatingMock, 2);

            expect(expected).toBe(actual);
        });

    });

});