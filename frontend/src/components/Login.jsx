import React, { useState } from 'react'
import { login } from '../services/authService'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = async (e) => {
        e.preventDefault()

        if(!validateForm()) {
            toast.error("Por favor, corrija os erros no formulário");
            return
        }

        try {
            const response = await login({username, password})

            const token = response.data.token

            localStorage.setItem('token', token)

            navigate('/dashboard')

            toast.success("Login realizado com sucesso")
        } catch (error) {
            console.log("Erro no login ", error)
        }
    }


    function validateForm() {
        let valid = true

        const errorsCopy = {...errors}

        if(username.trim()) {
            errorsCopy.username = ''
        } else {
            errorsCopy.username = "O nome de usuário é obrigatório"
            valid = false
        }

        if (password.trim()) {
            errorsCopy.password = ''
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

            <h2 className='text-common-text font-bold text-3xl py-3 text-center'>
                Log-In
            </h2>

            <form action="" className='flex flex-col gap-6 w-full'>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="" className='text-common-text font-semibold text-xl'>Username</label>
                    <input 
                    type="text"
                    className={`bg-common-text rounded-3xl px-4 py-2 transition-all ${errors.username ? 'border border-red-500' : 'border border-transparent'}`}
                    placeholder='Digite seu username'
                    onChange={handleUsername}
                    value={username}
                    name='username'
                     />
                    <div className='h-4'>
                        {errors.username && <span className='text-red-500 text-sm'>{errors.username}</span>}
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="" className='text-common-text font-semibold text-xl'>Password</label>
                    <input 
                    type="password"
                    className={`bg-common-text rounded-3xl px-4 py-2 transition-all ${errors.password ? 'border border-red-500' : 'border border-transparent'}`}
                    placeholder='Digite sua senha'
                    value={password}
                    onChange={handlePassword}
                    name='password'
                    />
                    <div className='h-4'>
                        {errors.password && <span className='text-red-500 text-sm'>{errors.password}</span>}
                    </div>
                </div>

                <button className='flex bg-title-color rounded-3xl font-bold justify-center py-1.5 my-1.5 transition active:scale-95 duration-150' onClick={handleLogin}>Log-In</button>
            </form>


            <p className='text-common-text text-sm text-center'>Ainda não tem uma conta? <Link className='text-blue-500 hover:underline hover:text-blue-400' to="/register">Registre-se</Link></p>
        </div>
    </div>
  )
}

export default Login