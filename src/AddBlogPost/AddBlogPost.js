import { useState, useRef, useEffect } from 'react';

import { blogpostCategories, views } from '../constants/constants';
import { addPost, getPostById, updatePost } from '../services/posts.service';
import { postIsValid, handleCheckbox } from '../services/util.service';
import ValidationErrors from '../ValidationErrors/ValidationErrors';

import './AddBlogPost.css';

function AddBlogPost({ setView, idToEdit, setIdToEdit }) {

    const [header, setHeader] = useState('');
    const [body, setBody] = useState('');
    const [categories, setCategories,] = useState([]);
    const [rating, setRating] = useState(0);
    const [checkedState, setCheckedState] = useState(new Array(getCats().length).fill(false));
    const [triedSubmit, setTriedSubmit] = useState(false);
    const [errors, setErrors] = useState([]);

    const headerInputRef = useRef(null);
    const bodyInputRef = useRef(null);
    const ratingInputRef = useRef(0);

    let postToEdit = {};

    useEffect(() => {

        if (idToEdit !== 0) {

            //
            // EDITMODE: Update header and body

            headerInputRef.current.value = postToEdit.header;
            bodyInputRef.current.value = postToEdit.body;

            setHeader(postToEdit.header);
            setBody(postToEdit.body);

            //
            // EDITMODE: Update checkboxes

            const newCheckboxState = new Array(getCats().length).fill(false);
            const newCategories = [];
            getCats().forEach((value, index) => {
                postToEdit.categories.forEach((v, i) => {
                    if (value.label === v) {
                        newCheckboxState[index] = true;
                        newCategories.push(v);
                    }
                })
            });
            setCheckedState(newCheckboxState);
            setCategories(newCategories);

            //
            // EDITMODE: Update rating

            ratingInputRef.current.value = postToEdit.rating;
            setRating(postToEdit.rating);

        }

    }, [idToEdit, postToEdit.header, postToEdit.body, postToEdit.rating, postToEdit.categories]);

    if (idToEdit !== 0) {
        postToEdit = getPostById(idToEdit);
    }

    function getCats() {
        const cats = [];

        Object.keys(blogpostCategories).forEach((key) => {
            cats.push({ id: key, label: blogpostCategories[key] });
        });

        return cats;
    }

    function handleCheckboxClick(e, label, i) {
        handleSetCheckedState(i);

        const newCats = handleCheckbox(e, label, categories);
        setCategories(newCats);
    }

    function handleSetCheckedState(i) {
        const updatedCheckedState = checkedState.map((shouldCheck, index) => {
            return index === i ? !shouldCheck : shouldCheck
        });

        setCheckedState(updatedCheckedState);
    }

    const handleSubmit = () => {
        setTriedSubmit(true);

        const post = { categories, header, body, rating: parseInt(rating, 10) };
        const isValid = postIsValid(post);

        if (isValid === true) {
            setErrors([]);

            if (idToEdit !== 0) {
                updatePost({ id: postToEdit.id, pDate: postToEdit.pDate, ...post });
            } else {
                addPost(post);
            }

            setIdToEdit(0);
            setView(views.BLOG);
        } else {
            setErrors(isValid);
        }
    };

    return (
        <>
            <h2>Add Post</h2>

            {(!!errors.length && triedSubmit) && <ValidationErrors errors={errors} />}

            <div className="row mt-4">
                <div className="col-md-8">
                    <div className="form-group">
                        <label htmlFor="header">Header</label>
                        <input type="text" id="header" className="form-control" onChange={(e) => setHeader(e.target.value)} ref={headerInputRef}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Body</label>
                        <textarea id="body" className="form-control app-textarea" onChange={(e) => setBody(e.target.value)} ref={bodyInputRef}></textarea>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    {
                        getCats().map((c, i) => (

                            <div className="form-check form-check-inline" key={c.id}>
                                <input className="form-check-input" type="checkbox" value={c.label} id={c.id}
                                    onChange={(e) => { handleCheckboxClick(e, c.label, i) }} checked={checkedState[i]} />
                                <label className="form-check-label" htmlFor={c.id}>
                                    {c.label}
                                </label>
                            </div>

                        ))
                    }
                </div>
                <div className="col-md-1 mt-3 mt-md-1">
                    <select className="form-control app-add-blog-post-rating" onChange={(e) => setRating(e.target.value)} ref={ratingInputRef}>
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
                        <button type="button" className="btn btn-success btn-block" onClick={handleSubmit}>
                            { idToEdit !== 0 ? 'Update it' : 'Add it!' }
                        </button>
                    </div>
                </div>
            </div>
        </>
    );

}

export default AddBlogPost;