import WebFont from 'webfontloader'

export const font = () => {
	const html = document.querySelector('html')
	WebFont.load({
		google: {
			families: ['Plus Jakarta Sans:500,700,800']
		}
	})
	setTimeout(() => {
		html.classList.add('wf-inactive')
	}, 3000)
}
