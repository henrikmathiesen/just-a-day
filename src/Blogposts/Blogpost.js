function Blogpost({ post }) {

const { header, paragraph, pDate } = post;

  return (
    <article>
    	<hr />
    	<h2 className="h3">{header}</h2>
    	<p>{paragraph}</p>
    	<p>{pDate}</p>
    </article>
  );
}

export default Blogpost;