import './AddBlogPost.css';
import { blogpostCategories } from '../constants/constants';

function AddBlogPosts() {

    const getCats = () => {
        const cats = [];

        Object.keys(blogpostCategories).forEach((key) => {
            cats.push({ id: key, label: blogpostCategories[key] });
        });

        return cats;
    };

    return (
        <>
            <h2>Add Post</h2>
            <div className="row">
                <div className="col-md-8">
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
                <div className="col-md-4">
                    {
                        getCats().map((c) => (

                            <div className="form-check form-check-inline" key={c.id}>
                                <input className="form-check-input" type="checkbox" value={c.label} id={c.id} />
                                    <label className="form-check-label" htmlFor={c.id}>
                                        {c.label}
                                    </label>
                            </div>

                        ))
                    }
                </div>
                <div className="col-md-4 mt-2 mt-md-0">
                    <div className="form-group text-right">
                        <button type="button" className="btn btn-success btn-block">Add it!</button>
                    </div>
                </div>
            </div>
        </>
    );

}

export default AddBlogPosts;