import {fromJS} from "immutable";

const preloadState = fromJS(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;

export const getPreloadedState = () => preloadState;