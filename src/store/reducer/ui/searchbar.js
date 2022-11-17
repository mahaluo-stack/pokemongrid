const searchbarState = {
    fieldValue: '',
    active: false
}

export default function searchbarReducer(state = searchbarState, action) {

    switch (action.type) {

        case 'onChangeSearchbar': { return { ...state, fieldValue: action.value } };
        case 'toggleActiveSearchbar': { return { ...state, active: action.value } };

        default: return state;
    }
}