import BlogpostDate from './BlogpostDate';
import BlogpostRating from './BlogpostRating';
import BlogpostCategories from './BlogpostCategories';

function Blogpost({ post }) {

  const { categories, header, body, pDate, rating } = post;

  return (
    <article className="app-blog-post">
      <h2 className="h3">{header}</h2>
      <p>{body}</p>
      <div className="row">
        <div className="col text-left">
          <BlogpostDate pDate={pDate} />
          <BlogpostRating rating={rating} />
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