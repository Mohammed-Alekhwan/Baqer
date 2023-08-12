import './Header.css';
//  import logo from '../public/logo.svg';
//  import profile from "../public/profile.svg";

const Header=()=>{
    
    return (
        <div className="navbar-bg">
            <div className="sb__navbar">
                <div className="sb__navbar-links">
                <img
          className="sb__navbar-links_logo"
          alt="Logo"
          src="https://generation-sessions.s3.amazonaws.com/131c4f04101739b97fb86ff8e57de40e/img/logo-1@2x.png"
        />
                     {/* <div className="sb__navbar-links_logo">
                        
                        
                             <img src={logo} alt="logo"/> 
                        
                    </div>  */}
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

                        
                        <img
          className="shopping-cart"
          alt="Shopping cart"
          src="https://generation-sessions.s3.amazonaws.com/131c4f04101739b97fb86ff8e57de40e/img/shopping-cart-1.svg"
        />
                       <img
          className="settings"
          alt="Settings"
          src="https://generation-sessions.s3.amazonaws.com/131c4f04101739b97fb86ff8e57de40e/img/settings-1.svg"
        />
        <img
          className="heart"
          alt="Heart"
          src="https://generation-sessions.s3.amazonaws.com/131c4f04101739b97fb86ff8e57de40e/img/heart-1.svg"
        />
                    
                    </div>
                </div>
               
                          
                   
                
            </div>
        </div>
    )
}


export default Header;