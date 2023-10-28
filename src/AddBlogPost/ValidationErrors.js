function ValidationErrors() {

    return (
        <div className="row mt-4">
            <div className="col-md-8">
                <div className="alert alert-danger">
                    <h3 className="h4">Validation Error</h3>
                    <p>All fields are required</p>
                </div>
            </div>
        </div>
    );

}

export default ValidationErrors;