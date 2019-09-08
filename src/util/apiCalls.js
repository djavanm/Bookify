export const fetchOnLoad = () => {
  return fetch('https://itunes.apple.com/search?term=audiobooks')
    .then(response => {
      if(!response.ok) {
        throw Error('ERROR')
      }
      return response.json()
    })
    .then(data => cleanBooks(data.results))
    .catch(error => Error(error.message))
}

export const getBooks = (query) => {
  return fetch(`https://itunes.apple.com/search?media=audiobook&term=${query}`)
    .then(response => {
      if(!response.ok) {
        throw Error('ERROR')
      }
      return response.json()
    })
    .then(data => cleanBooks(data.results))
    .catch(error => Error(error.message))
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
        throw Error('ERROR')
      }
      return response.json()
    })
    .catch(error => console.log(error.message));
}

export const getFavorites = (userId) => {
  return fetch(`http://localhost:3001/api/v1/users/${userId}/bookfavorites`)
    .then(response => {
      if (!response.ok) {
        throw Error('ERROR')
      }
      return response.json()
    })
    .catch(error => console.log(error.message));
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
        throw Error('ERROR')
      }
      return response.json()
    })
    .catch(error => console.log(error.message));
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
        throw Error('ERROR')
      }
      return response.json()
    })
    .catch(error => console.log(error.message));
}

