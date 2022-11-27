import '../sass/style.sass'
import { font } from './include/font.js'
import { animation } from './include/animation.js'
import { addWebpDetectionClass } from './include/webp.js'
document.addEventListener('DOMContentLoaded', () => {
	font()
	animation()
	addWebpDetectionClass()
})
