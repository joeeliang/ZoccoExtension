document.addEventListener('DOMContentLoaded', () => {
  const boldnessSlider = document.getElementById('boldnessSlider');

  boldnessSlider.addEventListener('input', () => {
    const boldness = parseInt(boldnessSlider.value);
    console.log(boldness);
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { boldness });
    });
  });

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { boldness: boldnessSlider.value });
  });
});
