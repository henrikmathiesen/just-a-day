import utilService from "./util.service";

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
            const id = utilService.getNewId(posts);

            expect(id).toBe(1);
        });

        it('should return an id that is higher than current highest id', () => {
            const posts = arr;
            const id = utilService.getNewId(posts);

            expect(id).toBe(22);
        });

    });

    describe('sortByProperty', () => {

        it('should sort integer, highest first -- test 1', () => {
            const sorted = utilService.sortByProperty(arr, 'id');

            expect(sorted[0].id).toBe(21);
            expect(sorted[1].id).toBe(20);
            expect(sorted[2].id).toBe(15);
            expect(sorted[3].id).toBe(10);
            expect(sorted[4].id).toBe(5);
        });

    });

});