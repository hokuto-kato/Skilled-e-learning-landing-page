export const addWebpDetectionClass = () => {
	const target = document.querySelector('body')
	const supportsWebp = async () => {
		if (!self.createImageBitmap) return false
		const webpData =
			'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA='
		const blob = await fetch(webpData).then((r) => r.blob())
		return createImageBitmap(blob).then(
			() => true,
			() => false
		)
	}

	if (supportsWebp()) {
		target.classList.add('is-webp')
	} else {
		target.classList.add('is-no-webp')
	}
}
