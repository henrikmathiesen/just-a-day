describe('General tests', () => {

    let posts;

    beforeEach(() => {
        posts = [
            { id: 5, pDate: '2024-01-06T14:59:47.402Z' },
            { id: 2, pDate: '2023-12-21T11:21:33.556Z' },
            { id: 7, pDate: '2024-01-08T17:48:13.175Z' },
            { id: 10, pDate: '2024-02-25T21:15:53.625Z' },
            { id: 3, pDate: '2024-01-04T19:37:32.861Z' }
        ];
    });

    function removeDuplicates(arr) {
        return [...new Set(arr)];
    }

    function getYearsRemoveDuplicates() {
        const years = posts.map(v => v.pDate.split('-')[0]);
        return removeDuplicates(years);
    }

    function getNumberOfPostsWithYear(year) {
        const years = posts.map(v => v.pDate.split('-')[0]);
        return years.filter(v => v === year).length;
    }

    it('Should run', () => {

        //console.debug(getNumberOfPostsWithYear('2023'));

        console.debug(getYearsRemoveDuplicates());


    });

});