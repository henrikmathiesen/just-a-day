import { getPosts } from '../services/posts.service.js';
import { sortByProperty } from '../services/util.service.js';
import { displayDate } from '../services/util.service';

import './DeletePosts.css';

function DeletePosts() {

    const posts = getPosts();
    const postsSorted = sortByProperty(posts, 'id');
    const postsToRender = postsSorted.map(p => ({ id: p.id, hd: p.header, dt: displayDate(p.pDate) }));

    const getJsonObject = (p) => { return JSON.stringify(p); };

    return (
        <>
            <h2>Delete Posts</h2>
            <div className="row mt-4">
                <div className="col">
                    <div className="row mb-2">
                        <div className="col-auto">
                            <button type="button" className="btn btn-danger ml-5">Delete checked</button>
                        </div>
                    </div>
                    {postsToRender.map((post) => (
                        <div className="row app-blog-post-delete" key={post.id}>
                            <div className="col-auto">
                                <input type="checkbox" />
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