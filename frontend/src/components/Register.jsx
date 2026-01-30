import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../services/authService'
import toast from 'react-hot-toast'

function Register() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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

        try {
            await register({username, email, password})

            navigate("/login")
            
            toast.success("Sua conta foi registrada com sucesso")
        } catch (error) {
            console.log("Erro ao se registrar ", error)
            toast.error("Erro ao se registrar, por favor verifique suas credenciais")
        }
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

            <form action="" className='flex flex-col gap-6'>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="" className='text-common-text font-semibold text-xl'>Username</label>
                    <input 
                    type="text" 
                    className='bg-common-text rounded-3xl px-4 py-2'
                    placeholder='Digite seu username'
                    value={username}
                    onChange={handleUsername}
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="" className='text-common-text font-semibold text-xl'>Email</label>
                    <input 
                    type="text"
                    className='bg-common-text rounded-3xl px-4 py-2'
                    placeholder='Digite seu email'
                    value={email}
                    onChange={handleEmail}
                     />
                </div>
                
                <div className='flex flex-col gap-2'>
                    <label htmlFor="" className='text-common-text font-semibold text-xl'>Password</label>
                    <input 
                    type="password"
                    className='bg-common-text rounded-3xl px-4 py-2'
                    placeholder='Digite sua senha'
                    value={password}
                    onChange={handlePassword}
                     />
                </div>

                <button className='flex bg-title-color rounded-3xl font-bold justify-center py-1.5 my-1.5 transition active:scale-95 duration-150' onClick={handleRegister}>Sign-In</button>
                
            </form>


            <p className='text-common-text text-sm text-center'>Já tem uma conta? <Link className='text-blue-500 hover:underline hover:text-blue-400' to="/login">Entre aqui</Link></p>
        </div>
    </div>
  )
}

export default Register