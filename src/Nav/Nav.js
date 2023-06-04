import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

import './Nav.css';

function Nav() {

const blogButtonRef = useRef();
useEffect(() => {
        blogButtonRef.current.focus();
}, []);

const [showAdmin, setShowAdmin] = useState(false);
const handleAdminClick = () => setShowAdmin(!showAdmin);

  return (
      <nav className="row flex-shrink-0 bg-light py-4">
        <div className="col-lg-auto">
           <button type="button" className="btn btn-outline-success mr-2" ref={blogButtonRef}>Blog</button>
           <button type="button" className="btn btn-outline-primary mr-2">Add Post</button>
           <button type="button" className="btn btn-outline-secondary" onClick={handleAdminClick}>Toggle Admin</button>
        </div>
        <div className="col-lg mt-3 mt-lg-0 text-lg-right app-admin-buttons-container">
        	{
        		showAdmin &&
        		<>
        			<button type="button" className="btn btn-outline-warning mr-2">Edit Post</button>
           			<button type="button" className="btn btn-outline-danger mr-2">Delete Post</button>
        			<button type="button" className="btn btn-outline-dark mr-2">Import Database</button>
        			<button type="button" className="btn btn-outline-dark">Export Database</button>
        		</>
        	}
        </div>
      </nav>
  );
}

export default Nav;