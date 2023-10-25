import React, { createContext, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SpecialComponentContext = createContext();

export function useSpecialComponentContext() {
    return useContext(SpecialComponentContext);
}

export function SpecialComponentProvider({ children }) {
    const specialState = useSelector(state => state.specialState);
    const dispatch = useDispatch();

    const specialAction = () => {
        dispatch({ type: 'SPECIAL_ACTION' });
    };

    return (
        <SpecialComponentContext.Provider value={{ specialState, specialAction }}>
            {children}
        </SpecialComponentContext.Provider>
    );
}
