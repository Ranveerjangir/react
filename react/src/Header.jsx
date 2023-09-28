import react from "react";
import { link } from "react-router-dom";

function Header(){
    return(
        <header>
            <ul>
                <li>
                   <link to="/">Home</link>
                </li>
                <li>
                <link to="/About">About</link>
                </li>
                <li>
                <link to="/blog">blog</link>
                </li>
                <li>
                <link to="/service">service</link>
                </li>
                <li>
                <link to="/contact">contact us</link>
                </li>
            </ul>
        </header>
    )
}
export default Header;