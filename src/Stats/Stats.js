import Rating from '../Blogposts/Rating.js';
import { ratings } from '../constants/constants.js';
import { getNumberOfPosts, getNumberOfPostsWithRating } from '../services/posts.service.js';
import { displayPercent } from '../services/util.service.js';

function Stats() {

    const getPercent = (totalNumberOfPosts, numberOfPostsWithARating) => {
        return displayPercent(numberOfPostsWithARating / totalNumberOfPosts);
    }

    return (
        <>
            <h2>Stats</h2>
            <div className="row mt-4">
                <div className="col">
                    <div className="alert alert-info">
                        <h3 className="h5 m-0">Total number of posts: {getNumberOfPosts()}</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="alert alert-info">
                        <h3 className="h5">Number of posts with rating</h3>
                        <ol className="list-unstyled m-0">
                            {
                                ratings.map(n => (
                                    <li key={n}><Rating rating={+n} /> : {getNumberOfPostsWithRating(+n)} </li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
                <div className="col">
                    <div className="alert alert-info">
                        <h3 className="h5">Percent of posts with rating</h3>
                        <ol className="list-unstyled m-0">
                            {
                                ratings.map(n => (
                                    <li key={n}><Rating rating={+n} /> : {getPercent(getNumberOfPosts(), getNumberOfPostsWithRating(+n))} </li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </div>

        </>
    );

}

export default Stats;