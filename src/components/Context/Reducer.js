function reducer(state, action){
    switch (action.type) {
        case "SET_BIO":
            return {
                ...state,
                bio: action.payload
            }
            
    
        default:
            return state;
    }
}

export default reducer;