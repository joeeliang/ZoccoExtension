chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "changeColor") {
      document.body.style.backgroundColor = "yellow";
    }
  });
  