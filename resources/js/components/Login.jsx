// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../auth/privateroute';
// // import { types } from '../../types/types';


// export const LoginScreen = () => {

//     const navigate = useNavigate();
//     const { dispatch } = useContext( AuthContext )

//     const handleLogin = () => {
//         const action = {
//             type: 'login',
//             payload: { name: 'Archivado' }
//         }

//         dispatch(action);

//         const lastPath = localStorage.getItem('lastPath') || '/marvel';


//         navigate( lastPath, {
//             replace: true
//         });
//     }


//     return (
//         <div className="container mx-auto p-3">
//             <h1>Login</h1>
//             <hr />

//             <button 
//                 className="bg-red-300"
//                 onClick={ handleLogin }
//                 >
//                     Esto es un login
//             </button>
//         </div>
//     )
// }
import React, { useState } from 'react';
import useApi from '../hooks/useApi';
// import { postLogin, getUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Login =  () => {

    const data =useAuth();
    console.log(data);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'El correo es obligatorio';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'El correo no es válido';
        }
        if (!formData.password) {
            newErrors.password = 'La contraseña es obligatoria';
        } else if (formData.password.length < 6) {
            newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
        }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Iniciando:', formData);
            // Aquí puedes manejar la lógica para enviar los datos al backend
            // const { data: clients, error, loading, request: fetchUsers } = useApi(postUser(formData));
            try {
                // const response = await getLogin({ email, password });
                // const response = await getLogin(formData);
                const {email, password, remember} = formData
                const response = await data.login(formData);
                
                
                
                // alert(response)
        // const navigate = useNavigate()

            navigate('/products')


            } catch (error) {
                console.error(error)
                alert(error)
            }
            // alert('Enviado')
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Inicio de sesion</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
            

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                        />
                        {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                    </div>

             

                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;