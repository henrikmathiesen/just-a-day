import { useState, useEffect } from 'react';
import { getPosts, getNumberOfPostsWithYear } from '../services/posts.service';
import { getYearFromPdate, removeDuplicates } from '../services/util.service';
import { getRandomQuote } from '../services/quotable.service';

function YearsAndSuch() {

    const [quote, setQuote] = useState('');

    const years = getPosts().map(v => getYearFromPdate(v.pDate));
    const yearsNoDuplicates = removeDuplicates(years);

    useEffect(() => {
        console.log('in use effect');

        getRandomQuote().then(
            (v) => {
                console.log('success');

                if (!v || v.length === 0) {
                    setQuote('ERROR');
                    return;
                }

                v = v[0];
                setQuote({ content: v.content, author: v.author });
            },
            () => {
                console.log('error');
                setQuote('ERROR');
            }
        );

    }, []);

    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className="alert alert-light">
                        <h3 className="h5">Number of posts in a year</h3>
                        <ol className="list-unstyled m-0">
                            {
                                yearsNoDuplicates.map(v => (
                                    <li key={v}>{v} : {getNumberOfPostsWithYear(v)}</li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={`alert ${quote === 'ERROR' ? 'alert-danger' : 'alert-light'}`}>
                        <h3 className="h5">{quote === 'ERROR' ? 'Error getting Quote' : 'Random Quote for You'}</h3>
                        {
                            quote !== 'ERROR' &&
                            (
                                <blockquote className="blockquote mb-0">
                                    <p className="mb-0">{quote.content}</p>
                                    <footer className="blockquote-footer">{quote.author}</footer>
                                </blockquote>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );

}

export default YearsAndSuch;