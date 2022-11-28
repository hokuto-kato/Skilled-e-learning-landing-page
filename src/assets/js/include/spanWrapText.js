export const spanWrapText = (className, target, data) => {
	const targets = document.querySelectorAll(`[${target}]`)
	targets.forEach((target) => {
		let returnText = ''
		const nodes = [...target.childNodes]
		nodes.forEach((node) => {
			if (node.nodeType === 3) {
				const text = node.textContent
				const splitText = text.split('')
				const wrapText = splitText.map((char) => {
					return `<span class="${className}" ${data}>${char}</span>`
				})
				returnText += wrapText.join('')
			} else {
				returnText += node.outerHTML
			}
		})
		target.innerHTML = returnText
	})
}
