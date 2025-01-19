import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/privateroute';
// import { types } from '../../types/types';


export const LoginScreen = () => {

    const navigate = useNavigate();
    const { dispatch } = useContext( AuthContext )

    const handleLogin = () => {
        const action = {
            type: 'login',
            payload: { name: 'Archivado' }
        }

        dispatch(action);

        const lastPath = localStorage.getItem('lastPath') || '/marvel';


        navigate( lastPath, {
            replace: true
        });
    }


    return (
        <div className="container mx-auto p-3">
            <h1>Login</h1>
            <hr />

            <button 
                className="bg-red-300"
                onClick={ handleLogin }
                >
                    Esto es un login
            </button>
        </div>
    )
}
