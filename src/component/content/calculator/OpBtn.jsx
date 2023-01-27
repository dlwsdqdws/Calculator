import React, { Component } from 'react'
import ACTIONS from '../../../redux/actions';
import { connect } from 'react-redux';

class OpBtn extends Component{

    state = {}

    render(){
        return (
            <button 
                onClick={() => this.props.choose_operation(this.props.operation)}
            >
                {this.props.operation}
            </button>
        );
    }
}

const mapDispatchToProps = {
    choose_operation : operation => {
        return {
            type : ACTIONS.CHOOSE_OPERATION,
            operation : operation
        }
    }
}

export default connect(null, mapDispatchToProps)(OpBtn);