import React, { useEffect, useState } from 'react'
import Header from './Header'
import SnippetCard from './SnippetCard'
import { deleteSnippet, getAllSnippets, getMySnippets, createSnippet, updateSnippet } from '../services/snippetService'
import Modal from './Modal';
import SnippetForm from './SnippetForm';

function Dashboard() {

  const [snippets, setSnippets] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedSnippet, setSelectedSnippet] = useState(null)

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

  const handleOpenCreate = () => {
    setSelectedSnippet(null);
    setIsModalOpen(true);
  }

  const handleOpenEdit = (snippet) => {
    setSelectedSnippet(snippet);
    setIsModalOpen(true);
  }

  const handleSave = (formData) => {
  if (selectedSnippet) {
    updateSnippet(selectedSnippet.id, formData)
      .then(() => {
        setIsModalOpen(false)
        listSnippets()
      })
      .catch(error => console.error("Erro ao atualizar:", error))
  } else {
    createSnippet(formData)
      .then(() => {
        setIsModalOpen(false)
        listSnippets()
      })
      .catch(error => console.error("Erro ao criar:", error))
  }
}

  return (
    <div className='min-h-screen bg-main-background'>
      <Header />

      <main className='container mx-auto px-4 py-5'>

        <div className='flex flex-row justify-between p-4'>
          
          <h2 className='font-bold text-common-text text-xl sm:text-2xl'>
            Meus <span className='text-title-color'>Snippets</span>
          </h2>

          <button 
            onClick={handleOpenCreate}
            className="px-8 py-2 bg-title-color hover:bg-emerald-700 hover:scale-98 text-main-background rounded font-bold text-xs transition-all active:scale-95"
          >
            NOVO SNIPPET
          </button>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {snippets.map(snippet => (
              <SnippetCard 
              key={snippet.id}
              snippet={snippet} 
              onDelete={handleDelete}
              onEdit={() => handleOpenEdit(snippet)}
              />
          ))}
        </div>
      </main>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={selectedSnippet ? "Editar Snippet" : "Criar Novo Snippet"}
      >
        <SnippetForm 
          onSave={handleSave} 
          onCancel={() => setIsModalOpen(false)} 
          initialData={selectedSnippet}
        />
      </Modal>

    </div>
  )
}

export default Dashboard