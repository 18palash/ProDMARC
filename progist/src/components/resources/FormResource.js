import React from 'react';

const FormResource = () => {
    return(
        <div>
            <div className="section section-contacts">
                    <div className="row">
                        <div className="col-md-8 ml-auto mr-auto">
                            <h2 className="text-center title">Phishing threat and DMARC approach</h2>
                            <h4 className="text-center description">Fill out the form to view and download a 
                            whitepaper on domain spoofed phishing threat which DMARC can help organisations to 
                            combat and how ProDMARC platform could help you. ​</h4><br/>
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

export default FormResource;