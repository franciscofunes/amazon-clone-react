import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue} from "./StateProvider";
import { auth } from "./firebase";


function Header() {
    const [{ basket, user }] = useStateValue();

    const login = () => {
      if (user) {
        auth.signOut();
      }
    };

    console.log(basket);

    return (
    <nav className="header">
     <Link to="/">
      <img 
        className="header__logo" 
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"    
        alt=""
      /> 
     </Link>

    <div className="header__search">
      <input type="text" className="header__searchInput"/>
      <SearchIcon className="header__searchIcon"/>
    </div>

    <div className="header__nav">
      {/*1st link video youtube 1:22:35*/}
      <Link to={!user && "/login"} className="header__link">
        <div onClick={login} className="header__option">
          <span className="header__optionLineOne">Hello {user?.email}</span>
          <span className="header__optionLineTwo">{user ? 'Salir' : 'Entrar'}</span>
        </div>   
      </Link>

      <Link to="/" className="header__link">
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& orders</span>
        </div>   
      </Link>

      <Link to="/" className="header__link">
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>   
      </Link>

      {/*4th link*/}
      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          <ShoppingBasketIcon/>
    <span className= "header_optionLineTwo header_basketCount">{basket?.length}</span>
        </div>
      </Link>     

    </div>
    </nav>
    );
    
}

export default Header;
