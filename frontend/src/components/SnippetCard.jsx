import React from 'react'

function SnippetCard({ snippet }) {
  return (
    <div className='bg-card-login rounded-2xl'>

        <div className='flex flex-row justify-between p-4 border-b-2 border-emerald-900'>
            <h3 className='font-bold text-common-text text-base md:text-lg lg:text-xl'>{snippet.title}</h3>
            <span className='text-title-color font-semibold'>{snippet.language}</span>
        </div>

        <pre className='bg-common-text overflow-hidden p-1'>
            <code className='line-clamp-6 font-code text-sm md:text-base'>
                {snippet.content}
            </code>
        </pre>

        <div className='flex flex-row justify-between'>
            <button 
                className='p-2 text-common-text border-2 border-title-color rounded-2xl font-semibold m-3 hover:border-emerald-600 hover:text-gray-300 active:scale-95 transition-all'
            >
                Ver Mais
            </button>
            <button 
                className='p-2 text-red-500 border-2 border-red-500 rounded-xl font-semibold m-3 hover:border-red-800 hover:text-red-800 active:scale-95 transition-all'
            >
                Deletar
            </button>
        </div>

    </div>
  )
}

export default SnippetCard