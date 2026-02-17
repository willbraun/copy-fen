javascript: (async () => {
	try {
		const el = document.querySelector('.analysis-view-lines')
		if (!el) throw new Error('Element .analysis-view-lines not found')

		const fen = el.getAttribute('fen')
		if (!fen) throw new Error('FEN attribute not found')

		await navigator.clipboard.writeText(fen)
	} catch (err) {
		alert('Failed: ' + err.message)
		console.error(err)
	}
})()
