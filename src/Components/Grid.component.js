import React, { Component } from 'react'

export default class Grid extends Component {
    render() {
        let rows = [];
        for (let y = 0; y < 10; y++) {
            // Build the cells in an array
            const cells = [];
            for (let x = 0; x < 10; x++) {
                cells.push(<Cell />);
            }
            // Put them in the row
            rows.push(<tr>{cells}</tr>);
        }
        // Return the table
        return <table><tbody>{rows}</tbody></table>;

    }
}


class Cell extends Component{
    render(){
        return <td className="cell"></td>;
    }
}
