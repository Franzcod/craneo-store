

const tlScroll = new TimelineMax();

tlScroll
	.set('.image', { scale: 4, transform: 'rotate(45deg)' })
	.to('.image', { scale: 1, transform: 'rotate(0)' });

const controller = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({
	triggerElement: '.trigger1',
	duration: '100%',
	tweenChanges: true
})
	.setTween(tlScroll)
	.addTo(controller);



