import Blogposts from '../Blogposts/Blogposts.js';
import AddBlogPosts from '../AddBlogPost/AddBlogPost.js';
import ExportDatabase from '../ExportDatabase/ExportDatabase.js';
import ImportDatabase from '../ImportDatabase/ImportDatabase.js';
import { views } from '../constants/constants';

function Main({ view, handleChangeViewClick }) {

    const viewToShow = () => {
        switch (view) {
            case views.BLOG:
                return (<Blogposts />); 
            case views.ADD:
                return (<AddBlogPosts handleChangeViewClick={handleChangeViewClick} />);
            case views.EDIT:
                return 'Edit Mock';
            case views.DELETE:
                return 'Delete Mock';
            case views.IMPORT:
                return (<ImportDatabase />);
            case views.EXPORT:
                return (<ExportDatabase />);
            default:
                return 'error';
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