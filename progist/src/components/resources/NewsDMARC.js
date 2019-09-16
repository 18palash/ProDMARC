import React from 'react';
import './timeline.css';
const NewsDMARC = () => {
    return(
        <div>
            <div className='card'>
                <div className="timeline">
                    <div className="containert left">
                        <div className="content">
                            <h2>January 9, 2018</h2>
                            <p>Email phishing attack on Florida Agency for Health Care Administration impacts 30,000 medicaid recipients. </p>
                        </div>
                    </div>
                    <div className="containert right">
                        <div className="content">
                            <h2>December 15, 2017</h2>
                            <p>Reserve Bank of India strongly recommended the banks to implement DMARC solution to protect their mail domains from Spoofing attacks.</p>
                        </div>
                    </div>
                    <div className="containert left">
                        <div className="content">
                            <h2>November 28, 2017</h2>
                            <p>NH-ISAC goals to have all its members deploy DMARC in 90 days.</p>
                        </div>
                    </div>
                    <div className="containert right">
                        <div className="content">
                            <h2>October 16, 2017</h2>
                            <p>The Department of Homeland Security (DHS) mandates all the Federal Agencies to implement DMARC with at minimum a DMARC policy of "p=none".</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsDMARC;