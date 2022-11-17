export const typeFilterAction = {
    onChange
}

function onChange({ enabled, icon }) {
    return async dispatch => {
        
        if (!enabled[icon.name]) { dispatch({ type: 'toggleActiveTypeFilter', value: true }); }
        else if (enabled[icon.name]) { 
            let flag = true;
            Object.entries(enabled).forEach(([key, value]) => { if (key !== icon.name && value) { flag = false; } });
            if (flag) { dispatch({ type: 'toggleActiveTypeFilter', value: false }); } 
        }
       
        dispatch({ type: 'onChangeTypeFilter', value: icon.name });
    }
}