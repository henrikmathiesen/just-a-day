import postsService from '../services/posts.service.js';

function ExportDatabase() {

    const posts = postsService.get();
    const postsAsJsonString = JSON.stringify(posts);

    return (
        <>
            <h2>Exported Database</h2>
            <div className="row mt-4">
                <div className="col">
                    <code>
                        {postsAsJsonString}
                    </code>
                </div>
            </div>
        </>
    );
}

export default ExportDatabase;