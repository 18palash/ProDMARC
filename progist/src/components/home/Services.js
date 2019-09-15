import React from 'react';

const Services = () => {
    return(
        <div>
            <div className="section text-center">
                <div className="row">
                    <div className="col-md-8 ml-auto mr-auto">
                        <h2 className="title">Services</h2>
                        
                    </div>
                </div>
                <div className="features">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="info">
                                <div className="icon icon-info">
                                <i className="material-icons">fingerprint</i>
                                </div>
                                <h4 className="info-title">Brand Protection</h4>
                                <p>Cybercriminals are constantly luring your customers into opening their phishing emails. 
                                    Block phishing emails from getting delivered to customer inboxes.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info">
                                <div className="icon icon-success">
                                <i className="material-icons">visibility</i>
                                </div>
                                <h4 className="info-title">Better Visibility</h4>
                                <p>Your email domain could be getting used on your behalf by third parties. 
                                    It’s important to gain visibility of unauthorized emails which might be getting 
                                    sent from your brand.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="info">
                                <div className="icon icon-danger">
                                <i className="material-icons">email</i>
                                </div>
                                <h4 className="info-title">Improve Deliverability</h4>
                                <p>Ensure that emails do not get blocked due to misconfigurations. 
                                    Make the best use of the customer email communication.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info">
                                <div className="icon icon-warning">
                                <i className="material-icons">security</i>
                                </div>
                                <h4 className="info-title">Threat Intelligence</h4>
                                <p>Generate actionable threat intelligence feeds for your security and 
                                    transaction monitoring systems. Block targeted attacks proactively.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;