import React, {Component} from 'react';

class Lesson2 extends Component {
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
            <div className='container text-center mt-5'>
                <div className='text-black-50 font-weight-bold border-bottom pb-2'>
                    <h1>Lesson02: Settings Attributes</h1>
                    <h4>Project01: Counter App</h4>
                </div>

                <div className="container mt-5">
                    <span className="m-2 p-2 badge badge-secondary">{this.formatCount()}</span>
                    <button className='btn btn-warning p-2'>Increment</button>
                </div>
            </div>
        );
    }
}

export default Lesson2;