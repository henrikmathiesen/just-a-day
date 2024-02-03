import BlogpostCategory from '../Blogposts/BlogpostCategory.js';
import { blogpostCategories } from '../constants/constants';
import { getNumberOfPosts, getNumberOfPostsWithCategory } from '../services/posts.service.js';
import { getCategoriesAsArray, displayPercent } from '../services/util.service';

function StatsCategories() {

    const getPercent = (totalNumberOfPosts, numberOfPostsWithCategory) => {
        return displayPercent(numberOfPostsWithCategory / totalNumberOfPosts);
    }

    return (
        <>
            <div className="row app-margin-bottom-bs-column-padding">
                <div className="col-md-6">
                    <div className="alert alert-light m-0">
                        <h3 className="h5">Number of posts with category</h3>
                        <ol className="list-unstyled m-0">
                            {
                                getCategoriesAsArray(blogpostCategories).map(c => (
                                    <li key={c}>
                                        <span className="row">
                                            <span className="col col-lg-4"><BlogpostCategory category={c} makeResponsive={false} /></span>
                                            <span className="col">{getNumberOfPostsWithCategory(c)}</span>
                                        </span>
                                    </li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="alert alert-light m-0">
                        <h3 className="h5">Percent of posts with category</h3>
                        <ol className="list-unstyled m-0">
                        {
                                getCategoriesAsArray(blogpostCategories).map(c => (
                                    <li key={c}>
                                        <span className="row">
                                            <span className="col col-lg-4"><BlogpostCategory category={c} makeResponsive={false} /></span>
                                            <span className="col">{getPercent(getNumberOfPosts(), getNumberOfPostsWithCategory(c))}</span>
                                        </span>
                                    </li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );

}

export default StatsCategories;