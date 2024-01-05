function Rating({ rating }) {

    const getClassNameForRating = (rating) => {
        switch (rating) {
            case 1:
            case 2:
                return 'app-badge badge badge-danger';
            case 3:
            case 4:
                return 'app-badge badge badge-warning';
            case 5:
                return 'app-badge badge badge-success';
            default:
                return 'error';
        }
    }
    
    return (
        <span className={getClassNameForRating(rating)}>{rating}</span>
    );

}

export default Rating;