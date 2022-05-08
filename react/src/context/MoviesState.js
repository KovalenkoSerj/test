const moviesInitialState = {
    movies: [],
    searchTerm : ''
}


const moviesReducer = (state, action) => {
    switch (action.type) {
        case "ADD_MOVIE":
            return {
                ...state,
                movies: [...state.movies, action.payload]
            }
        case "SEARCH_MOVIE":
            return {
                ...state,
                searchTerm: action.payload
            }
            default:
                return state;

    }
};

export {
    moviesInitialState,
    moviesReducer
};