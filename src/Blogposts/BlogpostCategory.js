import { blogpostCategories } from '../constants/constants';

function BlogpostCategory({ category, makeResponsive = true }) {

    const getClassNameForCategory = (cat) => {

        let cssClass = `app-badge${makeResponsive ? ' app-badge-responsive': ''} badge `;

        switch (cat) {
            case blogpostCategories.HUMAN_RELATIONS:
            case blogpostCategories.WORK:
            case blogpostCategories.OTHER:
                cssClass += 'badge-info';
                break;
            case blogpostCategories.MENTAL_FITNESS:
            case blogpostCategories.PHYSICAL_FITNESS:
                cssClass += 'badge-dark';
                break;
            default:
                cssClass = 'error';
        }

        return cssClass;
    }

    return (
        <span className={getClassNameForCategory(category)}>{category}</span>
    );

}

export default BlogpostCategory;