
describe('posts.service.test', () => {

    it('should delete posts - test 1', () => {
        const idsToDelete = [3];
        const currentPosts = [{ id: 5 }, { id: 4 }, { id: 3 }, { id: 2 }, { id: 1 }];
        let remainingPosts = [];

        remainingPosts = currentPosts.filter((p) => {
            return !idsToDelete.includes(p.id);
        });

        expect(currentPosts.length).toBe(5);
        expect(remainingPosts.length).toBe(4);

    });

    it('should delete posts - test 2', () => {
        const idsToDelete = [5, 1];
        const currentPosts = [{ id: 5 }, { id: 4 }, { id: 3 }, { id: 2 }, { id: 1 }];
        let remainingPosts = [];

        remainingPosts = currentPosts.filter((p) => {
            return !idsToDelete.includes(p.id);
        });

        expect(currentPosts.length).toBe(5);
        expect(remainingPosts.length).toBe(3);

    });

    it('should delete posts - test 3', () => {
        const idsToDelete = [5, 1, 3];
        const currentPosts = [{ id: 5 }, { id: 4 }, { id: 3 }, { id: 2 }, { id: 1 }];
        let remainingPosts = [];

        remainingPosts = currentPosts.filter((p) => {
            return !idsToDelete.includes(p.id);
        });

        expect(currentPosts.length).toBe(5);
        expect(remainingPosts.length).toBe(2);

        const firstPost = remainingPosts[0];
        const secondPost = remainingPosts[1];

        expect(firstPost.id).toBe(4);
        expect(secondPost.id).toBe(2);

    });

});