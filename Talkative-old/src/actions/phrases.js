import uuid from 'uuid';

// ADD_PHRASES
export const addPhrases = (
  {
    phrases =  [],
  } = {}
) => ({
  type: 'ADD_PHRASES',
  phrases: {
    id: uuid(),
    phrases
  }                                                                                            
});

// REMOVE_PHRASES
export const removePhrases = ({ id  } = {}) => ({
  type: 'REMOVE_PHRASES',
  id,
});

// EDIT_PHRASES
export const editPhrases = (id, updates) => ({
  type: 'EDIT_PHRASES',
  id,
  updates,
});
