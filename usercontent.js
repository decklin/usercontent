var style = document.createElement('style');
document.documentElement.appendChild(style);
chrome.extension.sendRequest(null, function(response) {
    style.textContent = response;
});
