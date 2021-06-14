import React from 'react';
import about from '../img/Vinojithan.jpeg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Vinojithan</span></h4>
                <p className="about-text">
                Ability to develop and maintain front and backend code to a high standard and to agreed timescales  
                Ability to review other developers' solutions and code  
                Ability to provide clear regular progress updates to managers and stakeholders  Ability to produce a detail-oriented  
                Able to act as first-line technical support for issues and bugs  
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Country</p>
                    </div>
                    <div className="right-section">
                        <p>: Tharmakulthevan Vinojithan</p>
                        <p>: 25</p>
                        <p>: Srilankan Tamil</p>
                        <p>: Tamil, Sinhala, English</p>
                        <p>: 236/1 Madasamy kovil road, pandarikulam,Vauniya</p>
                        <p>: Srilankan</p>
                    </div>
                </div>
                {/* <button className="btn">Download Cv</button> */}
            </div>
        </div>
    )
}

export default ImageSection;
