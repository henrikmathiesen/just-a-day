import Blogposts from '../Blogposts/Blogposts.js';

function Main({view}) {

  return (
      <main className="row flex-grow-1 bg-light">
        <div className="col">
            {view}
           <Blogposts />
        </div>
      </main>
  );
}

export default Main;