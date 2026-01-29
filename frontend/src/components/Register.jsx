import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
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
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="" className='text-common-text font-semibold text-xl'>Email</label>
                    <input 
                    type="text"
                    className='bg-common-text rounded-3xl px-4 py-2'
                     />
                </div>
                
                <div className='flex flex-col gap-2'>
                    <label htmlFor="" className='text-common-text font-semibold text-xl'>Password</label>
                    <input 
                    type="text"
                    className='bg-common-text rounded-3xl px-4 py-2'
                     />
                </div>

                <button className='flex bg-title-color rounded-3xl font-bold justify-center py-1.5 my-1.5 transition active:scale-95 duration-150'>Sign-In</button>
                
            </form>


            <p className='text-common-text text-sm text-center'>Já tem uma conta? <Link className='text-blue-500 hover:underline hover:text-blue-400'>Entre aqui</Link></p>
        </div>
    </div>
  )
}

export default Register