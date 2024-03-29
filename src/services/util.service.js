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

function getAvarageRating(ratingsConstant, getNumberOfPostsWithRatingFn, totalNumberOfPosts) {

    const ratingsData = [];

    ratingsConstant.forEach((n) => {
        ratingsData.push({ theRating: +n, theNumberOfPosts: getNumberOfPostsWithRatingFn(+n) });
    });

    let taljare = 0;

    ratingsData.forEach((rd) => {
        taljare += rd.theRating * rd.theNumberOfPosts;
    });

    let avg = taljare / totalNumberOfPosts;

    if (Number.isNaN(avg)) {
        avg = 0;
    }

    const r = Math.round(avg * 10) / 10;

    return r;

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

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

function getYearFromPdate(pDate) {
    return pDate.split('-')[0];
}

function getCategoriesAsArray(categoriesConstant) {
    const cats = [];

    Object.keys(categoriesConstant).forEach((key) => {
        cats.push(categoriesConstant[key]);
    });

    return cats;
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
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

export {
    getNewId,
    setDate,
    displayDate,
    sortByProperty,
    postIsValid,
    handleCheckbox,
    displayPercent,
    getAvarageRating,
    getCategoriesAsArray,
    removeDuplicates,
    getYearFromPdate,
    randomIntFromInterval
};