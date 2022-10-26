import React, { createContext } from 'react';

export const AuthContext = createContext();

const UserContext = ( {children} ) => {
    


    const name = {displayName: "Rubel Hossain"}

    const authContent = {name}
    return (
        <AuthContext.Provider value={authContent}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;