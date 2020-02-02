import React, {useState, useEffect} from 'react';
import {initGA, logPageView} from '~/utils/analytics';

let ignoreFirst = true;

const GoogleAnalyticsWrapper = props => {

    const [tracking, setTracking] = useState(false);

    const logCurrentPageView = () => logPageView(location.pathname + location.search);

    const detectPageChange = () => {
        // Ignore the first page load, as it fires twice on initial render
        if (tracking && !ignoreFirst) {
            logCurrentPageView();
        } else if (tracking) {
            ignoreFirst = false;
        }
    };

    useEffect(() => {
        if (!window.GA_INITIALIZED) {
            initGA();
            window.GA_INITIALIZED = true;
        }
        logCurrentPageView();
        // Only track once component is mounted
        setTracking(true);
    }, []);

    detectPageChange();

    return (
        <div>
            {props.children}
        </div>
    )

};

export default GoogleAnalyticsWrapper;