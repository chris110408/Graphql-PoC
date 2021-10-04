import React from 'react'
import {VisibilityFilters} from '../VisibilityFilters'

const TodoFilterContext = React.createContext();


const TodoFilterProvider = ({children}) => {
    const [visibilityFilter, setVisibilityFilter] = React.useState(VisibilityFilters.SHOW_ALL);
    return (
        <TodoFilterContext.Provider value={[visibilityFilter, setVisibilityFilter]}>
            {children}
        </TodoFilterContext.Provider>
    );
};

export {TodoFilterContext , TodoFilterProvider};