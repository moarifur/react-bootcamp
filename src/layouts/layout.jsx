import React, {Component} from 'react';
import CounterCard from "./counterCard";
import VidlyCard from "./vidlyCard";

class Layout extends Component {
    render() {
        return (
            <>
                <div className="container">
                    {/*------------ Header ----------------*/}
                    <header className="blog-header py-3">
                        <div className="col-12 text-center">
                            <h1 className="text-black-50 font-weight-bold border-bottom pb-3">
                                Welcome to the 'React Bootcamp'
                            </h1>
                        </div>
                    </header>

                    {/*---------------- Jumbotron ---------------*/}
                    <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                        <div className="col-md-12">
                            <h1 className="display-4 font-italic">
                                React Bootcamp
                            </h1>
                            <p className="lead my-3">
                                Learn the whole React library by doing so many small component based project
                                and add them all up to build capstone project insha Allah!
                            </p>
                            <p className="lead mb-0">
                                <a href="#" className="text-white font-weight-bold">
                                    Table of content: Comming soon...
                                </a>
                            </p>
                        </div>
                    </div>

                    {/*------------ Projects ----------------*/}
                    <div className="container">
                        <div className="row mb-2">
                            <CounterCard/> {/* CounterV1 App*/}
                            <VidlyCard/> {/* CounterV1 App*/}

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Layout;