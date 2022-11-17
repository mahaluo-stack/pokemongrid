import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deviceAction } from './store/action/app';
import { useWindowDimension } from './util/windowDimension';
import * as Page from './page';
import { Navbar } from './component';

export default function App() {

    const dispatch = useDispatch();

    const { height, width } = useWindowDimension();

    const { deviceState } = useSelector(state => state.app);
    const { device } = deviceState;

    useEffect(() => {
        dispatch(deviceAction.setDevice({ height, width }));
    }, [width]);

    return (
        <>
            {/* <Navbar /> */}

            {device && device !== null ?
                <>
                    {{
                        'phone': <p>this screen resolution is not yet supported (phone)</p>,
                        'tablet': <p>this screen resolution is not yet supported (tablet)</p>,
                        'monitor': <Page.Landing />
                    }[device]}
                </>
                :
                <p>failed to establish device, it may not be supported.</p>
            }
        </>
    )
}