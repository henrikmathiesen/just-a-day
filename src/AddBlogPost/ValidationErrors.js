function ValidationErrors({ errors }) {

    const nrOfErrors = errors.length;

    return (
        <div className="row mt-4">
            <div className="col-md-8">
                <div className="alert alert-danger">
                    <h3 className="h4">Validation Error{ nrOfErrors > 1 ? 's': '' }</h3>
                    <ul className="mb-0">
                        { errors.map((e) => (<li key={e}>{e}</li>)) }
                    </ul>
                </div>
            </div>
        </div>
    );

}

export default ValidationErrors;