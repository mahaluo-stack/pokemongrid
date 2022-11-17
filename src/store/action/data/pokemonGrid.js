import 'regenerator-runtime/runtime.js';
const pokemonJSONlist = require('../../../pokemonResource/pokemon.json');

// Removing shadow pokemon as we display shadow status with text instead. It gives the list a cleaner look.
const nonShadows = pokemonJSONlist.filter(pokemon => !pokemon.name.includes('shadow'));

export const pokemonGridAction = {
    loadList,
    filter
}


function loadList() {
    return async dispatch => {

        dispatch({ type: 'loading', value: true });
        nonShadows.sort(function(a, b){return b.cp - a.cp});
        dispatch({ type: 'listUpdate', value: nonShadows });

        setTimeout(() => {
            // 200ms pause for dramatic effect
            dispatch({ type: 'loading', value: false });
        }, 200);
    }
}

function filter({ typeFilter, searchbar }) {
    return async dispatch => {

        let filteredList = [];

        if (searchbar.fieldValue !== '' && typeFilter.active) {
            nonShadows.forEach((pokemon) => {
                if (pokemon.name.toUpperCase().indexOf(searchbar.fieldValue.toUpperCase()) > -1) {
                    Object.entries(typeFilter.enabled).forEach(([key, value]) => {
                        if (pokemon.types.includes(key) && value === true && !filteredList.includes(pokemon)) { 
                            filteredList.push(pokemon);
                        }
                    });
                }
            });
        }
        else if (searchbar.fieldValue === '' && !typeFilter.active) { filteredList = nonShadows; }
        else if (searchbar.fieldValue !== '' && !typeFilter.active) {
            nonShadows.forEach((pokemon) => {
                if (pokemon.name.toUpperCase().indexOf(searchbar.fieldValue.toUpperCase()) > -1) {
                    filteredList.push(pokemon);
                }
            });
        }
        else if (typeFilter.active && searchbar.fieldValue === '') {
            nonShadows.forEach((pokemon) => {
                Object.entries(typeFilter.enabled).forEach(([key, value]) => {
                    if (pokemon.types.includes(key) && value === true && !filteredList.includes(pokemon)) { 
                        filteredList.push(pokemon);
                    }
                });
            });
        }
        filteredList.sort(function(a, b){return b.cp - a.cp});
        dispatch({ type: 'listUpdate', value: filteredList });
    }
}