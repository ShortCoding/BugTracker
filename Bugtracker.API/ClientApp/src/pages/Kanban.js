import React, {Component} from 'react';
import Todoboard from "../components/Todoboard";

export class Kanban extends Component {
    static displayName = Kanban.name;
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
                <Todoboard />
        )
    }
}