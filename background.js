function contextMenu() {
	chrome.contextMenus.create({
		"title": "Generate QR from Page URL",
		"onclick": (info) => { console.log(info.pageUrl) }
	})
}

function selectedContextMenu() {
	chrome.contextMenus.create({
		"title": "Generate QR from \"%s\"",
		"contexts": ["selection"],
		"onclick": (info) => { console.log(info.selectionText) }
	})
}

contextMenu()
selectedContextMenu()