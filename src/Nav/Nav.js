import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

import './Nav.css';

function Nav({ handleChangeViewClick }) {

const blogButtonRef = useRef();
useEffect(() => {
        blogButtonRef.current.focus();
}, []);

const [showAdmin, setShowAdmin] = useState(false);
const handleAdminClick = () => setShowAdmin(!showAdmin);

  return (
      <nav className="row flex-shrink-0 bg-light py-4">
        <div className="col-lg-auto">
           <button type="button" className="btn btn-outline-success mr-2" ref={blogButtonRef} onClick={() => {handleChangeViewClick('Blog')}}>Blog</button>
           <button type="button" className="btn btn-outline-primary mr-2" onClick={() => {handleChangeViewClick('Add')}}>Add Post</button>
           <button type="button" className="btn btn-outline-secondary" onClick={handleAdminClick}>Toggle Admin</button>
        </div>
        <div className="col-lg mt-3 mt-lg-0 text-lg-right app-admin-buttons-container">
        	{
        		showAdmin &&
        		<>
        			<button type="button" className="btn btn-outline-warning mr-2" onClick={() => {handleChangeViewClick('Edit')}}>Edit Post</button>
           			<button type="button" className="btn btn-outline-danger mr-2" onClick={() => {handleChangeViewClick('Delete')}}>Delete Post</button>
        			<button type="button" className="btn btn-outline-dark mr-2" onClick={() => {handleChangeViewClick('Import')}}>Import Database</button>
        			<button type="button" className="btn btn-outline-dark" onClick={() => {handleChangeViewClick('Export')}}>Export Database</button>
        		</>
        	}
        </div>
      </nav>
  );
}

export default Nav;