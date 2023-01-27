import React, { Component } from 'react'
import Base from './base';
import { connect } from 'react-redux';
import DigitBtn from './calculator/digitBtn';
import ACTIONS from '../../redux/actions';
import { type } from '@testing-library/user-event/dist/type';

class Calculator extends Component{

    state = {}

    render(){
        return (
            <Base>
                <div className="calculator">
                    <div className="output">
                        <div className="last_output">
                            {this.props.lastOp} {this.props.operation}
                        </div>
                        <div className="cur_output">
                            {this.props.currentOp}
                        </div>
                    </div>
                    <button>AC</button>
                    <button onClick={this.props.delete_digit}>Del</button>
                    <button>√</button>
                    <button>➗</button>
                    <DigitBtn digit = {"7"} />
                    <DigitBtn digit = {"8"} />
                    <DigitBtn digit = {"9"} />
                    <button>✖️</button>
                    <DigitBtn digit = {"4"} />
                    <DigitBtn digit = {"5"} />
                    <DigitBtn digit = {"6"} />
                    <button>➖</button>
                    <DigitBtn digit = {"1"} />
                    <DigitBtn digit = {"2"} />
                    <DigitBtn digit = {"3"} />
                    <button>➕</button>
                    <button>±</button>
                    <DigitBtn digit = {"0"} />
                    <DigitBtn digit = {"."} />
                    <button>=</button>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);