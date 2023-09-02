const utilService = {};

utilService.getNewId = function (posts) {

    if (!posts.length) {
        return 1;
    }

    const ids = posts.map(p => p.id);
    const sorted = ids.sort((a, b) => { return a - b });

    return sorted.pop() + 1;
}

utilService.setDate = function () {
    return new Date();
}

utilService.displayDate = function (d) {
    d = new Date(d);
    return d.toLocaleDateString('sv-se');
}

utilService.sortByProperty = function (arr, propName) {

    const arrCopy = [...arr];

    const compareFn = function(a, b) {
        const x = a[propName];
        const y = b[propName];

        return y - x;
    }

    return arrCopy.sort(compareFn);
}

export default utilService;