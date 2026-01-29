import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    function login(e) {
        e.preventDefault()

        const user = {username, password}
        console.log(user)
    }

  return (
    <div className='w-full min-h-screen flex flex-col items-center bg-main-background'>

        <h1 className='text-title-color text-5xl px-7 mt-24 mb-24 font-bold'>
            Snippet Manager
        </h1>

        <div className='bg-card-login flex flex-col items-center w-full max-w-sm p-8 gap-6 rounded-3xl'>

            <h2 className='text-common-text font-bold text-3xl text-center'>
                Log-In
            </h2>

            <form action="" className='flex flex-col gap-6'>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="" className='text-common-text font-semibold text-xl'>Username</label>
                    <input 
                    type="text"
                    className='bg-common-text rounded-3xl px-4 py-2'
                    placeholder='Digite seu username'
                    onChange={handleUsername}
                    value={username}
                    name='username'
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
                    name='password'
                    />
                </div>

                <button className='flex bg-title-color rounded-3xl font-bold justify-center py-1.5 my-1.5 transition active:scale-95 duration-150' onClick={login}>Log-In</button>
            </form>


            <p className='text-common-text text-sm text-center'>Ainda não tem uma conta? <Link className='text-blue-500 hover:underline hover:text-blue-400'>Registre-se</Link></p>
        </div>
    </div>
  )
}

export default Login