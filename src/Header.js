import React from 'react';
import { Link } from "react-router-dom";
class Header extends React.Component {
    render() {
       return (
<div id="header">
 <header className="header">

<ul className="menu">
    <li className="profile">
        <Link to={'/'}></Link>
    </li>
    <li className="lookr">
        <Link to={'/about'}></Link>

    </li>
    <li className="wishlist">
        <Link to={'/wishlist'}></Link>
    </li>
</ul>
</header>
</div>
 );
};
};
export default Header;
