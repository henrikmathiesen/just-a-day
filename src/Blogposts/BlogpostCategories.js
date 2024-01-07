import BlogpostCategory from './BlogpostCategory.js';

function BlogpostCategories({ categories }) {

    return (
        <>
            { categories.map((c) => (<BlogpostCategory category={c} key={c} />)) }
        </>
    );

}

export default BlogpostCategories;