import React from "react";
import { Link } from "react-router-dom";

const links = [
    {
        title: "Home",
        link: "/"
    },

    {
        title: "About",
        link: "/about"
    },

    {
        title: "Donation",
        link: "/donation"
    },

]

const Nav = () => {
    return (
        <div>
            {links.map((element) => {
                return <Link key={element.title}to={element.link}>{element.title}</Link>;
            })}
        </div>
    );
};

export default Nav;