import { useState, useRef, useEffect } from 'react';

import { views, blogpostCategories, ratings } from '../constants/constants';
import { getCategoriesAsArray } from '../services/util.service';

import './Nav.css';

function Nav({ view, setView, setFilterByRating, setFilterByCategory, filterByRating, filterByCategory }) {

  const blogButtonRef = useRef();
  const addButtonRef = useRef();

  const [showAdmin, setShowAdmin] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {

    //
    // Set focus when redirect

    if (view === views.BLOG) {
      blogButtonRef.current.focus();
    }

    if (view === views.ADD) {
      addButtonRef.current.focus();
    }

    //
    // Hide filter controls if view is not blog

    if (view !== views.BLOG) {
      setShowFilter(false);
    }

  }, [view]);

  useEffect(() => {

    if (showFilter === false) {
      // When showFilter is false and then true, the value is reset in GUI, need to keep state in sync
      setFilterByRating(0);
      setFilterByCategory(0);
    }

  }, [showFilter]);

  const handleAdminClick = () => {
    if (showFilter) {
      setShowFilter(false);
    }

    setShowAdmin(!showAdmin);
  }

  const handleFilterClick = () => {
    if (showAdmin) {
      setShowAdmin(false);
    }

    setShowFilter(!showFilter);
  }

  return (
    <nav className="row flex-shrink-0 bg-light py-4">
      <div className="col-lg-auto">
        <button type="button" className="btn btn-outline-success mr-2" ref={blogButtonRef} onClick={() => { setView(views.BLOG) }}>{views.BLOG}</button>
        <button type="button" className="btn btn-outline-primary mr-2" ref={addButtonRef} onClick={() => { setView(views.ADD) }}>{views.ADD}</button>
        <button type="button" className="btn btn-outline-secondary mr-2" onClick={handleAdminClick}>Admin</button>
        <button type="button" className="btn btn-outline-secondary" onClick={handleFilterClick} disabled={view !== views.BLOG}>Filter</button>
      </div>
      <div className="col-lg mt-3 mt-lg-0 text-lg-right app-admin-buttons-container">
        {
          showAdmin &&
          <>
            <button type="button" className="btn btn-outline-warning mr-2" onClick={() => { setView(views.EDIT) }}>{views.EDIT}</button>
            <button type="button" className="btn btn-outline-danger mr-2" onClick={() => { setView(views.DELETE) }}>{views.DELETE}</button>
            <button type="button" className="btn btn-outline-info mr-2" onClick={() => { setView(views.STATS) }}>{views.STATS}</button>
            <button type="button" className="btn btn-outline-dark mr-2" onClick={() => { setView(views.IMPORT) }}>{views.IMPORT}</button>
            <button type="button" className="btn btn-outline-dark" onClick={() => { setView(views.EXPORT) }}>{views.EXPORT}</button>
          </>
        }
        {
          showFilter &&
          <div className="form-inline justify-content-lg-end">
            <select id="filter-rating" defaultValue="0" className="form-control mr-2" onChange={(e) => setFilterByRating(e.target.value)} disabled={filterByCategory != 0}>
              <option value="0">R</option>
              {
                ratings.map(n => (<option key={n} value={n}>{n}</option>))
              }
            </select>
            <select id="filter-category" defaultValue="0" className="form-control" onChange={(e) => setFilterByCategory(e.target.value)} disabled={filterByRating != 0}>
              <option value="0">Select</option>
              {
                getCategoriesAsArray(blogpostCategories).map(s => (<option key={s} value={s}>{s}</option>))
              }
            </select>
          </div>
        }
      </div>
    </nav>
  );
}

export default Nav;