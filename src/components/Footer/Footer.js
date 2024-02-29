import React from "react";
import './Footer.css'

import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className='section footer'>
            <div className='container'>
                <div className='grid-container'>
                    <div className='footer-grid-item'>
                        <h3>BloomTech Pizza</h3>
                        <p>1234 Bloom Ave</p>
                        <p>NotRealVille, NA, United States</p>
                        <p>(555) 123 4567</p>
                        <Link to="#" className='text-white'>
                            notarealemail@bloomtechpizza.com
                        </Link>
                    </div>
                    <div className='footer-grid-item'>
                        <h3>BloomTech Pizza</h3>
                        <p>1001 Coders Lane</p>
                        <p>Javascript, JS, United States</p>
                        <p>(555) 123 4567</p>
                        <Link to="#" className='text-white'>
                            javascript@bloomtechpizza.com
                        </Link>
                    </div>
                    <div className='footer-grid-item'>
                        <h3>BloomTech Pizza</h3>
                        <p>0101 React Rd</p>
                        <p>ReactJs, RJ, United States</p>
                        <p>(555) 123 4567</p>
                        <Link to="#" className='text-white'>
                            reactjs@bloomtechpizza.com
                        </Link>
                    </div>
                    <div className='footer-grid-item'>
                        <h3>BloomTech Pizza</h3>
                        <p>0000 HTML Hwy</p>
                        <p>Stylesheets, CSS, United States</p>
                        <p>(555) 123 4567</p>
                        <Link to="#" className='text-white'>
                            htmlcss@bloomtechpizza.com
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer