import React, {Component} from 'react';

export class Bugs extends Component {

    static displayName = Bugs.name;
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <table className="table bg-light ">
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