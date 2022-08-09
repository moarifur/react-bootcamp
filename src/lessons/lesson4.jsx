import React, {Component} from 'react';

class Lesson4 extends Component {
    state = {
        count: 0
    }

    formatCount(){
        const {count} = this.state
        return count === 0 ? 'Zero' : count
    }

    getBadgeClasses() {
        let classes = 'm-2 p-2 badge badge-'
        classes += (this.state.count === 0) ? 'danger' : 'primary'
        return classes;
    }

    handleIncrement = () => {
        console.log('Incremented!')
    }

    render() {
        return (
            <div className='container text-center mt-5'>
                <div className='text-black-50 font-weight-bold border-bottom pb-2'>
                    <h1>Lesson04: Handling Events</h1>
                    <h4>Project01: Counter App</h4>
                </div>

                <div className="container mt-5">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button onClick={this.handleIncrement} className='btn btn-warning p-2'>Increment</button>
                </div>

            </div>
        );
    }

}

export default Lesson4;