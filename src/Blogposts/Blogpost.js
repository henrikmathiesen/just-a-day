import BlogpostCategories from '../BlogpostCategories/BlogpostCategories';
import utilService from '../services/util.service';

function Blogpost({ post }) {

  const { categories, header, paragraph, pDate } = post;

  return (
    <article className="app-blog-post">
      <h2 className="h3">{header}</h2>
      <p>{paragraph}</p>
      <div className="row">
        <div className="col text-left">{utilService.displayDate(pDate)}</div>
        <div className="col text-right"><BlogpostCategories categories={categories} /></div>
      </div>
      <hr />
    </article>
  );
}

export default Blogpost;