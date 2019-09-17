import React from 'react';

const FormContact = () => {
    return(
        <div>
            <div className="section section-contacts">
                    <div className="row">
                        <div className="col-md-8 ml-auto mr-auto">
                            <h2 className="text-center title">Drop Us A Line</h2>
                            <h4 className="text-center description">We would be glad to reach out to you! Kindly share your contact details.
                                Alternately you can write to us at <a href="mailto:info@prgist.in">info@prgist.in</a> ​</h4><br/>
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

                                <div className="form-group">
                                    <label htmlFor="exampleMessage" className="bmd-label-floating">Your Message</label>
                                    <textarea type="email" className="form-control" rows={4} id="exampleMessage" defaultValue={""} />
                                </div>
                                <div className="row">
                                    <div className="col-md-4 ml-auto mr-auto text-center">
                                    <button className="btn btn-primary btn-raised">
                                        Send Message
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

export default FormContact;