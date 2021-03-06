export const fetchOnLoad = () => {
  return fetch('https://itunes.apple.com/search?term=audiobooks')
    .then(response => {
      if(!response.ok) {
        throw new Error('Could not retrieve books.')
      }
      return response.json()
    })
    .then(data => cleanBooks(data.results))
}

export const getBooks = (query) => {
  return fetch(`https://itunes.apple.com/search?media=audiobook&term=${query}`)
    .then(response => {
      if(!response.ok) {
        throw new Error('Could not retrieve books.')
      }
      return response.json()
    })
    .then(data => cleanBooks(data.results))
}

export const cleanBooks = bookData => {
  return bookData.map(book => {
    return {
      book_id: book.collectionId,
      author_name: book.artistName,
      book_name: book.collectionName,
      artwork_url: book.artworkUrl100,
      release_date: book.releaseDate,
      description: book.description,
      primary_genre_name: book.primaryGenreName
    }
  })
}

export const createUser = (newUser, route) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`http://localhost:3001/api/v1/${route}`, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('User cannot be created.')
      }
      return response.json()
    })
}

export const getFavorites = (userId) => {
  return fetch(`http://localhost:3001/api/v1/users/${userId}/bookfavorites`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not retrieve favorites.')
      }
      return response.json()
    })
}

export const postFavorite = (book, id) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`http://localhost:3001/api/v1/users/${id}/bookfavorites`, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not post favorite.')
      }
      return response.json()
    })
}

export const deleteFavorite = (id, bookId) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`http://localhost:3001/api/v1/users/${id}/bookfavorites/${bookId}`, options)
    .then(() => fetch(`http://localhost:3001/api/v1/users/${id}/bookfavorites/`))
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not delete favorite.')
      }
      return response.json()
    })
}
