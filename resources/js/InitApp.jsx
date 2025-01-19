import { useEffect, useReducer } from 'react';
// import { AuthContext } from './auth/authContext';
import { AuthContext } from './auth/privateroute';
import { authReducer } from './reducer/AuthReducer';
// import { authReducer } from './auth/authReducer';
// import { AppRouter } from './routers/AppRouter';
import AppMain from './AppMain';
// import { authReducer } from './reducer/AuthReducer';

const init = () => {
    return JSON.parse( localStorage.getItem('user') ) || { logged: false };
    // return ""
}

export const InitApp = () => {

    const [ user, dispatch ] = useReducer( authReducer, {}, init );

    useEffect(() => {
        if ( !user ) return;

        localStorage.setItem('user', JSON.stringify(user) );
    }, [ user ])


    return (
        <AuthContext.Provider value={{
            user,
            dispatch
        }}>
            <AppMain />
        </AuthContext.Provider>
    )
}
