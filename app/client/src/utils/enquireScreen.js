import enquireJs from "enquire.js";

if (typeof window !== "undefined") {
    const matchMediaPolyfill = mediaQuery => {
        return {
            media: mediaQuery,
            matches: false,
            addListener() {},
            removeListener() {}
        };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
}

export function enquireScreen(cb, str) {
    if (!enquireJs) {
        return;
    }
    enquireJs.register(str || "only screen and (max-width: 767.99px)", {
        match: () => {
            // eslint-disable-next-line
            cb && cb(true);
        },
        unmatch: () => {
            // eslint-disable-next-line
            cb && cb(false);
        }
    });
}