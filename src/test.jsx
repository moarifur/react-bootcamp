import React, {Component} from 'react';
import {Button, Modal} from "react-bootstrap";

class Test extends Component {

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
            <>
                <a className='text-success' style={{cursor:"pointer"}} onClick={this.modalOpen}>Project Workflow</a>

                <Modal size='xl' show={this.state.show} onHide={this.modalClose}>
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
                        <Button variant="secondary" onClick={this.modalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default Test;