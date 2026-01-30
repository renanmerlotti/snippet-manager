import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../services/authService'
import toast from 'react-hot-toast'

function Register() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleRegister = async (e) => {
        e.preventDefault()

        if (!validateForm()) {
            toast.error("Por favor, corrija os erros no formulário");
            return
        }

        try {
            await register({ username, email, password })

            navigate("/login")

            toast.success("Sua conta foi registrada com sucesso")
        } catch (error) {
            console.log("Erro ao se registrar ", error)
        }
    }

    function validateForm() {
        let valid = true
        const errorsCopy = { ...errors }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (username.trim()) {
            errorsCopy.username = ''
        } else {
            errorsCopy.username = "O nome de usuário é obrigatório"
            valid = false
        }

        if (email.trim()) {
            if (emailRegex.test(email)) {
                errorsCopy.email = '';
            } else {
                errorsCopy.email = "Formato de e-mail inválido";
                valid = false;
            }
        } else {
            errorsCopy.email = "O e-mail é um campo obrigatório";
            valid = false;
        }

        if (password.trim()) {
            if(password.length >= 6) {
                errorsCopy.password = ''
            } else {
                errorsCopy.password = "A senha deve ter no mínimo 6 caracteres"
                valid = false
            }
        } else {
            errorsCopy.password = "A senha é um campo obrigatório"
            valid = false
        }

        setErrors(errorsCopy)

        return valid
    }

    return (
        <div className='w-full min-h-screen flex flex-col items-center bg-main-background'>

            <h1 className='text-title-color text-5xl px-7 mt-24 mb-24 font-bold'>
                Snippet Manager
            </h1>

            <div className='bg-card-login flex flex-col items-center w-full max-w-sm p-8 gap-6 rounded-3xl'>

                <h2 className='text-common-text font-bold text-3xl text-center'>
                    Sign-In
                </h2>

                <form action="" className='flex flex-col gap-6 w-full'>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='text-common-text font-semibold text-xl'>Username</label>
                        <input
                            type="text"
                            className={`bg-common-text rounded-3xl px-4 py-2 transition-all ${errors.username ? 'border border-red-500' : 'border border-transparent'}`}
                            placeholder='Digite seu username'
                            value={username}
                            onChange={handleUsername}
                            name='username'
                        />
                        <div className='h-3'>
                            {errors.username && <span className='text-red-500 text-sm'>{errors.username}</span>}
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='text-common-text font-semibold text-xl'>Email</label>
                        <input
                            type="email"
                            className={`bg-common-text rounded-3xl px-4 py-2 transition-all ${errors.username ? 'border border-red-500' : 'border border-transparent'}`}
                            placeholder='Digite seu email'
                            value={email}
                            onChange={handleEmail}
                            name='email'
                        />
                        <div className='h-3'>
                            {errors.email && <span className='text-red-500 text-sm'>{errors.email}</span>}
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='text-common-text font-semibold text-xl'>Password</label>
                        <input
                            type="password"
                            className={`bg-common-text rounded-3xl px-4 py-2 transition-all ${errors.username ? 'border border-red-500' : 'border border-transparent'}`}
                            placeholder='Digite sua senha'
                            value={password}
                            onChange={handlePassword}
                            name='password'
                        />
                        <div className='h-3'>
                            {errors.password && <span className='text-red-500 text-sm'>{errors.password}</span>}
                        </div>
                    </div>

                    <button className='flex bg-title-color rounded-3xl font-bold justify-center py-1.5 my-1.5 transition active:scale-95 duration-150' onClick={handleRegister}>Sign-In</button>

                </form>


                <p className='text-common-text text-sm text-center'>Já tem uma conta? <Link className='text-blue-500 hover:underline hover:text-blue-400' to="/login">Entre aqui</Link></p>
            </div>
        </div>
    )
}

export default Register