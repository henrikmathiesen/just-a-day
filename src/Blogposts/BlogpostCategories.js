import { blogpostCategories } from '../constants/constants';

function BlogpostCategories({ categories }) {

    const getClassNameForCategory = (category) => {

        let cssClass = 'app-badge app-badge-responsive badge ';

        switch (category) {
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
        <>
            { categories.map((c) => (<span className={getClassNameForCategory(c)} key={c}>{c}</span>)) }
        </>
    );

}

export default BlogpostCategories;