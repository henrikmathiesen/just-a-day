import { views } from '../constants/constants';
import { getPosts } from '../services/posts.service.js';
import { sortByProperty } from '../services/util.service.js';
import BlogpostCompactAdmin from '../Blogposts/Blogpost-compact-admin.js';

function EditPost({ setView, setIdToEdit }) {

    const posts = getPosts();
    const postsSorted = sortByProperty(posts, 'id');
    
    const handleAdminButtonClick = function (id) {
        setIdToEdit(id);
        setView(views.ADD);
    }

    return (
        <>
            <h2>Edit Post</h2>
            <div className="row mt-4">
                <div className="col">
                    {postsSorted.map((post, index) => (
                        <BlogpostCompactAdmin key={post.id} post={post} fromView={views.EDIT} index={index} checkedState={null} handleAdminButtonClick={handleAdminButtonClick} />
                    ))}
                </div>
            </div>
        </>
    );

}

export default EditPost;