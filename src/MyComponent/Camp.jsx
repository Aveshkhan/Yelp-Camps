import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Logo from '../assets/Logo.svg';
import map from '../assets/Map.png';
import comment from '../assets/Chat Bubble.svg';
import camp1 from '../assets/Camp Images/Mount Ulap.jpg'


const Camp = () => {
    return (
        <div>
            <div className="container2">
                <Navbar />
                <div className="content5">
                    <div className="row">
                        <div className="map col-2">
                            <div className="box">
                                <img src={map} alt="" />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="box card2">
                                <img src={camp1} alt="" />
                                <div className="box-top">
                                    <h3>Mount Ulap</h3>
                                    <div className="text">$104.99/night</div>
                                </div>
                                <p>Mount Ulap is 7.7 kilometer moderately trafficked point-to-point trial located near Tuba, Benguet, Philippines that offers the chance to see wildlife and is rated as moderate. The trial is primarly used for hiking.</p>

                                <i>Submitted by Andrew Mike</i>
                            </div>
                            <div className="box">
                                <div className="review">
                                    <div className="review-top">
                                        <h5>Adam Jones</h5>
                                        <div className="time">13h ago</div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla magni cum quae vero, adipisicing elit. Nulla magni cum quae vero a repellendus.</p>
                                </div>
                                <div className="review">
                                    <div className="review-top">
                                        <h5>Adam Jones</h5>
                                        <div className="time">13h ago</div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur,adipisicing elit. Nulla magni cum quae vero adipisicing elit. Nulla magni cum quae vero, a repellendus.</p>
                                </div>
                                <div className="review">
                                    <div className="review-top">
                                        <h5>Adam Jones</h5>
                                        <div className="time">13h ago</div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur,adipisicing elit. Nulla magni cum quae vero adipisicing elit. Nulla magni cum quae vero, a repellendus.</p>
                                </div>
                                <NavLink to='#' className='btn'><img src={comment} alt="" /> Leave a Review</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <NavLink to="/">
                        <img src={Logo} alt="" />
                    </NavLink>
                </footer>
            </div>
        </div>
    )
}

export default Camp