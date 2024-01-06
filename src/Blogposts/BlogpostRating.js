function BlogpostRating({ rating, makeResponsive = true }) {

    const getClassNameForRating = (rating) => {

        let cssClass = `app-badge${makeResponsive ? ' app-badge-responsive': ''} badge `;

        switch (rating) {
            case 1:
            case 2:
                cssClass += 'badge-danger';
                break;
            case 3:
            case 4:
                cssClass += 'badge-warning';
                break;
            case 5:
                cssClass += 'badge-success';
                break;
            default:
                cssClass = 'error';
        }

        return cssClass;
    }
    
    return (
        <span className={getClassNameForRating(rating)}>{rating}</span>
    );

}

export default BlogpostRating;