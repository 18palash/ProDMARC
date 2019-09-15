import React from 'react';

const State = () => {
    return(
        <div className="card card-nav-tabs">
            <div className="card-header card-header-primary">
            {/* colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" */}
                <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                        <ul className="nav nav-tabs" data-tabs="tabs">
                            <li className="nav-item">
                                <a className="nav-link active" href="#Problem" data-toggle="tab">
                                    Problem
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Solution" data-toggle="tab">
                                    Solution
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#DMARC" data-toggle="tab">
                                    DMARC
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#SPF" data-toggle="tab">
                                    SPF
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#DKIM" data-toggle="tab">
                                    DKIM
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="card-body ">
                <div className="tab-content text-center">
                    <div className="tab-pane active" id="Problem">
                        <p className="h3"> As you grow your business you attract fraudsters who tend to use your brand value 
                            for their benefit. One of the major channels they use to abuse your brand name
                             is email. Email based phishing attacks have reached its peak in recent years and 
                             will have adverse effect in the Internet space in the years to come.</p>
                    </div>
                    <div className="tab-pane" id="Solution">
                        <p className="h3"> The best and most effective solution to protect your brand from advanced email based
                             phishing attack is by incorporating DMARC to protect your email domains.​</p>
                    </div>
                    <div className="tab-pane" id="DMARC">
                        <p className="h3">DMARC (Domain-based Message Authentication, Reporting and Conformance) is an email validation 
                            protocol which is built upon two globally accepted email authentication protocols namely SPF and DKIM.</p>
                        <p className="h3">Every day, more and more organisations are joining the DMARC consortium and it is rapidly being 
                            adopted across all industries including Banking, financial services and insurance (BFSI), 
                            Payment/E-Commerce, Telecom, Manufacturing etc.</p>
                    </div>
                    <div className="tab-pane" id="SPF">
                        <p className="h3">SPF (Sender Policy Framework) is an email validation protocol which identifies email spoofing by 
                            allowing the receiving mail server to check if the sender is authorized by the email domain 
                            administrator to send emails for the specific email domain.​</p>
                    </div>
                    <div className="tab-pane" id="DKIM">
                        <p className="h3">DKIM (DomainKeys Identified Mail) is an email validation protocol that validates sending domain names 
                            associated to email messages through cryptographic authentication by means of public and private key pair.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default State;