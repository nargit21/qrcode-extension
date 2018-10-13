function getSelectedText() {
	chrome.tabs.executeScript({
		code: "window.getSelection().toString()"
	}, function (selection) {
		if (selection[0] !== '') {
			createQrCode(selection[0])
		}
	});
}

function createQrCode(data) {
	const qrBlock = document.getElementById("qr-code-block");
	const img = document.createElement("img");

	img.src = `https://api.qrserver.com/v1/create-qr-code/?data=${data}&size=100x100x`;
	qrBlock.appendChild(img);
}

getSelectedText()