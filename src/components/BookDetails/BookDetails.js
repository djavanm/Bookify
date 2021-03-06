import React from 'react';
import Nav from '../../containers/Nav/Nav';
import { Markup } from 'interweave';
import { Link } from 'react-router-dom';

const BookDetails = ({ currentUser, book_name, description, release_date, primary_genre_name }) => {
  const releaseSplit = release_date.split('T')[0].split('-');
  const release = `${releaseSplit[1]}/${releaseSplit[2]}/${releaseSplit[0]}`;
  return (
    <article>
    <Nav currentUser={currentUser} />
    <div className="details-container">
      <Link to='/' className='back-btn'>◀ back</Link>
      <h2>{book_name}</h2>
      <p>Genre: {primary_genre_name}</p>
      <p>Release Date: {release}</p>
      <br />
      <Markup content={description} />
    </div>
    </article>
  )
};

export default BookDetails;
