import { blogpostCategories } from '../constants/constants';

function BlogpostCategories({ categories }) {

    const getClassNameForCategory = (category) => {
        switch (category) {
            case blogpostCategories.FINANCE:
            case blogpostCategories.PROGRAMMING:
            case blogpostCategories.OTHER:
                return 'app-badge badge badge-info';
            case blogpostCategories.MENTAL_HEALTH:
            case blogpostCategories.PHYSICAL_HEALTH:
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