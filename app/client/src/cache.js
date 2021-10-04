
import { InMemoryCache, makeVar } from "@apollo/client";
import { VisibilityFilters } from "./models/VisibilityFilters";

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                visibilityFilter: {
                    read () {
                        return visibilityFilterVar();
                    }
                }
            }
        }
    }
});

/**
 * Set initial values when we create cache variables.
 */

export const visibilityFilterVar = makeVar(
    VisibilityFilters.SHOW_ALL
)


export const _sVar = (val)=>{

    const rc = (newVal)=>{

        if(newVal) {
            if (newVal !== val) {
                val = newVal
            }
        }
        return val
    }


    return rc

}

export const chrisVar = _sVar(VisibilityFilters.SHOW_ALL)

export const initedVisibilityFilterVar =visibilityFilterVar( VisibilityFilters.SHOW_ALL)