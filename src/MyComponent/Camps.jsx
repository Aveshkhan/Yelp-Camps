import React from 'react'
import { NavLink } from 'react-router-dom';
import searchIcon from '../assets/Search Icon.svg';
import Card from './Card';
import camp1 from '../assets/Camp Images/Mount Ulap.jpg'
import camp2 from '../assets/Camp Images/Calaguas Island.jpg'
import camp3 from '../assets/Camp Images/Onay Beach.jpg'
import camp4 from '../assets/Camp Images/Seven Sisters Waterfall.jpg'
import camp5 from '../assets/Camp Images/Latik Riverside.jpg'
import camp6 from '../assets/Camp Images/Buloy Springs.jpg'
import Navbar from './Navbar';
import Logo from '../assets/Logo.svg';



const Camps = () => {
    return (
        <div>
            <div className="container2">
                <Navbar />
                <div className="Content4">
                    <h2>Welcome to YelpCamp!</h2>
                    <div className="text">View our hand-picked campgrounds from all over the world, or add your own.</div>
                    <div className="searchBar-content">
                        <div className="searchBar">
                            <img src={searchIcon} alt="" />
                            <input type="text" placeholder='Search for camps' />
                        </div>
                        <button className="btn">Search</button>
                    </div>
                    <NavLink className="U-link" to="#">Or add your own campground</NavLink>
                </div>

                <div className="cards">
                    <Card
                        cardImg={camp1}
                        title="Mount Ulap"
                        para="One of the most famous hikes in banguet is mt Ulap in Itogon"
                        btn="View Campground" />
                    <Card
                        cardImg={camp2}
                        title="Calaguas Islands"
                        para="One of the most famous hikes in banguet is mt Ulap in Itogon"
                        btn="View Campground" />
                    <Card
                        cardImg={camp3}
                        title="Onay Beach"
                        para="One of the most famous hikes in banguet is mt Ulap in Itogon"
                        btn="View Campground" />
                    <Card
                        cardImg={camp4}
                        title="Seven Sisters Waterfall"
                        para="One of the most famous hikes in banguet is mt Ulap in Itogon"
                        btn="View Campground" />
                    <Card
                        cardImg={camp5}
                        title="Latik Riverside"
                        para="One of the most famous hikes in banguet is mt Ulap in Itogon"
                        btn="View Campground" />
                    <Card
                        cardImg={camp6}
                        title="Buloy Springs"
                        para="One of the most famous hikes in banguet is mt Ulap in Itogon"
                        btn="View Campground" />
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

export default Camps