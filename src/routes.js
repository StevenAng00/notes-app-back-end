const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require('./handler')

const routes = [
  // Untuk menambahkan catatan
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ['*']
      }
    }
  },
  // Untuk nampilin catatan
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler
  },
  // Untuk nampilin catatan lebih speisifik
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler
  },
  // Untuk edit catatan
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler
  },
  // Untuk hapus catatan
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler
  }
]

module.exports = routes
