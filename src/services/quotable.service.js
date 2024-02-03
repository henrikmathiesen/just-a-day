// https://github.com/lukePeavey/quotable

import { randomIntFromInterval } from './util.service';

const relevantCategories = [
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

function getRandomCategory() {

    const catFirstIndex = 0;
    const catLastIndex = relevantCategories.length - 1;

    const randomIndex = randomIntFromInterval(catFirstIndex, catLastIndex);

    return relevantCategories[randomIndex];
}

async function getRandomQuote() {

    const category = getRandomCategory().toLowerCase();
    const url = `https://api.quotable.io/quotes/random?tags=${category}`;

    const response = await fetch(url);
    return response.json();

}

export {
    getRandomQuote
}