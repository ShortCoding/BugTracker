import React, { Component } from 'react';
import {Sidebar} from "../components/Sidebar";
import {TopNavbar} from "../components/TopNavbar";
import {DropdownMenu} from "reactstrap";

export class Dashboard extends Component{
    static displayName = Dashboard.name;
    
    constructor(props) {
        super(props);
        this.state = {
            projects : ['project 1', 'Project 2', 'Project 3']
        }
    }
    
    componentDidMount() {
        
    }
    

    render() {
        const projects = this.state.projects.map((project, key)=>{
            return <option value="" key={key}>{project}</option>; 
        });
        
        return (
            <div className="container-fluid">
                
                <div className="form-inline mb-3">
                    <h3 > Dashboard </h3>
                    <label className="mr-2 ml-auto" htmlFor="projects">Select the project : </label>
                    <select className="form-control w-25" id="projects">
                        {projects}
                    </select>
                </div>
                
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Overview
                            </div>
                            <div className="card-body">
                                
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Reporting
                            </div>
                            <div className="card-body">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Backlog
                            </div>
                            <div className="card-body">
                                
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                Aging defects 
                            </div>
                            <div className="card-body">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
