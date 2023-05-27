import uuid from 'uuid';

// ADD_TOPIC
export const addTopic = (
  {
    description = '',
  } = {}
) => ({
  type: 'ADD_TOPIC',
  topic: {
    id: uuid(),
    description,
  }                                                                                            
});

// REMOVE_TOPIC
export const removeTopic = ({ id  } = {}) => ({
  type: 'REMOVE_TOPIC',
  id,
});

// EDIT_TOPIC
export const editTopic = (id, updates) => ({
  type: 'EDIT_TOPIC',
  id,
  updates,
});
