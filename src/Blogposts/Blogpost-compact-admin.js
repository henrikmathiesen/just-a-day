import { displayDate } from '../services/util.service.js';
import { views } from '../constants/constants.js';

import './Blogpost-compact-admin.css';

function BlogpostCompactAdmin({ post, fromView, index, checkedState, handleAdminButtonClick }) {

    const getButtonCssClass = () => fromView === views.EDIT ? 'btn-warning' : 'btn-danger';
    const getButtonLabel = () => fromView === views.EDIT ? 'EDIT' : 'MARK';

    const getRowCssClass = () => {
        if (fromView === views.EDIT) {
            return 'border-light';
        }

        return checkedState[index] ? 'border-danger' : 'border-light';
    };

    return (
        <>

            <div className="row app-blog-post-admin">
                <div className="col-md-10">
                    <div className={`row ml-0 mr-0 py-1 border ${getRowCssClass()}`}>
                        <div className="col-md-1">
                            {post.id}
                        </div>
                        <div className="col-md-3">
                            {displayDate(post.pDate)}
                        </div>
                        <div className="col-md-8">
                            {post.header}
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <button className={`btn btn-block btn-sm ${getButtonCssClass()}`} onClick={() => { handleAdminButtonClick(post.id, index) }}>
                        {getButtonLabel()}
                    </button>
                </div>
            </div>

        </>
    );

}

export default BlogpostCompactAdmin;