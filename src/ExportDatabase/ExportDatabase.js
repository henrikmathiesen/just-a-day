import { getPosts } from '../services/posts.service.js';

function ExportDatabase() {

    let exported;

    const posts = getPosts();

    if (posts.length < 1) {
        exported = 'No data';
    } else {
        exported = JSON.stringify(posts);
    }

    return (
        <>
            <h2>Exported Database</h2>
            <div className="row mt-4">
                <div className="col pb-3">
                    <code>
                        {exported}
                    </code>
                </div>
            </div>
        </>
    );
}

export default ExportDatabase;