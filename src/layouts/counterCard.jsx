import React, {Component} from 'react';
import {Button, Modal} from "react-bootstrap";

class CounterCard extends Component {
    constructor(props){
        super(props);
        this.state={
            show:false
        }
    }
    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})

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

                        {/*-------------------- Modals Section ---------------------*/}
                        <Button variant="warning" onClick={this.modalOpen}>
                            Click Here
                        </Button>
                        <Modal size='lg' show={this.state.show} onHide={this.modalClose}>
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
                                <Button variant="secondary" onClick={this.modalClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <br/>
                        <a href="#">Project Workflow</a>
                    </div>
                    <img
                        className="card-img-right flex-auto d-none d-lg-block"
                        style={{ width: 250, height: 250 }}
                        src='images/counter.jpg'
                    />
                </div>
            </div>
        );
    }
}

export default CounterCard;

