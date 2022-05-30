import React from 'react'
import Logo from '../assets/Logo.svg';
import checkmark from '../assets/Checkmark.svg';
import { NavLink } from 'react-router-dom';
import partner1 from '../assets/Airbnb.svg'
import partner2 from '../assets/Booking.svg'
import partner3 from '../assets/Plum Guide.svg'
import HomeImg from '../assets/hero_image.jpg'
import HomeImg2 from '../assets/hero_image_tablet_mobile.jpg'


export const Home = () => {
    return (
        <div>
            <div className="container Home">
                <div className="row">
                    <div className="col-1">
                        <div className="head">
                            <NavLink className="logo" to="/">
                                <img src={Logo} alt="" />
                            </NavLink>
                        </div>

                        <div className="responsive-hero">
                            <img src={HomeImg2} alt="" />
                        </div>
                        <div className="content">
                            <h2>Explore the best <br />camp on Earth.</h2>
                            <div className="text">YelpCamp is a curated list of the best camping spot on Earth. Unfiltered and unbiased reviews.</div>
                            <div className="list">
                                <img src={checkmark} alt="" />
                                <span>Add your own camp suggestions.</span>
                            </div>
                            <div className="list">
                                <img src={checkmark} alt="" />
                                <span>Leave reviews and experience.</span>
                            </div>
                            <div className="list">
                                <img src={checkmark} alt="" />
                                <span>see location for all camps.</span>
                            </div>
                            <NavLink className="btn" to="./Camps">View Campgrounds</NavLink>
                            <div className="content2">
                            <h5>Partnered with:</h5>
                            <div className="partners">
                                <img src={partner1} alt="" />
                                <img src={partner2} alt="" />
                                <img src={partner3} alt="" />
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    <div className="col-1 hero">
                        <img src={HomeImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Home;
