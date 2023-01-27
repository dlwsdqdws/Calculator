import ACTIONS from "./actions";

const reducer = (
    state = {
        currentOp : "",
        lastOp : "",
        operation : "",
    }, action
) => {
    switch(action.type){
        case ACTIONS.ADD_DIGIT:
            if(action.digit === '0' && state.currentOp === '0'){
                return state;
            }
            if(state.currentOp === '0' && action.digit !== '.'){
                return {
                    ...state,
                    currentOp : action.digit,
                }
            }
            if(action.digit === '.' && state.currentOp.includes('.')){
                return state;
            }
            if(action.digit === '.' && state.currentOp === ""){
                return {
                    ...state,
                    currentOp : "0.",
                }
            }
            return {
                ...state,
                currentOp : state.currentOp + action.digit,
            }
        case ACTIONS.DELETE_DIGIT:
            if(state.currentOp === ""){
                return state;
            }
            return {
                ...state,
                currentOp : state.currentOp.slice(0, -1),
            }
        default : 
            return state;
    }
};

export default reducer;