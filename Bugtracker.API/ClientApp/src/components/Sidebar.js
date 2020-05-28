import React, { Component } from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from '../assets/bugIcon.svg';
import {faBug, faColumns, faTachometerAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-regular-svg-icons";

export class Sidebar extends Component{
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div className="">
                <div className="sidebarWrapper d-flex flex-column">
                    <div className="logoSidebar bg-light">
                        <Link to="/">
                            <div className="mx-auto w-75">
                                <img src={logo} alt="react-logo" height="35" />
                                <span> Bugtracker </span>
                            </div>
                        </Link>
                    </div>
                    <ul className="navList list-unstyled mt-2 text-white">
                        <li className="navListItem my-1">
                            <NavLink to="/dashboard" className="itemContent" activeClassName="active" >
                                <FontAwesomeIcon icon={faTachometerAlt} size="lg" className="mr-2"/> Dashboard
                            </NavLink>
                        </li>
                        <li className="navListItem my-1">
                            <NavLink to="/kanban" className="itemContent"  activeClassName="active" >
                                <FontAwesomeIcon icon={faColumns} size="lg" className="mr-2"/> Kanban board
                            </NavLink>
                        </li>
                        <li className="navListItem my-1">
                            <NavLink to="/bugs" className="itemContent"  activeClassName="active" >
                                <FontAwesomeIcon icon={faBug} size="lg" className="mr-2"/> Bugs
                            </NavLink>

                        </li>
                        <li className="navListItem my-1">
                            <NavLink to="/calendar" className="itemContent"  activeClassName="active">
                                <FontAwesomeIcon icon={faCalendar} size="lg" className="mr-2"/> Calendar
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}