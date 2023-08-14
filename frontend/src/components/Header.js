import './Header.css';
import logo from '../assets/logo.svg';
import settings from "../assets/settings.png";
import heart from "../assets/heart.png";
import cart from "../assets/cart.png";
import profile from "../assets/profile.svg";

const Header=()=>{
    
    return (
        <div  className="navbar-bg" >
            <div className="sb__navbar">
                <div className="sb__navbar-links">
                    <div className="sb__navbar-links_logo">
                        
                        
                            <img src={logo} alt="logo"/>
                        
                    </div>
                    <div className="sb__navbar-links_container">
                        <p>
                            <a href="www.google.com">
                                Search
                            </a>
                        </p>
                        <div class="search-bar">
                            <i class="uil uil-search"></i>
                            <input type="search" placeholder=""/>
                        </div>
                        <p>
                            <a href="www.google.com">
                                Categories
                            </a>
                        </p>
                        
                    </div>
                </div>
                        
                        <div className="sb_icons">
                        <p>
                            <a href="www.google.com">
                                <img src={settings} alt="settings" height="20"/>
                            </a>
                        </p>

                        <p>
                            <a href="www.google.com">
                                <img src={heart} alt="heart" height="20"/>
                            </a>
                        </p>

                        <p>
                            <a href="www.google.com">
                                <img src={cart} alt="cart" height="20"/>
                            </a>
                        </p>

                        <p>
                            <a href="www.google.com">
                                <img className="profile" src={profile} alt="profile" height="40"/>
                            </a>
                        </p>

                    
                     </div>
               
                          
                   
                
            </div>
        </div>
    )
}


export default Header;