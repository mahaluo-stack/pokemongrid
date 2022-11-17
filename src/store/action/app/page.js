import 'regenerator-runtime/runtime.js';

export const pageAction = {
    mounting,
    loading,
};

function mounting(value) {
    return async dispatch => {
        // wait 0.5 seconds to display a pageloader, looks fäncy
        dispatch({ type: 'loading', value: true });
        setTimeout(() => {
            dispatch({ type: 'mounting', value: value });
            dispatch({ type: 'loading', value: false });
        }, 500);
    };
};

function loading(value) { return dispatch => { dispatch({ type: 'loading', value }); }; };
