import React, {Component} from 'react';
import {Button, Modal} from "react-bootstrap";

class CounterCard extends Component {
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
        return (
            <div className="col-md-6">
                <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                    <div className="card-body d-flex flex-column align-items-start">

                        {/*-------------------- Project Link ----------------------*/}
                        <h4 className="mb-4">
                            <a
                                className="text-success"
                                href="https://33bl6i.csb.app/"
                                target="_blank"
                            >Project 01: Counter
                            </a>
                        </h4>
                        <h5 className="card-text text-black-50 font-weight-bold mb-4">
                            <em>Things we'll learn in this mini project.</em>
                        </h5>

                        {/*-------------------- Knowledge Base ---------------------*/}
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
                                        <th>Keyword</th>
                                        <th>Definition</th>
                                        <th>How to use</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
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

                        {/*--------------------- Workflow -----------------------*/}
                        <a className='text-success' style={{cursor:"pointer"}} onClick={this.modalOpen2}>Project Workflow</a>

                        <Modal size='xl' show={this.state.visibility} onHide={this.modalClose2}>
                            <Modal.Body>
                                <h4 className="text-black-50 font-weight-bold text-center pb-3">
                                    Project Workflow
                                </h4>
                                <img
                                    className="card-img-right flex-auto d-none d-lg-block"
                                    style={{ width: 1100, height: 600 }}
                                    src='images/counter.jpg'
                                />
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.modalClose2}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>

                    <img
                        className="card-img-right flex-auto d-none d-lg-block"
                        style={{ width: 250, height: 250 }}
                        src='images/project01.jpg'
                    />

                </div>
            </div>
        );
    }
}

export default CounterCard;

