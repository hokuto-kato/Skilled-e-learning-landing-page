import gsap, { Power4 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CustomEase from 'gsap/CustomEase'
import { spanWrapText } from './spanWrapText.js'

export const animation = () => {
	gsap.registerPlugin(ScrollTrigger)
	gsap.registerPlugin(CustomEase)
	const headerHeading = document.querySelector('[data-gsap-header-heading]')
	const headerHeadingBorder = document.querySelector(
		'[data-gsap-header-heading-border]'
	)
	const headerHeadingBtn = document.querySelector(
		'[data-gsap-header-heading-btn]'
	)
	const heroDesc = document.querySelector('[data-gsap-hero-desc]')
	spanWrapText(
		'home-hero__ttl-body-text',
		'data-gsap-hero-ttl-body',
		'data-gsap-hero-ttl-body-text'
	)
	const heroTtlText = document.querySelectorAll(
		'[data-gsap-hero-ttl-body-text]'
	)
	const heroBtn = document.querySelector('[data-gsap-hero-btn]')
	const heroImg = document.querySelector('[data-gsap-hero-img]')
	const heroHours = document.querySelector('[data-gsap-hero-hours]')
	const heroMembers = document.querySelector('[data-gsap-hero-members]')
	const heroRectOverlay = document.querySelector(
		'[data-gsap-hero-rect-overlay]'
	)
	const courses = document.querySelectorAll('[data-gsap-courses]')

	//	init
	gsap.set([headerHeading, headerHeadingBtn, heroTtlText], {
		y: 100
	})
	gsap.set([heroDesc, heroBtn, heroImg, heroHours, heroMembers, courses], {
		opacity: 0,
		y: 10
	})
	gsap.set(heroRectOverlay, {
		width: '105%',
		scaleX: 1
	})

	//	timeline
	const heroTl = gsap.timeline()
	heroTl.to(headerHeadingBorder, {
		duration: 1,
		scaleX: 1,
		ease: Power4.easeOut
	})
	heroTl.to(
		headerHeading,
		{
			duration: 1,
			y: 0,
			ease: Power4.easeOut
		},
		'heading'
	)
	heroTl.to(
		headerHeadingBorder,
		{
			duration: 1,
			scaleX: 0,
			transformOrigin: 'right',
			ease: Power4.easeOut
		},
		'heading'
	)
	heroTl.to(
		headerHeadingBtn,
		{
			duration: 1,
			y: 0,
			ease: Power4.easeOut
		},
		'heading'
	)
	heroTl.to(
		heroTtlText,
		{
			duration: 1,
			y: 0,
			ease: Power4.easeOut,
			stagger: 0.01
		},
		'heading'
	)
	heroTl.to(
		heroDesc,
		{
			duration: 1,
			opacity: 1,
			y: 0,
			ease: Power4.easeOut
		},
		'-=0.7'
	)
	heroTl.to(
		heroBtn,
		{
			duration: 1,
			opacity: 1,
			y: 0,
			ease: Power4.easeOut
		},
		'-=0.8'
	)
	heroTl.to(
		heroRectOverlay,
		{
			duration: 1,
			scaleX: 0,
			transformOrigin: 'left',
			ease: Power4.easeOut
		},
		'-=1.1'
	)
	heroTl.to(
		heroImg,
		{
			duration: 1,
			opacity: 1,
			y: 0,
			ease: Power4.easeOut
		},
		'-=1'
	)
	heroTl.to(
		heroMembers,
		{
			duration: 1,
			opacity: 1,
			y: 0,
			ease: Power4.easeOut
		},
		'-=0.8'
	)
	heroTl.to(
		heroHours,
		{
			duration: 1,
			opacity: 1,
			y: 0,
			ease: Power4.easeOut
		},
		'<'
	)
	heroTl.to(
		courses,
		{
			duration: 1,
			opacity: 1,
			y: 0,
			ease: Power4.easeOut
		},
		'<'
	)
}
