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
            <div>
                <div className="sidebarWrapper bg-light d-flex flex-column">
                    <div className="logoSidebar mx-auto">
                        <Link to="/">
                            <img src={logo} alt="react-logo" height="35" />
                            <span> Bugtracker </span>
                        </Link>
                    </div>
                    <hr />
                    <ul className="navList list-unstyled mt-4">
                        <li className="navListItem my-1" >
                           <NavLink to="/dashboard"  activeClassName="active" >
                               <FontAwesomeIcon icon={faTachometerAlt} size="lg" className="mr-2"/> Dashboard
                           </NavLink>
                        </li>
                        <li className="navListItem my-1">
                            <NavLink to="/kanban" activeClassName="active" >
                                <FontAwesomeIcon icon={faColumns} size="lg" className="mr-2"/> Kanban board
                            </NavLink>
                        </li>
                        <li className="navListItem my-1">
                            <NavLink to="/bugs" activeClassName="active" >
                                <FontAwesomeIcon icon={faBug} size="lg" className="mr-2"/> Bugs
                            </NavLink>

                        </li>
                        <li className="navListItem my-1">
                            <NavLink to="/calendar" activeClassName="active" >
                                <FontAwesomeIcon icon={faCalendar} size="lg" className="mr-2"/> Calendar
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}