import React, { useEffect, useState } from 'react'
import Header from './Header'
import SnippetCard from './SnippetCard'
import { getAllSnippets, getMySnippets } from '../services/snippetService'

function Dashboard() {

  const [snippets, setSnippets] = useState([])

  useEffect(() => {
    listSnippets()
  }, [])

  const listSnippets = () => {
    getMySnippets().then((response) => {
      setSnippets(response.data)
    }).catch(error => {
      console.error(error)
    })
  }

  return (
    <div className='min-h-screen bg-main-background'>
      <Header />

      <main className='container mx-auto px-4 py-5'>

        <div className='flex flex-row justify-between p-4'>
          <h2 className='font-bold text-common-text text-2xl'>Meus <span className='text-title-color'>Snippets</span></h2>
          <button className='p-2 border-2 border-title-color rounded-2xl text-common-text font-semibold'>Novo Snippet</button>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {snippets.map(snippet => (
              <SnippetCard key={snippet.id} snippet={snippet}/>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Dashboard