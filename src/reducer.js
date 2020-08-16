export const initialState = {
    basket : []
};

function reducer(state, action){
    switch(action.type){
        case 'ADD_TO_BASKET':
            //Logic for adding in basket
            break;
        case 'REMOVE_FROM_BASKET':
            //Logic to remove from basket
            break;
        default:
            return state;
    }
}

export default reducer;