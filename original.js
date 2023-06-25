// Get all paragraph elements on the page
const paragraphs = document.getElementsByTagName('p');

// Loop through each paragraph element
for (let i = 0; i < paragraphs.length; i++) {
  // Apply inline styles to make the text bold
  paragraphs[i].style.fontWeight = 'bold';
}
