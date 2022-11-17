const deviceState = {}

export default function deviceReducer(state = deviceState, action) {
    const { type, device, orientation } = action;
    switch (type) {
        case 'setDevice': {
            console.log('setting device: ', device);
            return { device, orientation };
        }
        default: return state;
    }
}