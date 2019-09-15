import React from 'react';

const Trial = () => {
    return(
        <div>
            <div className="section section-contacts">
                    <div className="row">
                        <div className="col-md-8 ml-auto mr-auto">
                            <h3 className="text-center title">Register for a 15-days free trial. Alternately you can reach us at info@progist.in</h3>
                            <h4 className="text-center description"> ​</h4><br/>
                            <form className="contact-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">First Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Last Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Corporate Email</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Contact Number</label>
                                            <input type="number" className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Organisation</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Country</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" defaultValue  /> Request a free trial
                                        <span className="form-check-sign">
                                            <span className="check" />
                                        </span>
                                    </label>
                                </div>
                                                            
                                <div className="row">
                                    <div className="col-md-4 ml-auto mr-auto text-center">
                                    <button className="btn btn-primary btn-raised">
                                        Submit
                                    </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Trial;