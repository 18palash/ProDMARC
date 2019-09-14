import React from 'react';
import './Mapstyle.css';

const MapContact = () => {
    return(
        <div>
            <div className="section section-contacts">
            <div className="col-md-8 ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7535.9510646192675!2d72.956635!3d19.196271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b90ff44c61d1%3A0xd5aafd0e7cfdd0fd!2sSun%20Infotech%20Park%2C%20Neheru%20Nagar%2C%20Wagle%20Industrial%20Estate%2C%20Thane%20West%2C%20Thane%2C%20Maharashtra%20400604!5e0!3m2!1sen!2sin!4v1568490721687!5m2!1sen!2sin" style={{border: 0}} allowFullScreen width={900} height={450} frameBorder={0} />
            </div>
            </div>
        </div>
    );
}

export default MapContact;