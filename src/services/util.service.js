function getNewId(posts) {

    if (!posts.length) {
        return 1;
    }

    const ids = posts.map(p => p.id);
    const sorted = ids.sort((a, b) => { return a - b });

    return sorted.pop() + 1;

}

function setDate() {
    return new Date();
}

function displayDate(d) {
    d = new Date(d);
    return d.toLocaleDateString('sv-se');
}

function sortByProperty(arr, propName) {

    const arrCopy = [...arr];

    const compareFn = function (a, b) {
        const x = a[propName];
        const y = b[propName];

        return y - x;
    }

    return arrCopy.sort(compareFn);

}

export { getNewId, setDate, displayDate, sortByProperty };