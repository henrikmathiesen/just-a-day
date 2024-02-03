import { getPosts, getNumberOfPostsWithYear } from '../services/posts.service';
import { getYearFromPdate, removeDuplicates } from '../services/util.service';

function YearsAndSuch() {

    const years = getPosts().map(v => getYearFromPdate(v.pDate));
    const yearsNoDuplicates = removeDuplicates(years);

    return (
        <>
            <div className="row">
                <div className="col">
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
                <div className="col">
                    <div className="alert alert-light">
                        <h3 className="h5">Todo</h3>
                    </div>
                </div>
            </div>
        </>
    );

}

export default YearsAndSuch;