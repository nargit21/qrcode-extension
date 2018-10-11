chrome.extension.onMessage.addListener(function(message, messageSender, sendResponse) {
	document.getElementById("qrcode").innerHTML = message.data;
});