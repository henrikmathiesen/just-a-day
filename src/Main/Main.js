import Blogposts from '../Blogposts/Blogposts.js';
import AddBlogPosts from '../AddBlogPost/AddBlogPost.js';
import { views } from '../constants/constants';

function Main({ view }) {

    const viewToShow = () => {
        switch (view) {
            case views.ADD:
                return (<AddBlogPosts />);
            case views.EDIT:
                return 'Edit Mock';
            case views.DELETE:
                return 'Delete Mock';
            case views.IMPORT:
                return 'Import Mock';
            case views.EXPORT:
                return 'Export Mock';
            default:
                return (<Blogposts />);
        }
    };

    return (
        <main className="row flex-grow-1 bg-light">
            <div className="col">
                {viewToShow()}
            </div>
        </main>
    );
}

export default Main;