import BlogpostCategories from '../BlogpostCategories/BlogpostCategories';
import utilService from '../services/util.service';

function Blogpost({ post }) {

  const { categories, header, paragraph, pDate, rating } = post;

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
    <article className="app-blog-post">
      <h2 className="h3">{header}</h2>
      <p>{paragraph}</p>
      <div className="row">
        <div className="col text-left">
          <span className="app-badge badge badge-secondary">{utilService.displayDate(pDate)}</span>
          <span className={getClassNameForRating(rating)}>{rating}</span>
        </div>
        <div className="col text-right">
          <BlogpostCategories categories={categories} />
        </div>
      </div>
      <hr />
    </article>
  );
}

export default Blogpost;