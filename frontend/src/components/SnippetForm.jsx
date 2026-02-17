import React, { useState } from 'react'

function SnippetForm( { onSave, onCancel }) {

    const [formData, setFormData] = useState({
        title: '',
        language: '',
        description: '',
        content: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        onSave(formData)
    }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="grid grid-cols-2 border-b border-title-color/10">
                <input 
                    required
                    type="text"
                    placeholder="Título do Snippet"
                    className="bg-transparent p-4 text-common-text placeholder:text-common-text/20 text-sm outline-none border-r border-title-color/10 focus:bg-title-color/5 transition-colors"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
                <input 
                    required
                    type="text"
                    placeholder="Linguagem (ex: Java)"
                    className="bg-transparent p-4 text-title-color font-code text-sm outline-none focus:bg-title-color/5 transition-colors"
                    value={formData.language}
                    onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                />
            </div>

            <div className="border-b border-title-color/10">
                <input 
                    type="text"
                    placeholder="Breve descrição do que o código faz..."
                    className="w-full bg-transparent p-4 text-common-text/60 placeholder:text-common-text/20 text-xs outline-none focus:bg-title-color/5 transition-colors"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
            </div>

            <div className="bg-main-background">
                <textarea 
                    required
                    rows={12}
                    placeholder="// Escreva seu código aqui..."
                    className="w-full bg-transparent p-6 text-common-text font-code text-sm outline-none resize-none leading-relaxed"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                />
            </div>

            <div className="flex justify-end gap-6 p-4 bg-card-login border-t border-title-color/10">
                <button 
                    type="button" 
                    onClick={onCancel} 
                    className="text-xs font-bold text-common-text/40 hover:text-common-text transition-colors uppercase tracking-widest"
                >
                    Cancelar
                </button>
                <button 
                    type="submit" 
                    className="px-8 py-2 bg-title-color hover:brightness-110 text-main-background rounded font-bold text-xs transition-all active:scale-95 shadow-lg shadow-title-color/10"
                >
                    SALVAR
                </button>
            </div>
        </form>
  )
}

export default SnippetForm