import React, { Component } from 'react';


class Main extends Component {

    displayReel = () => {
        let arr1 = ['cherry', 'lemon', 'apple', 'lemon', 'banana', 'banana', 'lemon', 'lemon']
        let arr2 = ['lemon', 'apple', 'lemon', 'lemon', 'cherry', 'apple', 'banana', 'lemon']
        let arr3 = ['lemon', 'apple', 'lemon', 'apple', 'cherry', 'lemon', 'banana', 'lemon']

        return (arr1.forEach(element => {
            <p>{element}</p>
        }));
    }
    render() {
        return (
            <div>
                {this.displayReel()}
                <p>test </p>
            </div>
        )
    }
}

export default Main