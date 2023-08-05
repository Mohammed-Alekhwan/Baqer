import "./MainHeader.css";
const MainHeader = () => {
  return (
    <div className="header">
      <img className="nav-icon" alt="" src="/Nav.svg" />
      <div className="search">Search</div>
      <div className="header-child" />
      <div className="categories">Categories</div>
      <img className="settings-icon" alt="" src="/settings.svg" />
      <img className="vector-icon" alt="" src="/vector.svg" />
      <img className="shopping-cart-icon" alt="" src="/shoppingcart.svg" />
      <img className="header-item" alt="" src="/ellipse-3@2x.png" />
      <img className="logo-icon" alt="" src="/logo.svg" />
    </div>
  );
};

export default MainHeader;
