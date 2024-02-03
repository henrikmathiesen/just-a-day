import StatsRating from './StatsRating.js';
import StatsCategories from './StatsCategories.js';
import YearsAndSuch from './YearsAndSuch.js';
import { getNumberOfPosts } from '../services/posts.service.js';

function Stats() {

    return (
        <>
            <h2>Stats</h2>
            <div className="row mt-4 app-margin-bottom-bs-column-padding">
                <div className="col">
                    <div className="alert alert-light m-0">
                        <h3 className="h5 m-0 text-center">Total number of posts: {getNumberOfPosts()}</h3>
                    </div>
                </div>
            </div>
            <StatsRating />
            <StatsCategories />
            <YearsAndSuch />
        </>
    );

}

export default Stats;