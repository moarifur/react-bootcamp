import React, {Component} from 'react';

class CounterV1 extends Component {
    state = {
        count: 0
    }

    formatCount(){
        const {count} = this.state
        return count === 0 ? 'Zero' : count
    }

    getBadgeClasses() {
        let classes = 'm-2 p-2 badge badge-'
        classes += (this.state.count === 0) ? 'danger' : 'secondary'
        return classes;
    }

    handleIncrement = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div className='container text-center mt-5'>
                <div className='text-black-50 font-weight-bold border-bottom pb-2'>
                    <h1>Project01: Counter App | Version 01</h1>
                    <h4>Reference: Lesson01 - Lesson05</h4>
                </div>

                <div className="container mt-5">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button onClick={this.handleIncrement} className='btn btn-warning p-2'>Increment</button>
                </div>

            </div>
        );
    }
}

export default CounterV1;