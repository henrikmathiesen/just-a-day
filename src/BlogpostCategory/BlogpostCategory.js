import { blogpostCategories } from '../constants/constants';

function BlogpostCategory({ category }) {

    let className = 'app-badge badge ';

    switch (category) {
        case blogpostCategories.FINANCE:
        case blogpostCategories.PROGRAMMING:
        case blogpostCategories.OTHER:
            className += 'badge-info';
            break;
        case blogpostCategories.MENTAL_HEALTH:
        case blogpostCategories.PHYSICAL_HEALTH:
            className += 'badge-dark';
            break;
        default:
            className += 'error';
            break;
    }

    return (
        <span className={className}>{category}</span>
    );

}

export default BlogpostCategory;