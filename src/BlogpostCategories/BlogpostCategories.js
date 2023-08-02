import { blogpostCategories } from '../constants/constants';

function BlogpostCategories({ categories }) {

    const getClassNameForCategory = (category) => {
        switch (category) {
            case blogpostCategories.HUMAN_RELATIONS:
            case blogpostCategories.WORK:
            case blogpostCategories.OTHER:
                return 'app-badge badge badge-info';
            case blogpostCategories.MENTAL_FITNESS:
            case blogpostCategories.PHYSICAL_FITNESS:
                return 'app-badge badge badge-dark';
            default:
                return 'error';
        }
    }

    return (
        <>
            { categories.map((c) => (<span className={getClassNameForCategory(c)} key={c}>{c}</span>)) }
        </>
    );

}

export default BlogpostCategories;