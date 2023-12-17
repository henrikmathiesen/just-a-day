import Blogposts from '../Blogposts/Blogposts.js';
import AddBlogPost from '../AddBlogPost/AddBlogPost.js';
import ExportDatabase from '../ExportDatabase/ExportDatabase.js';
import ImportDatabase from '../ImportDatabase/ImportDatabase.js';
import DeletePosts from '../DeletePosts/DeletePosts.js';
import EditPost from '../EditPost/EditPost.js';
import { views } from '../constants/constants';

function Main({ view, setView, setIdToEdit, idToEdit, filterByRating, filterByCategory }) {

    const viewToShow = () => {
        switch (view) {
            case views.BLOG:
                return (<Blogposts filterByRating={filterByRating} filterByCategory={filterByCategory} />);
            case views.ADD:
                return (<AddBlogPost setView={setView} idToEdit={idToEdit} setIdToEdit={setIdToEdit} />);
            case views.EDIT:
                return (<EditPost setView={setView} setIdToEdit={setIdToEdit} />);
            case views.DELETE:
                return (<DeletePosts setView={setView} />);
            case views.IMPORT:
                return (<ImportDatabase setView={setView} />);
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