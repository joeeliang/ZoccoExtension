// Function to bold the first letter of each word in all <p> elements
function boldFirstLettersIgnoretag(text, boldedAmount) {
    // Split the text into an array of words
    const words = text.split(' ');
  
    // Replace each matched tag and its content with modified content

    // Iterate through each word and bold the first letter
    const modifiedWords = words.map(word => {
        console.log(word);
        console.log(typeof word);
        let tags = '&<>=\'\"';

        if (tags.split("").some(char => word.includes(char))){
            console.log("This has equal tag! Skip!")
            return word;
        } else if(word.length > boldedAmount) {
            const firstChar = word.slice(0,boldedAmount);
            const restOfWord = word.slice(boldedAmount);
            return `<b>${firstChar}</b>${restOfWord}`;
        } else {
            return `<b>${word}</b>`;
        }
    });

    // Join the modified words back into a single string
    const modifiedText = modifiedWords.join(' ');

    return modifiedText;
}

function boldFirstLetters(text, boldedAmount) {
    // Match opening and closing HTML tags and their content
    const regex = /(<\/?[a-zA-Z]+\b[^>]*>)([^<>]+)/g;
  
    // Replace each matched tag and its content with modified content
    const modifiedText = text.replace(regex, (match, tag, content) => {
        if (tag.includes('<a') && tag.includes('href=')) {
            console.log("returned, a tag found");
            console.log(match)
            return match; // Skip modification for <a> tags with href attribute
        }
  
    const modifiedContent = content.replace(/\b(\w)/g, (wordMatch) => {
        console.log("Below is the match thingy");
        console.log(wordMatch);
        const firstChar = wordMatch.slice(0, boldedAmount);
        const restOfWord = wordMatch.slice(boldedAmount);
        console.log("returned, modified")
        console.log(`<b>${firstChar}</b>${restOfWord}`)
        return `<b>${firstChar}</b>${restOfWord}`;
    });
        console.log("returned content modified")
        console.log(tag + modifiedContent);
        return tag + modifiedContent;
    });

    console.log("All returns passed, this is the end")
    console.log(modifiedText);
    return modifiedText;
}
  

function removeBoldTags(str) {
    const regex = /<b>|<\/b>/gi; // Regular expression to match <b> and </b> tags
    return str.replace(regex, ''); // Remove <b> tags using the replace() method
}
  
function boldFirstLettersInParagraphs(boldedAmount) {
    // Select all <p> elements in the webpage
    const paragraphs = document.querySelectorAll("p, li");

    // Iterate through each <p> element and modify its content
    paragraphs.forEach(paragraph => {
        const originalText = paragraph.innerHTML;
        const boldlessText = removeBoldTags(originalText);
        const modifiedText = boldFirstLettersIgnoretag(boldlessText,boldedAmount);
        paragraph.innerHTML = modifiedText;
    });
}

function changeHtml(num){
    const output = document.getElementById("sliderValue");
    output.innerHTML = num;
    console.log("Changed")
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
if (request.boldness) {
    const boldness = parseInt(request.boldness);
    boldFirstLettersInParagraphs(boldness);
    changeHtml(boldness);
    console.log("IM trying");
}
});

document.addEventListener('DOMContentLoaded', () => {
    const boldness = parseInt(new URLSearchParams(window.location.search).get('boldness')) || 5;
    console.log("IaM trying");
});