import React, {Component} from 'react';
import Movies from "./movies";

class Vidly extends Component {
    render() {
        return (
            <div className='container text-center mt-5'>
                <div className='text-black-50 font-weight-bold border-bottom pb-2'>
                    <h1>Project02: Vidly App</h1>
                    <h4>Reference: Lesson01 - Lesson06</h4>
                </div>

                <div className="col-lg-8 mx-auto p-3 py-md-5">
                    <main className='container'>
                        <Movies/>
                    </main>
                </div>
            </div>
        );
    }
}

export default Vidly;