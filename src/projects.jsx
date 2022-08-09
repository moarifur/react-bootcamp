import React, {Component} from 'react';
import Vidly from "./projects/project02/vidly";
import CounterV1 from "./projects/project01/counterV1";

class Projects extends Component {
    render() {
        return (
            <>
                <CounterV1/>
                <Vidly/>
            </>
        );
    }
}

export default Projects;