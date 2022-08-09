import React, {Component} from 'react';
import {Button, Modal} from "react-bootstrap";

class VidlyCard extends Component {
    constructor(props){
        super(props);
        this.state={
            show:false,
            visibility:false
        }
    }
    modalClose1=()=>this.setState({show:false})
    modalOpen1=()=>this.setState({show:true})

    modalClose2=()=>this.setState({visibility:false})
    modalOpen2=()=>this.setState({visibility:true})


    render() {

        const imageSize = {
            width: '250px',
            height: '250px'
        }

        return (
            <div className="col-md-6">
                <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                    <div className="card-body d-flex flex-column align-items-start">

                        {/*-------------------- Project Link ----------------------*/}
                        <>
                            <h4 className="mb-4">
                                <a
                                    className="text-success"
                                    href="https://2d5nnt.csb.app/"
                                    target="_blank"
                                >Project 02: Vidly
                                </a>
                            </h4>
                            <h5 className="card-text text-black-50 font-weight-bold mb-4">
                                <em>Things we'll learn in this mini project.</em>
                            </h5>
                        </>
                        {/*-------------------- Knowledge Base ---------------------*/}
                        <>
                            <Button variant="warning" onClick={this.modalOpen1}>
                                Click Here
                            </Button>
                            <Modal size='lg' show={this.state.show} onHide={this.modalClose1}>
                                <Modal.Body>
                                    <h4 className="text-black-50 font-weight-bold text-center pb-3">
                                        List of New Learned Things
                                    </h4>
                                    <table className="table table-bordered table-striped table-hover">
                                        <thead className="table-warning">
                                        <tr>
                                            <th>#</th>
                                            <th>Lessons</th>
                                            <th>Covered Topics</th>
                                            <th>Code Example</th>
                                            <th>Usages</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>lesson1.jsx</td>
                                            <td>Embedding Expressions</td>
                                            <td>
                                                <code className='text-black-50 font-weight-bold'>
                                                    {"{this.state.count} or {this.handleIncrement()}"}
                                                </code>
                                            </td>
                                            <td>Reference / Function</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>lesson2.jsx</td>
                                            <td>Settings Attributes</td>
                                            <td>
                                                <code className='text-black-50 font-weight-bold'>
                                                    {"className=\"container\""}
                                                </code>
                                            </td>
                                            <td>style, onClick…..</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>lesson3.jsx</td>
                                            <td>Rendering Classes Dynamically</td>
                                            <td>
                                                <code className='text-black-50 font-weight-bold'>
                                                    {"className={`box ${isBoxVisible ? \"\" : \"hidden\"}`}\n"}
                                                </code>
                                            </td>
                                            <td>
                                                <a target='_blank' href="https://simplernerd.com/js-react-conditional-class/#using-ternary-operator">
                                                    Using Ternary Operator
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>lesson4.jsx</td>
                                            <td>Handling Events</td>
                                            <td>
                                                <code className='text-black-50 font-weight-bold'>
                                                    {"onClick={this.handleIncrement}"}
                                                </code>
                                            </td>
                                            <td>Handle Reference</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>lesson5.jsx</td>
                                            <td>Updating the State</td>
                                            <td>
                                                <code className='text-black-50 font-weight-bold'>
                                                    {"this.setState({count: this.state.count + 1})"}
                                                </code>
                                            </td>
                                            <td>setState()</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>lesson6.jsx</td>
                                            <td>Passing Event Arguments</td>
                                            <td>
                                                <code className='text-black-50 font-weight-bold'>
                                                    {"onClick={() => this.handleIncrement({id: 1})}"}
                                                </code>
                                            </td>
                                            <td>Handle Function</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.modalClose1}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <br/>
                        </>
                        {/*--------------------- Workflow -----------------------*/}
                        <>
                            <a className='text-success' style={{cursor:"pointer"}} onClick={this.modalOpen2}>Project Workflow</a>

                            <Modal size='xl' show={this.state.visibility} onHide={this.modalClose2}>
                                <Modal.Body>
                                    <h4 className="text-black-50 font-weight-bold text-center pb-3">
                                        Project Workflow
                                    </h4>
                                    <img
                                        className="card-img-right flex-auto d-none d-lg-block"
                                        style={{ width: 1100, height: 600 }}
                                        src='images/vidly.jpg'
                                    />
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.modalClose2}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </>
                    </div>
                    <>
                        <img
                            className="card-img-right flex-auto d-none d-lg-block"
                            style={ imageSize }
                            src='images/project2.jpg'
                        />
                    </>
                </div>
            </div>
        );
    }
}

export default VidlyCard;