import { views } from '../constants/constants';
import { getPosts, deletePosts } from '../services/posts.service.js';
import { sortByProperty, handleCheckbox } from '../services/util.service.js';
import { displayDate } from '../services/util.service';

import './DeletePosts.css';

function DeletePosts({ handleChangeViewClick }) {

    const posts = getPosts();
    const postsSorted = sortByProperty(posts, 'id');
    const postsToRender = postsSorted.map(p => ({ id: p.id, hd: p.header, dt: displayDate(p.pDate) }));
    const getJsonObject = (p) => { return JSON.stringify(p); };

    let idsToDelete = [];

    const handleSubmit = () => {
        if (idsToDelete.length < 1) { return; }
        deletePosts(idsToDelete);
        handleChangeViewClick(views.BLOG);
    }

    const handleCheckboxClick = (e, id) => {
        idsToDelete = handleCheckbox(e, id, idsToDelete);
    }

    return (
        <>
            <h2>Delete Posts</h2>
            <div className="row mt-4">
                <div className="col">
                    <div className="row mb-2">
                        <div className="col-auto">
                            <button type="button" className="btn btn-danger ml-5" onClick={handleSubmit}>
                                Delete checked
                            </button>
                        </div>
                    </div>
                    {postsToRender.map((post) => (
                        <div className="row app-blog-post-delete" key={post.id}>
                            <div className="col-auto">
                                <input type="checkbox" onChange={(e) => { handleCheckboxClick(e, post.id) }} />
                            </div>
                            <div className="col">
                                <code>
                                    {getJsonObject(post)}
                                </code>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );

}

export default DeletePosts;