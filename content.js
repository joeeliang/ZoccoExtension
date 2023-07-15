// Function to bold the first letter of each word in all <p> elements
function boldFirstLetters(text, boldedAmount) {
    // Split the text into an array of words
    const words = text.split(' ');

    // Iterate through each word and bold the first letter
    const modifiedWords = words.map(word => {
        if (word.length > boldedAmount) {
        const firstChar = word.slice(0,boldedAmount);
        const restOfWord = word.slice(boldedAmount);
        return `<b>${firstChar}</b>${restOfWord}`;
        } else {
        return word;
        }
    });

    // Join the modified words back into a single string
    const modifiedText = modifiedWords.join(' ');

    return modifiedText;
}

function removeBoldTags(str) {
    const regex = /<b>|<\/b>/gi; // Regular expression to match <b> and </b> tags
    return str.replace(regex, ''); // Remove <b> tags using the replace() method
}
  
function boldFirstLettersInParagraphs(boldedAmount) {
    // Select all <p> elements in the webpage
    const paragraphs = document.querySelectorAll('p');
    const li = document.querySelectorAll('li');

    // Iterate through each <p> element and modify its content
    paragraphs.forEach(paragraph => {
        const originalText = paragraph.innerHTML;
        const boldlessText = removeBoldTags(originalText);
        const modifiedText = boldFirstLetters(boldlessText,boldedAmount);
        paragraph.innerHTML = modifiedText;
    });

    li.forEach(il => {
        const originalText = il.innerHTML;
        const boldlessText = removeBoldTags(originalText);
<<<<<<< Updated upstream
        const modifiedText = boldFirstLetters(boldlessText,boldedAmount);
=======
        const modifiedText = boldFirstLettersIgnoretag(boldlessText,boldedAmount);
>>>>>>> Stashed changes
        il.innerHTML = modifiedText;
    });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
if (request.boldness) {
    const boldness = parseInt(request.boldness);
    boldFirstLettersInParagraphs(boldness);
    console.log("IM trying");
}
});

document.addEventListener('DOMContentLoaded', () => {
    const boldness = parseInt(new URLSearchParams(window.location.search).get('boldness')) || 5;
    console.log("IaM trying");
});
