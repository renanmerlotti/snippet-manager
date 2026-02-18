import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token")

        toast.success("Sessao encerrada")

        navigate("/login")
    }

  return (
    <header className='w-full bg-main-background sticky top-0 border-b-2 border-emerald-900/50 shadow-md'>
        <div className='container mx-auto flex items-center justify-between md:px-6'>

            <div>
                <h1 className='font-bold text-xl md:text-3xl text-title-color p-4 md:p-6'>Snippet <span className='text-common-text'>Manager</span></h1>
            </div>
            
            <nav className='flex flex-row justify-between gap-4 md:gap-8'>
                <div className='flex flex-row items-center gap-2 cursor-pointer justify-center'>
                    <div className='bg-emerald-900 rounded-full font-bold text-common-text w-8 h-8 text-center'>
                        <p className='mt-0.5'>A</p>
                    </div>
                    <span className='text-common-text font-semibold text-lg hover:text-gray-300 hidden sm:block'>Meu Perfil</span>
                </div>

                <button 
                className="px-8 py-2 bg-red-700 mr-2 hover:bg-red-800 hover:scale-98 text-main-background rounded font-bold text-xs transition-all active:scale-95" 
                onClick={handleLogout}
                >
                    <p className='mb-0.5'>LOG-OUT</p>
                </button>
            </nav>
        </div>
    </header>
  )
}

export default Header