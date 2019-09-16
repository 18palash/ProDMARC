import React from 'react';

const Offering = () => {
    return(
        <div>
           

            <div className="col-md-14">
                <div className="card">
                    <div className="card-header card-header-text card-header-primary">
                        <div className="card-text">
                            <h3 className="card-title text-center">About ProDMARC</h3>
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="h4">ProDMARC is brainchild of technology leaders and experts in DMARC analytics and is 
                            the first ever Indian based DMARC analytic platform. It is built on a mission to 
                            achieve a secure and spoofing free email channels across all of internet space.</p>
                        <p className="h4">ProDMARC is recognized and adopted by several large financial organizations and is 
                            assisting them in protecting their brand and customer from advanced email phishing 
                            attacks</p>
                    </div>
                </div>
            </div>


            <div className="col-md-14">
                <div className="card">
                    <div className="card-header card-header-text card-header-primary">
                        <div className="card-text">
                            <h3 className="card-title text-center">ProgIST’s Offering - Consulting</h3>
                        </div>
                    </div>
                    <div className="card-body">
                    <p className="h4">ProgIST, through its functional and technical domain experts would ensure an end-to-end 
                            successful implementation of DMARC.</p>
                        <p className="h4">The DMARC experts would help the organisation to project manage the entire implementation 
                            including planning, DMARC configuration, monitoring and periodic review of the results.</p>
                            <p className="h4">ProDMARC provides the below insight and  intelligence which will help you secure your 
                            email domain.</p>
                        <ul>
                            <li><p className="h4">Tools for assisting SPF, DKIM and DMARC implementation.</p></li>
                            <li><p className="h4">Visibility of the sources of outbound mails viz. own,authorised third parties, SPAMers or Fraudsters</p></li>
                            <li><p className="h4">Volumes and trends of the outbound mails including that of phishing campaigns</p></li>
                            <li><p className="h4">Confirmation for reliability of the outbound mails in terms of SPF, DKIM & DMARC conformance</p></li>
                            <li><p className="h4">Key insights required for finalising the migration of DMARC from monitoring to block mode</p></li>
                            <li><p className="h4">Sample forensic data for the phishing fraud being attempted</p></li>
                        </ul>             
                    </div>
                </div>
            </div>





                
        </div>
    );
}

export default Offering;