import React from 'react';
import Nav from '../../containers/Nav/Nav';


const BookDetails = ({ currentUser, author_name, book_name, artwork_url, description, release_date, book_id, primary_genre_name }) => {
  const descriptionNew = description.split('<b>').join().split('<i>').join().split('</b>').join().split('</i>').join().split('<br />').join().split(',').join().split(',,,').join()
  const releaseSplit = release_date.split('T')[0].split('-');
  const release = `${releaseSplit[1]}/${releaseSplit[2]}/${releaseSplit[0]}`;
  return (
    <article>
    <Nav currentUser={currentUser} />
    <h2>{book_name}</h2>
    <p>Genre: {primary_genre_name}</p>
    <p>Release: {release}</p>
    <p>About: {descriptionNew}</p>
    </article>
  )
};

export default BookDetails;
