export const searchbarAction = {
    onChange
} 

function onChange(value) { 
    return async dispatch => { 
        if (value !== '') { dispatch({ type: 'toggleActiveSearchbar', value: true }); }
        else { dispatch({ type: 'toggleActiveSearchbar', value: false }); }
        dispatch({ type: 'onChangeSearchbar', value }); 
    } 
}