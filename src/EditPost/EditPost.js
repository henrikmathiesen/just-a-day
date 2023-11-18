import { views } from '../constants/constants';
import { getPosts } from '../services/posts.service.js';
import { sortByProperty, displayDate } from '../services/util.service.js';

import './EditPost.css';

function EditPost({ handleChangeViewClick, handleSetIdToEdit }) {

    const posts = getPosts();
    const postsSorted = sortByProperty(posts, 'id');
    const postsToRender = postsSorted.map(p => ({ id: p.id, hd: p.header, dt: displayDate(p.pDate) }));
    const getJsonObject = (p) => { return JSON.stringify(p); };

    const handleEditButtonClick = function (id) {
        handleSetIdToEdit(id);
        handleChangeViewClick(views.ADD)
    }

    return (
        <>
            <h2>Edit Post!!</h2>
            <div className="row mt-4">
                <div className="col">
                    {postsToRender.map((post) => (
                        <div className="row app-blog-post-edit" key={post.id}>
                            <div className="col-auto">
                                <button className="btn btn-sm btn-warning" onClick={() => { handleEditButtonClick(post.id) }}>EDIT</button>
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

export default EditPost;