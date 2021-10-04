import { visibilityFilterVar } from '../../../cache'

const createSetVisibilityFilter =  (visibilityFilterVar) => {
    return (filter) => {
        visibilityFilterVar(filter);
    }
}


export default createSetVisibilityFilter(visibilityFilterVar)