import React, {Component} from 'react';
import Board from 'react-trello';

class Todoboard extends Component {
    constructor(props) {
        super(props);
        this.handleOnCardAdd = this.handleOnCardAdd.bind(this);
    }
    
    handleOnCardAdd(card, laneId){
        console.log(card, ' ', laneId);
    }


    componentDidMount() {
        
    }
    
    componentWillUnmount() {
        
    }

    render() {
        const data = {
            lanes: [
                {
                    id:'1',
                    title: 'Todo',
                    label: '2/2',
                    cards: [
                        {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
                        {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins'}
                    ]
                },
                {
                    id:'2',
                    title: 'In progress',
                    label: '0/0',
                    cards: []
                },
                {
                    id:'3',
                    title: 'Blocking',
                    label: '0/0',
                    cards: []
                },
                {
                    id:'4',
                    title: 'Completed',
                    label: '0/0',
                    cards: []
                }
            ]
        };
        return (
                <Board style={{backgroundColor: '#EEEEEE', maxHeight:'80vh'}}
                       laneStyle={{backgroundColor : '#383E57', color: 'white'}}
                       onCardAdd={this.handleOnCardAdd}
                       data={data} editable />
        );
    }
}

export default Todoboard;