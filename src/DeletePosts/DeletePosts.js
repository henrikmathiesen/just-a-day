import { useState } from 'react';

import { views } from '../constants/constants';
import { getPosts, deletePosts } from '../services/posts.service.js';
import { sortByProperty, handleCheckbox } from '../services/util.service.js';
import BlogpostCompactAdmin from '../Blogposts/Blogpost-compact-admin.js';

function DeletePosts({ setView }) {

    const posts = getPosts();
    const postsSorted = sortByProperty(posts, 'id');

    const [checkedState, setCheckedState] = useState(new Array(postsSorted.length).fill(false));
    const [idsToDelete, setIdsToDelete] = useState([]);

    const handleSubmit = () => {
        deletePosts(idsToDelete);
        setView(views.BLOG);
    }

    const handleAdminButtonClick = function (id, index) {
        const updatedCheckedState = handleSetCheckedState(index);
        setCheckedState(updatedCheckedState);
        
        const e = { currentTarget: { checked: updatedCheckedState[index] } };
        const newIds = handleCheckbox(e, id, idsToDelete);
        setIdsToDelete(newIds);
    }

    function handleSetCheckedState(i) {
        const updatedCheckedState = checkedState.map((shouldCheck, index) => {
            return index === i ? !shouldCheck : shouldCheck
        });

        return updatedCheckedState;
    }

    return (
        <>
            <h2>Delete Posts</h2>

            <div className="row mt-4">
                <div className="col">
                    { postsSorted.length > 0 && <button className="btn btn-danger" disabled={idsToDelete.length < 1} onClick={handleSubmit}>DELETE ALL MARKED</button> }
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    {postsSorted.map((post, index) => (
                        <BlogpostCompactAdmin key={post.id} post={post} fromView={views.DELETE} index={index} checkedState={checkedState} handleAdminButtonClick={handleAdminButtonClick} />
                    ))}
                </div>
            </div>
        </>
    );

}

export default DeletePosts;