import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Dropdown} from "react-materialize";

const ProfileLink = styled.li`
    width: 139px;
`;

const Header = (props) => (
    <div>
        <nav className="blue">
            <div className="nav-wrapper container">
                <Link to="/main" className="brand-logo">Daily Picture</Link>

                <ul id="nav-mobile" className="right hide-on-med-and-down center-align">
                    <li><Link to="/main">Home</Link></li>

                    <Dropdown trigger={
                        <ProfileLink><a className="dropdown-button " href="#!" data-activates="dropdown1">Profile<i className="material-icons right">arrow_drop_down</i></a></ProfileLink>
                    }>
                        <li onClick={props.logout}><a><i className="material-icons">power_settings_new</i>Sign out</a></li>
                    </Dropdown>
                </ul>
            </div>
        </nav>
    </div>
);

export default Header;
