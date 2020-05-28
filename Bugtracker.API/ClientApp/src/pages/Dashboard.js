import React, { Component } from 'react';
import {Sidebar} from "../components/Sidebar";
import {TopNavbar} from "../components/TopNavbar";
import {DropdownMenu} from "reactstrap";
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: [
        'New',
        'Reopened',
        'Solved'
    ],
    datasets: [{
        data: [300, 100, 100],
        backgroundColor: [
            'lightgreen',
            '#36A2EB',
            '#FFCE56'
        ],
    }]
};



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
                    <h4> Dashboard </h4>
                    <label className="mr-2 ml-auto" htmlFor="projects">Select the project : </label>
                    <select className="form-control w-25" id="projects">
                        {projects}
                    </select>
                </div>
                
                <div className="row">
                    <div className="col-3">
                        <div className="card" >
                            <div className="card-body" >
                                <h4> Overview</h4>
                                <Doughnut  data={data}
                                           height={250} />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                Stats
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}
