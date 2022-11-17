const pageState = {
    name: '/landing',
    mounted: false,
    loading: true,
}

export default function pageReducer(state = pageState, action) {
    const { type, value } = action;

    switch (type) {
        case 'mounting': return { name: value, mounted: true, loading: false };
        case 'loading': return { ...state, [type]: value };
        default: return state;
    }
}