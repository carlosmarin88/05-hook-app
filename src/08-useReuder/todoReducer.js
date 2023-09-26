export const todoReducer = (initialState=[], action) => {

    switch (action?.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload]
            // return initialState
            // break;
    
        default:
            return initialState
            // break;
    }
}