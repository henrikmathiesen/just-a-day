import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

import { views } from '../constants/constants';

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
        <button type="button" className="btn btn-outline-success mr-2" ref={blogButtonRef} onClick={() => { handleChangeViewClick(views.BLOG) }}>{views.BLOG}</button>
        <button type="button" className="btn btn-outline-primary mr-2" onClick={() => { handleChangeViewClick(views.ADD) }}>{views.ADD}</button>
        <button type="button" className="btn btn-outline-secondary" onClick={handleAdminClick}>Toggle Admin</button>
      </div>
      <div className="col-lg mt-3 mt-lg-0 text-lg-right app-admin-buttons-container">
        {
          showAdmin &&
          <>
            <button type="button" className="btn btn-outline-warning mr-2" onClick={() => { handleChangeViewClick(views.EDIT) }}>{views.EDIT}</button>
            <button type="button" className="btn btn-outline-danger mr-2" onClick={() => { handleChangeViewClick(views.DELETE) }}>{views.DELETE}</button>
            <button type="button" className="btn btn-outline-dark mr-2" onClick={() => { handleChangeViewClick(views.IMPORT) }}>{views.IMPORT}</button>
            <button type="button" className="btn btn-outline-dark" onClick={() => { handleChangeViewClick(views.EXPORT) }}>{views.EXPORT}</button>
          </>
        }
      </div>
    </nav>
  );
}

export default Nav;