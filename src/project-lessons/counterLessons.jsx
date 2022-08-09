import React, {Component} from 'react';
import Lesson1 from "../lessons/lesson1";
import Lesson2 from "../lessons/lesson2";
import Lesson3 from "../lessons/lesson3";
import Lesson4 from "../lessons/lesson4";
import Lesson5 from "../lessons/lesson5";
import Lesson6 from "../lessons/lesson6";

class CounterLessons extends Component {
    render() {
        return (
            <>
                <Lesson1/>
                <Lesson2/>
                <Lesson3/>
                <Lesson4/>
                <Lesson5/>
                <Lesson6/>
            </>
        );
    }
}

export default CounterLessons;