import { views } from '../constants/constants';
import { getPosts } from '../services/posts.service.js';
import { sortByProperty, displayDate } from '../services/util.service.js';

import './EditPost.css';

function EditPost({ setView, setIdToEdit }) {

    const posts = getPosts();
    const postsSorted = sortByProperty(posts, 'id');
    
    const handleEditButtonClick = function (id) {
        setIdToEdit(id);
        setView(views.ADD)
    }

    return (
        <>
            <h2>Edit Post</h2>
            <div className="row mt-4">
                <div className="col">
                    {postsSorted.map((post) => (
                        <div className="row app-blog-post-edit" key={post.id}>
                            <div className="col-auto">
                                <button className="btn btn-sm btn-warning" onClick={() => { handleEditButtonClick(post.id) }}>EDIT</button>
                            </div>
                            <div className="col ml-md-4">
                                <div className="row">
                                    <div className="col-md-1">
                                        {post.id}
                                    </div>
                                    <div className="col-md-2">
                                        {displayDate(post.pDate)}
                                    </div>
                                    <div className="col-md-9">
                                        {post.header}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );

}

export default EditPost;