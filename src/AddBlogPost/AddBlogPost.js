import { useState } from 'react';

import { blogpostCategories, views } from '../constants/constants';
import { addPost } from '../services/posts.service';
import { postIsValid } from '../services/util.service';
import ValidationErrors from './ValidationErrors';

import './AddBlogPost.css';

function AddBlogPost({ handleChangeViewClick }) {

    const [header, setHeader] = useState('');
    const [body, setBody] = useState('');
    const [categories, setCategories,] = useState([]);
    const [rating, setRating] = useState(0);
    const [triedSubmit, setTriedSubmit] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);

    const getCats = () => {
        const cats = [];

        Object.keys(blogpostCategories).forEach((key) => {
            cats.push({ id: key, label: blogpostCategories[key] });
        });

        return cats;
    };

    const handleCheckbox = (e, label) => {
        const ischecked = e.currentTarget.checked;
        const exists = categories.includes(label);

        let newCats = [];

        if (ischecked) {
            if (!exists) {
                newCats = [...categories, label];
            } else {
                newCats = [...categories];
            }
        }

        if (!ischecked) {
            if (!exists) {
                newCats = [...categories];
            } else {
                newCats = categories.filter(c => c !== label);
            }
        }

        setCategories(newCats);
    }

    const handleSubmit = () => {
        setTriedSubmit(true);

        const post = { categories, header, body, rating: parseInt(rating, 10) };
        const isValid = postIsValid(post);

        if (isValid === true) {
            setFormIsValid(true);
            addPost(post);
            handleChangeViewClick(views.BLOG);
        } else {
            setFormIsValid(false);
        }
    };

    return (
        <>
            <h2>Add Post</h2>

            { (!formIsValid && triedSubmit) && <ValidationErrors /> }

            <div className="row mt-4">
                <div className="col-md-8">
                    <div className="form-group">
                        <label htmlFor="header">Header</label>
                        <input type="text" id="header" className="form-control" onChange={(e) => setHeader(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Body</label>
                        <textarea id="body" className="form-control app-textarea" onChange={(e) => setBody(e.target.value)}></textarea>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    {
                        getCats().map((c) => (

                            <div className="form-check form-check-inline" key={c.id}>
                                <input className="form-check-input" type="checkbox" value={c.label} id={c.id}
                                    onChange={(e) => { handleCheckbox(e, c.label) }} />
                                <label className="form-check-label" htmlFor={c.id}>
                                    {c.label}
                                </label>
                            </div>

                        ))
                    }
                </div>
                <div className="col-md-1 mt-3 mt-md-1">
                    <select className="form-control app-add-blog-post-rating" defaultValue="0" onChange={(e) => setRating(e.target.value)}>
                        <option value="0">R</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="col-md-3 mt-3 mt-md-1">
                    <div className="form-group">
                        <button type="button" className="btn btn-success btn-block" onClick={handleSubmit}>Add it!</button>
                    </div>
                </div>
            </div>
        </>
    );

}

export default AddBlogPost;