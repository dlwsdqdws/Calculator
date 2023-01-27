import ACTIONS from "./actions";

const evaluate = state => {
    let {lastOp, currentOp, operation} = state;
    let last = parseFloat(lastOp);
    let current = parseFloat(currentOp);

    let res = "";
    switch(operation){
        case '➕':
            res = last + current;
            break;
        case '➖':
            res = last - current;
            break;
        case '✖️':
            res = last * current;
            break;
        case '➗':
            // if(current === 0){
            //     res = "NaN";
            // }else{
                res = last / current;
            // }
            break;
        default:
            res = "NaN";
            break;
    }

    return res.toString();
}

const reducer = (
    state = {
        currentOp : "",
        lastOp : "",
        operation : "",
        overwrite : false,
    }, action
) => {
    switch(action.type){
        case ACTIONS.ADD_DIGIT:
            if(state.overwrite){
                return {
                    ...state,
                    currentOp : action.digit,
                    overwrite : false,
                }
            }
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
            if(state.overwrite){
                return {
                    ...state,
                    currentOp : "",
                    overwrite : false,
                }
            }
            if(state.currentOp === ""){
                return state;
            }
            return {
                ...state,
                currentOp : state.currentOp.slice(0, -1),
            }
        case ACTIONS.CHOOSE_OPERATION:
            if(state.lastOp === "" && state.currentOp === ""){
                return {
                    ...state,
                    lastOp : "0",
                    operation : action.operation,
                }
            }
            if(state.lastOp === ""){
                return {
                    ...state,
                    lastOp : state.currentOp,
                    operation: action.operation,
                    currentOp : "",
                }
            }
            if(state.currentOp === ""){
                return {
                    ...state,
                    operation : action.operation,
                }
            }
            return {
                ...state,
                lastOp : evaluate(state),
                operation : action.operation,
                currentOp : "",
            }
        case ACTIONS.REVERSE_DIGIT:
            if(state.currentOp === ""){
                return state;
            }
            if(state.currentOp.includes('-')){
                return {
                    ...state,
                    currentOp : state.currentOp.slice(1),
                }
            }
            return {
                ...state,
                currentOp : "-" + state.currentOp,
            }
        case ACTIONS.CLEAR:
            return {
                ...state,
                currentOp : "",
                operation : "",
                lastOp : "",
            }
        case ACTIONS.EVALUATE:
            if(state.currentOp === "" || state.lastOp === "" || state.operation === ""){
                return state;
            }
            return {
                ...state,
                currentOp : evaluate(state),
                lastOp : "",
                operation : "",
                overwrite : true,
            }
        default : 
            return state;
    }
};

export default reducer;

