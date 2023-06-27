import Blogposts from '../Blogposts/Blogposts.js';
import AddBlogPosts from '../AddBlogPost/AddBlogPost.js';

function Main({ view }) {

    const viewToShow = () => {
        switch (view) {
            case 'Add':
                return (<AddBlogPosts />);
            case 'Edit':
                return 'Edit Mock';
            case 'Delete':
                return 'Delete Mock';
            case 'Import':
                return 'Import Mock';
            case 'Export':
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