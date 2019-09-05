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
