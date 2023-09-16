import { useState } from 'react';

import { views } from '../constants/constants';
import postsService from '../services/posts.service';

function ImportDatabase({ handleChangeViewClick }) {

    const [data, setData] = useState('');

    const handleSubmit = () => { 
        // TODO: validation
        postsService.import(data);
        handleChangeViewClick(views.BLOG);
    };

    return (
        <>
            <h2>Import Database</h2>
            <div className="row mt-4">
                <div className="col">
                    <div className="form-group">
                        <textarea id="post" className="form-control app-textarea" onChange={(e) => setData(e.target.value)}></textarea>
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