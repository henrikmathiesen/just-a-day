import BlogpostRating from '../Blogposts/BlogpostRating.js';
import { ratings } from '../constants/constants.js';
import { getNumberOfPosts, getNumberOfPostsWithRating } from '../services/posts.service.js';
import { displayPercent, getAvarageRating } from '../services/util.service.js';

function Stats() {

    const getPercent = (totalNumberOfPosts, numberOfPostsWithARating) => {
        return displayPercent(numberOfPostsWithARating / totalNumberOfPosts);
    }

    const avarageRating = getAvarageRating(ratings, getNumberOfPostsWithRating, getNumberOfPosts());

    const getCssClassForAvarageRating = () => {

        const r = Math.round(avarageRating);

        if (r === 0) {
            return 'alert-info';
        }

        if (r === 1 || r === 2) {
            return 'alert-danger';
        }

        if (r === 3 || r === 4) {
            return 'alert-warning';
        }

        return 'alert-success';
    };

    return (
        <>
            <h2>Stats</h2>
            <div className="row mt-4">
                <div className="col">
                    <div className="alert alert-info">
                        <h3 className="h5 m-0 text-center">Total number of posts: {getNumberOfPosts()}</h3>
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
                                    <li key={n}><BlogpostRating rating={+n} makeResponsive={false} /> : {getNumberOfPostsWithRating(+n)} </li>
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
                                    <li key={n}><BlogpostRating rating={+n} makeResponsive={false} /> : {getPercent(getNumberOfPosts(), getNumberOfPostsWithRating(+n))} </li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className={`alert ${getCssClassForAvarageRating()}`}>
                        <h3 className="h5 m-0 text-center">Posts Avarage Rating: {avarageRating}</h3>
                    </div>
                </div>
            </div>

        </>
    );

}

export default Stats;