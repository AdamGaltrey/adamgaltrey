// utils/analytics.js
import ReactGA from 'react-ga';

// Dev mode for console logging in dev
let devMode = false;

const devLog = msg => devMode && console.log(`[DEV_GA]: ${msg}`);

export const initGA = () => {
    if (window.location.host.startsWith('localhost')) {
        devMode = true;
        devLog('GA Initialised.');
    }
    ReactGA.initialize('UA-124284942-1', {
        gaOptions: {
            siteSpeedSampleRate: 100
        }
    });
};

export const logPageView = (pathName) => {
    const path = pathName === undefined ? window.location.pathname : pathName;
    devLog(`Logging pageview for ${path}`);
    ReactGA.set({page: path});
    ReactGA.pageview(path)
};

export const logEvent = (category = '', action = '', label = '') => {
    if (category && action && label) {
        devLog(`Logging event category=${category}, action=${action}, label=${label}`);
        ReactGA.event({category, action, label});
    }
};

export const logTiming = (category = '', variable = '', value = '', label = '') => {
    if (category && variable && value && label) {
        devLog(`Logging timing category=${category}, variable=${variable}, value=${value}, label=${label}`);
        ReactGA.timing({category, variable, value, label});
    }
};

export const logException = (description = '', fatal = false) => {
    if (description) {
        ReactGA.exception({description, fatal});
    }
};

export const getTimeMillis = () => Math.round(new Date().getTime());