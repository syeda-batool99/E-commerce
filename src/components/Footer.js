import React from 'react';

function Footer(props) {
    return(
    <div>
        <div className="container">
            <div className="row justify-content-center" style={{backgroundColor:"#3A3A39"}}>             
                <div className="col-2 mt-2">
                    <h6>Our Products</h6>
                    <p><ul className="list-unstyled">
                        <li>Mouse</li>
                        <li>Keyboard</li>
                        <li>Combo</li>
                        <li>Mouse Pad</li>
                    </ul>
                    </p>
                </div>
                <div className="col-2 mt-2">
                <h6>Mouse</h6>
                    <p><ul className="list-unstyled">
                        <li>Oscar Optical</li>
                        <li>Oscar Lite Optical</li>
                    </ul>
                    </p> 
                </div>
                <div className="col-1 mt-2">
                <h6>Keyboard</h6>
                </div>
                <div className="col-1 mt-2">
                <h6>Combo</h6>
                </div>
                <div className="col-1 mt-2">
                <h6>Mouse Pad</h6>
                </div>
                <div className="col-2 mt-2">
                <h6>Support</h6>
                    <p><ul className="list-unstyled">
                        <li>Contact Us</li>
                        <li>Tech Support</li>
                        <li>Warranty</li>
                        <li>Download</li>
                    </ul>
                    </p>
                </div>
                <div className="col-2 mt-2">
                <h6>Company</h6>
                    <p><ul className="list-unstyled">
                        <li>About Us</li>
                    </ul>
                    </p>
                </div>
            </div>
            <div className="row text-center" >             
                <div className="col-12">
                    <p>© Copyright 2020 All Right Reserved</p>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default Footer;