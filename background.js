function contextMenu() {
	chrome.contextMenus.create({
		title: "Generate QR from Page URL",
		onclick: (info) => { sendDataToPopup(info.pageUrl) }
	})
}

function selectedContextMenu() {
	chrome.contextMenus.create({
		title: "Generate QR from \"%s\"",
		contexts: ["selection"],
		onclick: (info) => { sendDataToPopup(info.selectionText) }
	})
}

function sendDataToPopup(data){
	chrome.runtime.sendMessage({"data": data})
}

contextMenu()
selectedContextMenu()