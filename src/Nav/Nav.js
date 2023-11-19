import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

import { views } from '../constants/constants';

import './Nav.css';

function Nav({ view, setView }) {

  const blogButtonRef = useRef();
  const addButtonRef = useRef();
  useEffect(() => {

    //
    // Set focus when redirect

    if (view === views.BLOG) {
      blogButtonRef.current.focus();
    }

    if (view === views.ADD) {
      addButtonRef.current.focus();
    }

  }, [view]);

  const [showAdmin, setShowAdmin] = useState(false);
  const handleAdminClick = () => setShowAdmin(!showAdmin);

  return (
    <nav className="row flex-shrink-0 bg-light py-4">
      <div className="col-lg-auto">
        <button type="button" className="btn btn-outline-success mr-2" ref={blogButtonRef} onClick={() => { setView(views.BLOG) }}>{views.BLOG}</button>
        <button type="button" className="btn btn-outline-primary mr-2" ref={addButtonRef} onClick={() => { setView(views.ADD) }}>{views.ADD}</button>
        <button type="button" className="btn btn-outline-secondary" onClick={handleAdminClick}>Toggle Admin</button>
      </div>
      <div className="col-lg mt-3 mt-lg-0 text-lg-right app-admin-buttons-container">
        {
          showAdmin &&
          <>
            <button type="button" className="btn btn-outline-warning mr-2" onClick={() => { setView(views.EDIT) }}>{views.EDIT}</button>
            <button type="button" className="btn btn-outline-danger mr-2" onClick={() => { setView(views.DELETE) }}>{views.DELETE}</button>
            <button type="button" className="btn btn-outline-dark mr-2" onClick={() => { setView(views.IMPORT) }}>{views.IMPORT}</button>
            <button type="button" className="btn btn-outline-dark" onClick={() => { setView(views.EXPORT) }}>{views.EXPORT}</button>
          </>
        }
      </div>
    </nav>
  );
}

export default Nav;