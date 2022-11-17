const typeFilter = {
    enabled: {
        bug: false,
        dark: false,
        dragon: false,
        electric: false,
        fairy: false,
        fighting: false,
        fire: false,
        flying: false,
        ghost: false,
        grass: false,
        ground: false,
        ice: false,
        normal: false,
        poison: false,
        psychic: false,
        rock: false,
        steel: false,
        water: false
    },
    active: false,
}

export default function typeFilterReducer(state = typeFilter, action) {

    switch (action.type) {

        case 'onChangeTypeFilter': { return { ...state, enabled: { ...state.enabled, [action.value]: !state.enabled[action.value] } } };
        case 'toggleActiveTypeFilter': { return { ...state, active: action.value }};
        default: return state;
    }
}