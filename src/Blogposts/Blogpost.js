import utilService from "../services/util.service";

function Blogpost({ post }) {

  const { header, paragraph, pDate } = post;

  return (
    <article className="app-blog-post">
      <h2 className="h3">{header}</h2>
      <p>{paragraph}</p>
      <p>{utilService.displayDate(pDate)}</p>
      <hr />
    </article>
  );
}

export default Blogpost;