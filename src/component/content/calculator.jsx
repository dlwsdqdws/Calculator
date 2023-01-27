import React, { Component } from 'react'
import Base from './base';
import { connect } from 'react-redux';
import DigitBtn from './calculator/digitBtn';
import ACTIONS from '../../redux/actions';
import OpBtn from './calculator/OpBtn';

class Calculator extends Component{

    state = {
        formater : Intl.NumberFormat('en-us')
    };

    format = number => {
        if (number === "") return "";
        const [integer, decimal] = number.split('.');
        if (decimal === undefined){
            return this.state.formater.format(integer);
        }
        return `${this.state.formater.format(integer)}.${decimal}`
    }

    render(){
        return (
            <Base>
                <div className="calculator">
                    <div className="output">
                        <div className="last_output">
                            {this.format(this.props.lastOp)} {this.props.operation}
                        </div>
                        <div className="cur_output">
                            {this.format(this.props.currentOp)}
                        </div>
                    </div>
                    <button onClick={this.props.clear}>AC</button>
                    <button onClick={this.props.delete_digit}>Del</button>
                    <button>√</button>
                    <OpBtn operation = {"➗"} />
                    <DigitBtn digit = {"7"} />
                    <DigitBtn digit = {"8"} />
                    <DigitBtn digit = {"9"} />
                    <OpBtn operation = {"✖️"} />
                    <DigitBtn digit = {"4"} />
                    <DigitBtn digit = {"5"} />
                    <DigitBtn digit = {"6"} />
                    <OpBtn operation = {"➖"} />
                    <DigitBtn digit = {"1"} />
                    <DigitBtn digit = {"2"} />
                    <DigitBtn digit = {"3"} />
                    <OpBtn operation = {"➕"} />
                    <button onClick={this.props.reverse_digit}>±</button>
                    <DigitBtn digit = {"0"} />
                    <DigitBtn digit = {"."} />
                    <button onClick={this.props.evaluate}>=</button>
                </div>
            </Base>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        currentOp : state.currentOp,
        lastOp : state.lastOp,
        operation : state.operation,
    }
}

const mapDispatchToProps = {
    delete_digit : () => {
        return {
            type : ACTIONS.DELETE_DIGIT
        }
    },
    reverse_digit : () => {
        return {
            type : ACTIONS.REVERSE_DIGIT
        }
    },
    clear : () =>{
        return {
            type : ACTIONS.CLEAR
        }
    },
    evaluate : () => {
        return {
            type : ACTIONS.EVALUATE
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);