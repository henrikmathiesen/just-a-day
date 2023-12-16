
describe('posts.service.test', () => {

    describe('delete', () => {
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

    describe('update', () => {

        let posts = [];

        const updatePost = (post) => {
            const currentPosts = posts;
            const editPosts = [...currentPosts];

            const indexOfPostToReplace = editPosts.findIndex(p => p.id === post.id);

            editPosts.splice(indexOfPostToReplace, 1, post);

            return editPosts;
        };

        beforeEach(() => {
            posts = [
                { id: 3, header: 'Header 3' },
                { id: 7, header: 'Header 7' },
                { id: 5, header: 'Header 5' },
                { id: 1, header: 'Header 1' },
                { id: 15, header: 'Header 15' }
            ];
        });

        it('should update - test 1', () => {
            const editedPostFive = { id: 5, header: 'Header 5!!' };
            const updatedPostFive = updatePost(editedPostFive);

            expect(updatedPostFive[2].id).toBe(5);
            expect(updatedPostFive[2].header).toBe('Header 5!!');
        });

    });


});