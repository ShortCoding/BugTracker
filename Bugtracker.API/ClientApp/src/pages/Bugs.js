import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter} from "@fortawesome/free-solid-svg-icons/faFilter";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";

export class Bugs extends Component {

    static displayName = Bugs.name;
    
    constructor(props) {
        super(props);
        this.handleCreateBug = this.handleCreateBug.bind(this);
    }

    componentDidMount() {
    }

    handleCreateBug(e) {
        e.preventDefault();
        this.props.history.push('/bugs/create-a-bug');
    }
    
    render() {
        return (
            <div> 
                <div className="mb-2 d-flex flex-row align-items-center">
                        <span className="mr-1"> Filters </span> 
                        <FontAwesomeIcon icon={faFilter} style={{ fontSize : '18px', color:'#262A2E'}} />
                        <button className="btn btn-primary ml-auto" 
                               onClick={this.handleCreateBug}>
                            <FontAwesomeIcon icon={faPlus} className="mr-2"/>
                            Create bug
                        </button>
                </div>
                <table className="table bg-light table-hover ">
                    <thead>
                    <tr>
                        <th scope="col"> # ID </th>
                        <th scope="col"> BUG </th>
                        <th scope="col"> CREATED </th>
                        <th scope="col"> REPORTER </th>
                        <th scope="col"> ASSIGNED TO </th>
                        <th scope="col"> STATUS </th>
                        <th scope="col"> SERVERITY </th>
                        <th scope="col"> REPRODUCIBLE </th>
                        <th scope="col"> STATUS </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }


}