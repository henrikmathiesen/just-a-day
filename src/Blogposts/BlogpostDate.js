import { displayDate } from '../services/util.service';

function BlogpostDate({ pDate }) {
    return (
        <span className="app-badge app-badge-responsive badge badge-secondary">{displayDate(pDate)}</span>
    );
}

export default BlogpostDate;