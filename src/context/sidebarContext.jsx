import React, { useContext, useReducer } from "react";
import reducer from "../reducers/sidebarReducer";
import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../utils/constants";

const initialState = {
    isSidebarOpen: false
}

const SidebarContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const SidebarProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const openSidebar = () => {
        dispatch({type: OPEN_SIDEBAR});
    }

    const closeSidebar = () => {
        dispatch({type: CLOSE_SIDEBAR});
    }

    return (
       <SidebarContext.Provider value = {{
          ...state,
          openSidebar,
          closeSidebar
       }}>
          {children}
       </SidebarContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSidebarContext = () => {
    return useContext(SidebarContext);
}