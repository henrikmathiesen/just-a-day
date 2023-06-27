const utilService = {};

utilService.getNewId = function (posts) {

    if (!posts.length) {
        return 1;
    }

    const ids = posts.map(p => p.id);
    const sorted = ids.sort((a, b) => { return a - b });

    return sorted.pop() + 1;
}

utilService.setDate = function() {
    return new Date();
}

utilService.displayDate = function(d) {
    // dateObj or JSON

    return d.toLocaleDateString('sv-se');
}

export default utilService;