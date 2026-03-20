javascript: (async () => {
	try {
		const el = document.querySelector('div[fen]')
		if (!el) throw new Error('Div with fen attribute not found')

		const fen = el.getAttribute('fen')
		if (!fen) throw new Error('FEN attribute not found')

		await navigator.clipboard.writeText(fen)
	} catch (err) {
		alert('Failed: ' + err.message)
		console.error(err)
	}
})()
