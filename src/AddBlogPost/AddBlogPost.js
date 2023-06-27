import './AddBlogPost.css';

function AddBlogPosts() {

    return (
        <>
            <div className="row">
                <div className="col-md-8">
                    <h2>Add Post</h2>

                    <div className="form-group mt-4">
                        <label htmlFor="header">Header</label>
                        <input type="text" id="header" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="post">Post</label>
                        <textarea id="post" className="form-control app-add-blogpost-textarea"></textarea>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6">
                            <div className="form-group text-right">
                                <button type="button" className="btn btn-success btn-block">Add it!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default AddBlogPosts;