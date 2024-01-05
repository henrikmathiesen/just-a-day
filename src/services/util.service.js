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

function displayPercent(nr) {

    if (Number.isNaN(nr)) {
        return '0%';
    }

    const p = nr * 100;
    const r = Math.round(p)
    return `${r}%`;
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

function postIsValid(post) {

    const headerIsRequiredInvalid = !post.header;
    const bodyIsRequiredInvalid = !post.body;
    const categoriesIsRequiredInvalid = !post.categories || post.categories.length < 1;
    const ratingIsRequiredInvalid = post.rating === 0;

    if (headerIsRequiredInvalid || bodyIsRequiredInvalid || categoriesIsRequiredInvalid || ratingIsRequiredInvalid) {
        const validationInformation = [];

        if (headerIsRequiredInvalid) {
            validationInformation.push('A header is needed');
        }

        if (bodyIsRequiredInvalid) {
            validationInformation.push('Type a body for the post');
        }

        if (categoriesIsRequiredInvalid) {
            validationInformation.push('Provide a category');
        }

        if (ratingIsRequiredInvalid) {
            validationInformation.push('Give the day a rating');
        }

        return validationInformation;

    }

    return true;

}

function handleCheckbox(e, primitive, collection) {
    const ischecked = e.currentTarget.checked;
    const exists = collection.includes(primitive);

    let newCollection = [];

    if (ischecked) {
        if (!exists) {
            newCollection = [...collection, primitive];
        } else {
            newCollection = [...collection];
        }
    }

    if (!ischecked) {
        if (!exists) {
            newCollection = [...collection];
        } else {
            newCollection = collection.filter(c => c !== primitive);
        }
    }

    return newCollection;
}

export { getNewId, setDate, displayDate, sortByProperty, postIsValid, handleCheckbox, displayPercent };