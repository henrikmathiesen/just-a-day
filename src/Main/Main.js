import Blogpost from '../Blogpost/Blogpost.js';
import postsService from '../services/posts.service.js';

function Main() {

const posts = postsService.get();

  return (
      <main className="row flex-grow-1 bg-light">
        <div className="col">
           { posts.map((post) => ( <Blogpost post={post} key={post.id} /> )) }
        </div>
      </main>
  );
}

export default Main;