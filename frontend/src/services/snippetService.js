import api from './api'

export const getAllSnippets = () => {
    return api.get('/snippets')
}

export const getSnippetById = (id) => {
    return api.get(`/snippets/${id}`)
}

export const createSnippet = (snippet) => {
    return api.post('/snippets', snippet)
}

export const deleteSnippet = (id) => {
    return api.delete(`/snippet/${id}`)
}