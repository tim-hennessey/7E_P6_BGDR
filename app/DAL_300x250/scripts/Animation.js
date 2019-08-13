var app = app || {};


app.Animation = (function () {

	var t = TweenMax;
	var tl = new TimelineMax();

	var banner = document.getElementById('banner');
	var footballWindow = document.getElementById('footballWindow');
	var txt1 = document.getElementById('txt1');
	var txt2 = document.getElementById('txt2');
	var txt3 = document.getElementById('txt3');
	var cup1 = document.getElementById('cup1');
	var cup2 = document.getElementById('cup2');
	var cup3 = document.getElementById('cup3');
	var cup4 = document.getElementById('cup4');
	var cup5 = document.getElementById('cup5');
	var cup6 = document.getElementById('cup6');
	var resolve_grp = document.getElementById('resolve_grp');
	var resolve1 = document.getElementById('resolve1');
	var resolve2 = document.getElementById('resolve2');
	var logo = document.getElementById('logo');

	var footballData = {
		wrapper: footballWindow,
		animType: 'svg',
		loop: false,
		prerender: true,
		autoplay: true,
		path: './scripts/BGDR.json'
	};

	var footballAnim = bodymovin.loadAnimation(footballData);

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

		footballAnim.setSpeed(1);
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl.to(footballWindow, .5, {x:"-=20", opacity: 0}, "+=4")
		.to(txt1, .5, {x:"-=20", opacity: 1, ease: Sine.easeOut})
		.to(txt1, .5, {x:"-=20", opacity: 0, ease: Sine.easeIn}, "+=2")

		.to(cup1, .5, {x:"-=20", opacity: 1, ease: Sine.easeOut})
		.to(txt2, .5, {x:"-=20", opacity: 1, ease: Sine.easeOut}, "-=.25")

		.to(cup1, .5, {x:"-=20", opacity: 0, ease: Sine.easeIn}, "+=.3")
		.to(cup2, .5, {x:"-=20", opacity: 1, ease: Sine.easeOut})
		.to(cup2, .5, {x:"-=20", opacity: 0, ease: Sine.easeIn}, "+=.3")
		.to(cup3, .5, {x:"-=20", opacity: 1, ease: Sine.easeOut})
		.to(cup3, .5, {x:"-=20", opacity: 0, ease: Sine.easeIn}, "+=.3")
		.to(cup4, .5, {x:"-=20", opacity: 1, ease: Sine.easeOut})
		.to(cup4, .5, {x:"-=20", opacity: 0, ease: Sine.easeIn}, "+=.3")
		.to(cup5, .5, {x:"-=20", opacity: 1, ease: Sine.easeOut})
		.to(cup5, .5, {x:"-=20", opacity: 0, ease: Sine.easeIn}, "+=.3")
		.to(cup6, .5, {x:"-=20", opacity: 1, ease: Sine.easeOut})
		.to(cup6, .5, {x:"-=20", opacity: 0, ease: Sine.easeIn}, "+=.3")

		.to(txt2, .5, {x:"-=20", opacity: 0, ease: Sine.easeIn}, "-=.25")
		.to(logo, .5, {opacity: 0}, "-=.5")
		.to(resolve_grp, .5, {x:"-=20", opacity: 1, ease: Sine.easeOut})
		.to(txt3, .5, {x:"-=20", opacity: 1, ease: Sine.easeOut}, "-=.25")

		.to(resolve1, .5, {clip:"rect(0px,195px,250px,0px)", x:"-=50", opacity: 1, ease: Sine.easeOut}, "+=1")
		.to(resolve2, .5, {clip:"rect(0px,300px,250px,195px)", x:"+=50", opacity: 1, ease: Sine.easeOut}, "-=.5")

		.to(txt3, .5, {x:"-=20", opacity: 0, ease: Sine.easeOut}, "-=.25")
		.to(txt4, .5, {x:"-=20", opacity: 1, ease: Sine.easeOut}, "-=.25");

		

	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
