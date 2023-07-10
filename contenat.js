// Function to bold the first letter of each word in all <p> elements
function boldFirstLettersInParagraphs() {
  // Select all <p> elements in the webpage
  const paragraphs = document.querySelectorAll('p');

  // Iterate through each <p> element and modify its content
  paragraphs.forEach(paragraph => {
    const originalText = paragraph.innerHTML;
    const modifiedText = boldFirstLetters(originalText);
    paragraph.innerHTML = modifiedText;
  });
}

function boldFirstLetters(text) {
  // Split the text into an array of words
  const words = text.split(' ');

  // Iterate through each word and bold the first letter
  const modifiedWords = words.map(word => {
    if (word.length > 0) {
      const firstChar = word.charAt(0);
      const restOfWord = word.slice(1);
      return `<b>${firstChar}</b>${restOfWord}`;
    } else {
      return word;
    }
  });

  // Join the modified words back into a single string
  const modifiedText = modifiedWords.join(' ');

  return modifiedText;
}

boldFirstLettersInParagraphs();