document.addEventListener('DOMContentLoaded', () => {
  const confirmButton = document.getElementById('confirm');
  const boldnessSlider = document.getElementById('boldnessSlider')
  const value = document.getElementById('displayValue');

  confirmButton.addEventListener('click', () => {
    const boldness = parseInt(boldnessSlider.value);
    console.log(boldness);
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { boldness });
    });
  });
  boldnessSlider.addEventListener('input', () => {
    const boldness = parseInt(boldnessSlider.value);
    value.innerHTML = boldness;
  });

});
