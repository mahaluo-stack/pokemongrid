const pokemonGridState = {
    loading: false,
    pokemonArray: null,
    filters: [],
    sorting: [],
    key: null,
}

export default function pokemonGridReducer(state = pokemonGridState, action) {

    switch (action.type) {

        case 'loading': { return { ...state, [action.type]: action.value } };
        case 'listUpdate': { return { ...state, pokemonArray: action.value } };

        default: return state;
    }
}