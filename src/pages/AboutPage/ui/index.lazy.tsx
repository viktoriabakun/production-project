import {lazy} from "react";

export const AboutPageLazy = lazy(() => new Promise(resolve => {
    // @TODO: DELETE TIMEOUT
    // @ts-ignore
        setTimeout(() => resolve(import("./index")), 1500)
    }));
