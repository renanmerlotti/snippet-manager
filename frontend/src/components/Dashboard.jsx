import React, { useEffect, useState } from 'react'
import Header from './Header'
import SnippetCard from './SnippetCard'
import { deleteSnippet, getAllSnippets, getMySnippets, createSnippet } from '../services/snippetService'
import Modal from './Modal';
import SnippetForm from './SnippetForm';

function Dashboard() {

  const [snippets, setSnippets] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

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

  const handleDelete = (id) => {
    console.log('ID recebido:', id, 'Tipo:', typeof id)
    console.log('IDs dos snippets:', snippets.map(s => ({ id: s.id, tipo: typeof s.id })))

    deleteSnippet(id).then(() => {
      setSnippets(snippets.filter(s => s.id !== id))
    }).catch(error => {
      console.error(error)
    })
  }

  const handleSave = (formData) => {
    createSnippet(formData).then(() => {
      setIsModalOpen(false);
      listSnippets();
    }).catch(error => {
      console.error("Erro ao criar snippet:", error)
    })
  }

  return (
    <div className='min-h-screen bg-main-background'>
      <Header />

      <main className='container mx-auto px-4 py-5'>

        <div className='flex flex-row justify-between p-4'>
          <h2 className='font-bold text-common-text text-2xl'>Meus <span className='text-title-color'>Snippets</span></h2>
          <button 
            onClick={() => setIsModalOpen(true)}
            className='p-2 border-2 border-title-color rounded-2xl text-common-text font-semibold hover:scale-98 hover:text-gray-300 hover:border-emerald-700 transition-all'
          >
            Novo Snippet
          </button>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {snippets.map(snippet => (
              <SnippetCard key={snippet.id} snippet={snippet} onDelete={handleDelete}/>
          ))}
        </div>
      </main>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Criar Novo Snippet"
      >
        <SnippetForm 
          onSave={handleSave} 
          onCancel={() => setIsModalOpen(false)} 
        />
      </Modal>

    </div>
  )
}

export default Dashboard