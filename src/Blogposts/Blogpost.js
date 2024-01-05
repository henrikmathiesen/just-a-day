import BlogpostCategories from './BlogpostCategories';
import Rating from './Rating';
import { displayDate } from '../services/util.service';

function Blogpost({ post }) {

  const { categories, header, body, pDate, rating } = post;

  return (
    <article className="app-blog-post">
      <h2 className="h3">{header}</h2>
      <p>{body}</p>
      <div className="row">
        <div className="col text-left">
          <span className="app-badge badge badge-secondary">{displayDate(pDate)}</span>
          <Rating rating={rating} />
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