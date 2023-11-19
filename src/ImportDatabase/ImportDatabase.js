import { useState } from 'react';
import { views } from '../constants/constants';
import { importDb } from '../services/posts.service';
import { postIsValid } from '../services/util.service';
import ValidationErrors from '../ValidationErrors/ValidationErrors';

function ImportDatabase({ setView }) {

    const [triedSubmit, setTriedSubmit] = useState(false);
    const [errors, setErrors] = useState([]);

    let jsonData;

    const handleSubmit = () => {
        setTriedSubmit(true);
        setErrors([]);

        let testValidJson;

        try {
            testValidJson = JSON.parse(jsonData);
        } catch {
            setErrors(['Invalid JSON']);
            return;
        }

        let testValidJsonIsAnArray = !!testValidJson.length;

        if (!testValidJsonIsAnArray) {
            setErrors(['JSON data needs to be an array']);
            return;
        }

        let everyPostIsValid = testValidJson.every((post) => {
            return postIsValid(post) === true;
        });

        let everyPostHasADate = testValidJson.every((post) => { 
            return !!post.pDate;
        });

        if (!everyPostIsValid || !everyPostHasADate) {
            setErrors(['One or more objects are invalid', 'Provide { body, categories, header, id, pDate, rating }']);
            return;
        }

        importDb(jsonData);
        setView(views.BLOG);
    };

    return (
        <>
            <h2>Import Database</h2>

            {(!!errors.length && triedSubmit) && <ValidationErrors errors={errors} fullwidth={true} />}

            <div className="row mt-4">
                <div className="col">
                    <div className="form-group">
                        <textarea id="post" className="form-control app-textarea" onChange={(e) => jsonData = e.target.value}></textarea>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8"></div>
                <div className="col-md-4 mt-2 mt-md-1">
                    <div className="form-group">
                        <button type="button" className="btn btn-success btn-block" onClick={handleSubmit}>Add it!</button>
                    </div>
                </div>
            </div>
        </>
    );

}

export default ImportDatabase;