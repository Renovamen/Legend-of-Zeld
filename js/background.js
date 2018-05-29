(function() {

	$(function(){

		var scrolling = false;

		$('.local_nav a').click(function(e){
			e.preventDefault();
			var href = $(this).attr('href');
			var target = $(href == '#' || href == '' || href == '#home' ? $('#ncommon-ghdr-header') : $(href));
			var top = (href == '#' || href == '' || href == '#home') ? 0 : target.offset().top;
			var dur = Math.abs(top - (document.body.scrollTop || document.documentElement.scrollTop));
			if(dur > 980) dur = 980;
				$('html,body').stop().animate({scrollTop:top}, {duration:dur, easing:'ioX5', always:function(){
			scrolling = false;
			}});
		});

		var controller = new ScrollMagic.Controller();

		var sceneBackground = new ScrollMagic.Scene({
			triggerElement: '#background',
			duration: '100%'
		})
		.setClassToggle('body', 'is-active-background')
		.addTo(controller);

		var sceneBackgroundAnime = new ScrollMagic.Scene({
			triggerElement: '#trigger-background',
			duration: '40%'
		})
		.on('start', function () {
			$('body').addClass('is-scroll-strated');
		})
		.on("leave", function (event) {
			if($('body').hasClass('is-active-background')){
				$('body').removeClass('is-scroll-strated');
			}
		})
		.addTo(controller);



		var sceneLink = new ScrollMagic.Scene({
			triggerElement: '#link',
			duration: '100%'
		})
		.on('start', function () {
			$('body').addClass('is-scroll-strated');
		})
		.setClassToggle('body', 'is-active-link')
		.addTo(controller);

		var sceneZelda = new ScrollMagic.Scene({
			triggerElement: '#zelda',
			duration: '100%'
		})
		.setClassToggle('body', 'is-active-zelda')
		.addTo(controller);

		var sceneDaruk = new ScrollMagic.Scene({
			triggerElement: '#daruk',
			duration: '100%'
		})
		.setClassToggle('body', 'is-active-daruk')
		.addTo(controller);

		var sceneRevali = new ScrollMagic.Scene({
			triggerElement: '#revali',
			duration: '100%'
		})
		.setClassToggle('body', 'is-active-revali')
		.addTo(controller);

		var sceneMipha = new ScrollMagic.Scene({
			triggerElement: '#mipha',
			duration: '100%'
		})
		.setClassToggle('body', 'is-active-mipha')
		.addTo(controller);

		var sceneUrbosa = new ScrollMagic.Scene({
			triggerElement: '#urbosa',
			duration: '100%'
		})
		.setClassToggle('body', 'is-active-urbosa')
		.addTo(controller);

		var sceneGuardian = new ScrollMagic.Scene({
			triggerElement: '#guardian',
			duration: '100%'
		})
		.setClassToggle('body', 'is-active-guardian')
		.addTo(controller);

		var sceneBokoblin = new ScrollMagic.Scene({
			triggerElement: '#bokoblin',
			duration: '100%'
		})
		.setClassToggle('body', 'is-active-bokoblin')
		.addTo(controller);
		

		Polaris.util.onResize(function(w, h) {
			if(h < 700){
				sceneBackground.duration(700);
			}else{
				sceneBackground.duration('100%');
			}

			if(h < 800){
				sceneZelda.duration(800);
				sceneRevali.duration(800);
				sceneMipha.duration(800);
				sceneUrbosa.duration(800);
				sceneGuardian.duration(800);
				sceneBokoblin.duration(800);
			}else{
				sceneZelda.duration('100%');
				sceneRevali.duration('100%');
				sceneMipha.duration('100%');
				sceneUrbosa.duration('100%');
				sceneGuardian.duration('100%');
				sceneBokoblin.duration('100%');
			}

			if(h < 900){
				sceneLink.duration(900);
				sceneZelda.duration(900);
				sceneDaruk.duration(900);
			}else{
				sceneLink.duration('100%');
				sceneDaruk.duration('100%');
				sceneZelda.duration('100%');
			}

			if(h > 900){
				sceneBackground.duration(900);
			}
		});

	});

})();