import React from 'react'

function SnippetCard({ snippet, onDelete, onEdit }) {
  return (
    <div className='bg-card-login rounded-2xl'>

        <div className='flex flex-row justify-between p-4'>
            <h3 className='font-bold text-common-text text-base md:text-lg lg:text-xl'>{snippet.title}</h3>
            <span className='text-title-color font-semibold'>{snippet.language}</span>
        </div>

        <pre className='bg-main-background overflow-hidden p-1 h-36 border-x-4 border-card-login'>
            <code className='line-clamp-6 p-2 text-common-text font-code text-sm md:text-base'>
                {snippet.content}
            </code>
        </pre>

        <div className='flex justify-end items-center rounded-b-2xl gap-6 p-4 bg-card-login'>
            <button 
                type="button"
                onClick={() => onDelete(snippet.id)}
                className="text-xs font-bold text-red-500 hover:text-red-800 hover:scale-98 transition-all tracking-widest"
            >
                DELETAR
            </button>
            <button 
                type="button"
                onClick={onEdit}
                className="px-8 py-2 bg-title-color hover:bg-emerald-700 hover:scale-98 text-main-background rounded font-bold text-xs transition-all active:scale-95"
            >
                VER MAIS
            </button>
        </div>

    </div>
  )
}

export default SnippetCard