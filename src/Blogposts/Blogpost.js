import BlogpostCategory from '../BlogpostCategory/BlogpostCategory';
import utilService from '../services/util.service';

function Blogpost({ post }) {

  const { category, header, paragraph, pDate } = post;

  return (
    <article className="app-blog-post">
      <h2 className="h3">{header}</h2>
      <p>{paragraph}</p>
      <div className="row">
        <div className="col text-left">{utilService.displayDate(pDate)}</div>
        <div className="col text-right"><BlogpostCategory category={category} /></div>
      </div>
      <hr />
    </article>
  );
}

export default Blogpost;