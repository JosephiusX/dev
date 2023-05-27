import moment from 'moment';

// Get visible topics

export default (topics, { text }) => {
  return topics.filter((topic) => {
    const textMatch = topic.description.toLowerCase().includes(text.toLowerCase());

    return textMatch;
  });
};