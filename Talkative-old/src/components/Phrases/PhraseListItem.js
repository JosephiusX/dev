import React from 'react';
import { Link } from 'react-router-dom';

const PhraseListItem = ({id, description, phrases}) => (
  <div>
    <Link to={`/edit_phrase/${id}`}>
      <h3>{description}</h3>
      <p>{phrases}</p>
    </Link>
  </div>
);

export default PhraseListItem;