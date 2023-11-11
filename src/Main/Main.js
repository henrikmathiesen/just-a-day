import Blogposts from '../Blogposts/Blogposts.js';
import AddBlogPost from '../AddBlogPost/AddBlogPost.js';
import ExportDatabase from '../ExportDatabase/ExportDatabase.js';
import ImportDatabase from '../ImportDatabase/ImportDatabase.js';
import DeletePosts from '../DeletePosts/DeletePosts.js';
import { views } from '../constants/constants';

function Main({ view, handleChangeViewClick }) {

    const viewToShow = () => {
        switch (view) {
            case views.BLOG:
                return (<Blogposts />); 
            case views.ADD:
                return (<AddBlogPost handleChangeViewClick={handleChangeViewClick} />);
            case views.EDIT:
                return 'Edit Mock';
            case views.DELETE:
                return (<DeletePosts handleChangeViewClick={handleChangeViewClick} />);
            case views.IMPORT:
                return (<ImportDatabase handleChangeViewClick={handleChangeViewClick} />);
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