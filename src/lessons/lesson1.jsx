import React, {Component} from 'react';

class Lesson1 extends Component {
    state = {
        count: 0
    }

    formatCount(){
        //---- Without object destructuring
        // return this.state.count === 0 ? 'Zero' : this.state.count

        //---- With object destructuring
        const {count} = this.state
        return count === 0 ? 'Zero' : count
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Lesson01: Embedding Expressions</h1>
                    <h4>Project01: Counter App</h4>
                </div>

                <div>
                    <span>{this.formatCount()}</span>
                    <button>Increment</button>
                </div>
            </div>
        );
    }
}

export default Lesson1;