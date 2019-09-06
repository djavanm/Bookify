export const fetchOnLoad = () => {
  return fetch('https://itunes.apple.com/search?term=audiobooks&limit=10')
    .then(response => {
      if(!response.ok) {
        throw Error('ERROR')
      }
      return response.json()
    })
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
    .catch(error => Error(error.message))
}

export const createUser = (newUser) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  return fetch('http://localhost:3001/api/v1/users', options)
    .then(response => {
      if (!response.ok) {
        throw Error('ERROR')
      }
      return response.json()
    })
    .catch(error => Error(error.message))
}
