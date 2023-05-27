import React from 'react';
import { Link } from 'react-router-dom';

const TopicListItem = ({id, description, phrases}) => (
  <div>
    <Link to={`/edit_topic/${id}`}>
      <h3>{description}</h3>
      <p>{phrases}</p>
    </Link>
  </div>
);

export default TopicListItem;