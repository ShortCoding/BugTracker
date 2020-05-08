import React, {Component} from 'react';
import Board from 'react-trello';

class Todoboard extends Component {
    
    render() {
        const data = {
            lanes: [
                {
                    id: 'lane1',
                    title: 'Planned Tasks',
                    label: '2/2',
                    cards: [
                        {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
                        {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
                    ]
                },
                {
                    id: 'lane2',
                    title: 'Completed',
                    label: '0/0',
                    cards: []
                }
            ]
        };
        return (
                <Board
                    style={{backgroundColor: '# '}}
                    data={data} />
        );
    }
}

export default Todoboard;