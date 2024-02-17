// https://github.com/lukePeavey/quotable

import { randomIntFromInterval } from './util.service';

const staticQuotes = [
    {
        content: 'Let things go well.',
        author: 'Mark'
    },
    {
        content: 'Be unreasonable.',
        author: 'Mark'
    },
    {
        content: 'It is just a ghost house.',
        author: 'Shanon'
    },
    {
        content: 'Warrior attitude.',
        author: 'Shanon'
    },
    {
        content: 'The parachute will open.',
        author: 'Alli'
    },
    {
        content: 'Stop Ruminating.',
        author: 'Alli'
    },
    {
        content: 'It is just a water pistol.',
        author: 'Katie'
    },
    {
        content: 'You have to accept uncertainty.',
        author: 'Katie'
    },
    {
        content: 'The universe doesnt owe you anything.',
        author: 'Albert'
    },
    {
        content: 'Drop your god like demands.',
        author: 'Albert'
    },
    {
        content: 'Want what you dont want.',
        author: 'Reid'
    },
    {
        content: 'When we are no longer able to change a situation, we are challenged to change ourselves.',
        author: 'Victor Frankl'
    }
];

const relevantCategoriesForHttpCall = [
    'Business',
    'Change',
    'Character',
    'Courage',
    'Creativity',
    'Education',
    'Ethics',
    'Failure',
    'Faith',
    'Famous Quotes',
    'Freedom',
    'Friendship',
    'Generosity',
    'Gratitude',
    'Health',
    'Future',
    'Genius',
    'Happiness',
    'Knowledge',
    'Life',
    'Pain',
    'Philosophy',
    'Work',
    'Wellness',
    'Success',
    'Wisdom'
];

function getRandomCategoryForHttpCall() {

    const catFirstIndex = 0;
    const catLastIndex = relevantCategoriesForHttpCall.length - 1;

    const randomIndex = randomIntFromInterval(catFirstIndex, catLastIndex);

    return relevantCategoriesForHttpCall[randomIndex];
}

function getRandomStaticQuote() {
    const quoteFirstIndex = 0;
    const quoteLastIndex = staticQuotes.length - 1;

    const randomIndex = randomIntFromInterval(quoteFirstIndex, quoteLastIndex);

    return staticQuotes[randomIndex];
}

async function getRandomQuote() {

    const isZeroOrOne = randomIntFromInterval(0, 1);

    if (isZeroOrOne === 0) {
        const quote = [getRandomStaticQuote()]; // in an array, to match http response, so logic in caller is the same
        function resolveQuote() { return new Promise((resolve) => { resolve(quote) }); }
        return await resolveQuote();
    } else {
        const category = getRandomCategoryForHttpCall().toLowerCase();
        const url = `https://api.quotable.io/quotes/random?tags=${category}`;

        const response = await fetch(url);
        return response.json();
    }
}

export {
    getRandomQuote
}