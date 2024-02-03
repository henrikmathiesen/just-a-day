import { ratings } from '../constants/constants.js';
import BlogpostRating from '../Blogposts/BlogpostRating.js';
import { getNumberOfPosts, getNumberOfPostsWithRating } from '../services/posts.service.js';
import { displayPercent, getAvarageRating } from '../services/util.service.js';

function StatsRating() {

    const getPercent = (totalNumberOfPosts, numberOfPostsWithARating) => {
        return displayPercent(numberOfPostsWithARating / totalNumberOfPosts);
    }

    const avarageRating = getAvarageRating(ratings, getNumberOfPostsWithRating, getNumberOfPosts());

    const getCssClassForAvarageRating = () => {

        const r = Math.round(avarageRating);

        if (r === 0) {
            return 'text-info';
        }

        if (r === 1 || r === 2) {
            return 'text-danger';
        }

        if (r === 3 || r === 4) {
            return 'text-warning';
        }

        return 'text-success';
    };

    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="alert alert-light">
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
                    <div className="alert alert-light">
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
                    <div className="alert alert-light">
                        <h3 className="h5 m-0 text-center">Posts Avarage Rating: <span className={getCssClassForAvarageRating()}>{avarageRating}</span></h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StatsRating;
