function heroVideo() {
    $(document).on('touchstart click', '#game-video-play-btn', function() {
        $('#game-video-play-container').fadeOut(500, 'swing', function() {
            // do something after fadeOut completed
            $('#game-video').fadeIn(500, 'swing', function() {
                // after fadeIn complete add autoplay to youtube video
                $('#game-video')[0].src += "&autoplay=1";
            });
        });
    });
}

// After DOM elements are loaded
$(document).ready(function() {
    heroVideo();
});

// fade in testmonials as they enter viewport
(function($) {
    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function(partial) {
        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };
})(jQuery);


$(window).scroll(function(event) {
    $(".monial .relative_container").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in");
        }
    });
});


// Floating Dust Particles
$.fn.extend({
    dustParticles: function(uniqueID, particlesNumber, opacity, red, green, blue) {
        return this.each(function() {
            //Generate a 'canvas' with size of element selected from the DOM .
            var width = $(this).width();
            var height = $(this).height();
            var canvas = document.createElement('canvas');
            canvas.id = uniqueID;
            $(this).append(canvas);
            //Generate the context of canvas
            var ctx = canvas.getContext('2d');
            canvas.width = width;
            canvas.height = height;
            var particles = [];
            var particleLimit = particlesNumber;
            //We create our funny particles !
            for (var i = particleLimit; i--;) {
                particles.push(new particle());
            }

            //Function generating the object particles , having size , radio, opacity, initial position and color.
            function particle() {
                this.speed = {
                    x: Math.random() * 2 - 0.5,
                    y: Math.random() * 2 - 0.5
                };
                this.radius = Math.random() * (10 - 1) + 1;
                //console.log(this.radius)
                this.opacity = opacity / this.radius;
                this.r = red;
                this.g = green;
                this.b = blue;
                this.x = Math.random() * (canvas.width - 0) + 0;
                this.y = Math.random() * (canvas.height - 0) + 0;
                this.color = this.color = 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.opacity + ')';
            }

            function live() {
                //We repainted the canvas to create the sensation of movement.
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                particles.forEach(function(element, index) {
                    ctx.beginPath();
                    var gradient = ctx.createRadialGradient(element.x, element.y, 0, element.x, element.y, element.radius);
                    gradient.addColorStop(1, 'rgba(' + element.r + ', ' + element.g + ', ' + element.b + ', 0)');
                    gradient.addColorStop(0.5, 'rgba(' + element.r + ', ' + element.g + ', ' + element.b + ', ' + (element.opacity / 2) + ')');
                    gradient.addColorStop(0, 'rgba(' + element.r + ', ' + element.g + ', ' + element.b + ', ' + element.opacity + ')');
                    ctx.fillStyle = gradient;
                    ctx.arc(element.x, element.y, element.radius, 0, Math.PI * 2, true);
                    ctx.fill();
                    //New position of particles
                    element.x += element.speed.x;
                    element.y += element.speed.y;
                    //We avoid the particles are beyond our territory!
                    if (element.x < -50) element.x = canvas.width + 50;
                    if (element.y < -50) element.y = canvas.height + 50;
                    if (element.x > canvas.width + 50) element.x = -50;
                    if (element.y > canvas.height + 50) element.y = -50;
                });
            }
            setInterval(live, 33);
        });
    }
});


// After DOM elements are loaded
$(document).ready(function() {

    var browserIsMS = false;
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
        browserIsMS = true;
    }

    // do not show in IE and Edge
    if ($('body').width() >= 1200 && browserIsMS != true) {

        // scene 05
        appear({
            init: function init() {
                //console.log('dom is ready');
            },
            elements: function elements() {
                // work with all elements with the class "track"
                return document.getElementsByClassName('scene-05');
            },
            appear: function appear(el) {
                //console.log('visible', el);
                $('.scene-05 .background').dustParticles('dustParticles-scene-05', 200, 2, 255, 255, 0);
            },
            disappear: function disappear(el) {
                //console.log('no longer visible', el);
                $('#dustParticles-scene-05').remove();
            },
            bounds: 25,
            reappear: true
        });

        // scene 04
        appear({
            init: function init() {
                //console.log('dom is ready');
            },
            elements: function elements() {
                // work with all elements with the class "track"
                return document.getElementsByClassName('scene-04');
            },
            appear: function appear(el) {
                //console.log('visible', el);
                $('.scene-04 .background').dustParticles('dustParticles-scene-04', 200, 2, 255, 255, 0);
            },
            disappear: function disappear(el) {
                //console.log('no longer visible', el);
                $('#dustParticles-scene-04').remove();
            },
            bounds: 25,
            reappear: true
        });

        // scene 01
        appear({
            init: function init() {
                //console.log('dom is ready');
            },
            elements: function elements() {
                // work with all elements with the class "track"
                return document.getElementsByClassName('scene-01');
            },
            appear: function appear(el) {
                //console.log('visible', el);
                $('.scene-01 .background').dustParticles('dustParticles-scene-01', 200, 2, 215, 215, 255);
            },
            disappear: function disappear(el) {
                //console.log('no longer visible', el);
                $('#dustParticles-scene-01').remove();
            },
            bounds: 25,
            reappear: true
        });

    }

    // // show it it IE and Edge
    // if ($('body').width() >= 1200) {
    //     // scene 01
    //     $('.scene-01 .background').dustParticles('dustParticles-scene-01', 200, 2, 0, 255, 128);
    // }
});

jQuery.rnd = function(m, n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor(Math.random() * (n - m + 1)) + m;
}

function menuAnimation() {
    // menu particles animation
    // add the div container to house menu particles animation
    $('nav#zelda-main-menu ul li').append('<div></div>');
    // animate it
    $.each($("nav#zelda-main-menu ul li div"), function() {
        for (var i = 20; i--;) {
            var size = ($.rnd(20, 60) / 2);
            var rot = $.rnd(0, 360);
            $(this).append('<span class="particle" style="top:' + $.rnd(-10, 40) + '%; left:' + $.rnd(50, 120) + '%;width:' + (size * 2) + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0, 10)) + 's;transform:rotate(' + rot + 'deg)"></span>');
        }
    });
}

function cdTop() {

    window.asTimer = null;
    window.isPolite = 1;

    $(window).on('mousemove', function() { politeScroll(); });
    $(window).on('mousewheel DOMMouseScroll', function() { politeScroll(); });
    $(window).on('touchmove', function() { politeScroll(); });

    function politeScroll() {
        window.curTop = $(window).scrollTop();

        // gasp! a hitchiker!
        // show the little logo if scrolling the page
        if (window.curTop > 0 && !$('nav .cd-top').hasClass('scrolled')) {
            $('nav .cd-top').addClass('scrolled');
        } 
        else if (window.curTop == 0) {
            $('nav .cd-top').removeClass('scrolled');
        }

        if (window.isPolite == 1) {
            clearTimeout(window.asTimer);
            window.asTimer = setTimeout(function() {
                var _top = $(window).scrollTop();
                if (window.curTop == _top) {
                    // console.log('firing!');
                    $('.polite').each(function() {
                        var $this = $(this);
                        var boxHeight = this.offsetHeight;
                        var boxTop = this.offsetTop;
                        var winHeight = window.innerHeight;
                        if (_top < boxTop - (winHeight * 0.5) || _top > boxTop + boxHeight - (winHeight * 0.5)) return;

                        if (_top > (boxTop + (boxHeight * 0.5) - (winHeight * 0.5) * 1.1) && _top < (boxTop + (boxHeight * 0.5) - (winHeight * 0.5) * 0.9)) return false;

                        if (_top > boxTop - (winHeight * 0.5) && _top < boxTop + boxHeight - (winHeight * 0.5) && winHeight > $(this).children('.inside').height()) {
                            // console.log(_top > boxTop-(winHeight*0.5) && _top < boxTop+boxHeight+(winHeight*0.5));
                            window.isPolite = 0;
                            $('body').stop().animate({ scrollTop: (boxTop + (boxHeight * 0.5) - (winHeight * 0.5)) }, 1000, function() {
                                setTimeout(function() {
                                    window.isPolite = 1;
                                }, 2000);
                            });
                            return false;
                        }
                    });
                }
            }, 2000);
        }
    }
}

// After DOM elements are loaded
$(document).ready(function() {
    cdTop();
    menuAnimation();
});

function scrollDown(target) {
    var coverOffset;
    if(target == 'top') coverOffset = 0;
    else coverOffset = $(target).offset().top;
    $('html, body').animate({
        scrollTop: coverOffset
    }, 500)
}