// Get visible phrases

export default (phrases, { text }) => {
  return phrases.filter((phrase) => {
    const textMatch = phrase.description.toLowerCase().includes(text.toLowerCase());

    return textMatch;
  });
};