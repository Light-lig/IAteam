/**
 * Template Name: Mamba - v2.4.1
 * Template URL: https://bootstrapmade.com/mamba-one-page-bootstrap-template-free/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function ($) {
	'use strict';

	// Toggle .header-scrolled class to #header when page is scrolled
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#header').addClass('header-scrolled');
		} else {
			$('#header').removeClass('header-scrolled');
		}
	});

	if ($(window).scrollTop() > 100) {
		$('#header').addClass('header-scrolled');
	}

	// Stick the header at top on scroll
	$('#header').sticky({
		topSpacing: 0,
		zIndex: '50',
	});

	// Smooth scroll for the navigation menu and links with .scrollto classes
	var scrolltoOffset = $('#header').outerHeight() - 2;
	$(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			if (target.length) {
				e.preventDefault();

				var scrollto = target.offset().top - scrolltoOffset;

				if ($(this).attr('href') == '#header') {
					scrollto = 0;
				}

				$('html, body').animate(
					{
						scrollTop: scrollto,
					},
					1500,
					'easeInOutExpo',
				);

				if ($(this).parents('.nav-menu, .mobile-nav').length) {
					$('.nav-menu .active, .mobile-nav .active').removeClass('active');
					$(this).closest('li').addClass('active');
				}

				if ($('body').hasClass('mobile-nav-active')) {
					$('body').removeClass('mobile-nav-active');
					$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
					$('.mobile-nav-overly').fadeOut();
				}
				return false;
			}
		}
	});

	// Activate smooth scroll on page load with hash links in the url
	$(document).ready(function () {
		if (window.location.hash) {
			var initial_nav = window.location.hash;
			if ($(initial_nav).length) {
				var scrollto = $(initial_nav).offset().top - scrolltoOffset;
				$('html, body').animate(
					{
						scrollTop: scrollto,
					},
					1500,
					'easeInOutExpo',
				);
			}
		}
	});

	// Mobile Navigation
	if ($('.nav-menu').length) {
		var $mobile_nav = $('.nav-menu').clone().prop({
			class: 'mobile-nav d-lg-none',
		});
		$('body').append($mobile_nav);
		$('body').prepend(
			'<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>',
		);
		$('body').append('<div class="mobile-nav-overly"></div>');

		$(document).on('click', '.mobile-nav-toggle', function (e) {
			$('body').toggleClass('mobile-nav-active');
			$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
			$('.mobile-nav-overly').toggle();
		});

		$(document).on('click', '.mobile-nav .drop-down > a', function (e) {
			e.preventDefault();
			$(this).next().slideToggle(300);
			$(this).parent().toggleClass('active');
		});

		$(document).click(function (e) {
			var container = $('.mobile-nav, .mobile-nav-toggle');
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('mobile-nav-active')) {
					$('body').removeClass('mobile-nav-active');
					$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
					$('.mobile-nav-overly').fadeOut();
				}
			}
		});
	} else if ($('.mobile-nav, .mobile-nav-toggle').length) {
		$('.mobile-nav, .mobile-nav-toggle').hide();
	}

	// Navigation active state on scroll
	var nav_sections = $('section');
	var main_nav = $('.nav-menu, .mobile-nav');

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop() + 200;

		nav_sections.each(function () {
			var top = $(this).offset().top,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				if (cur_pos <= bottom) {
					main_nav.find('li').removeClass('active');
				}
				main_nav
					.find('a[href="#' + $(this).attr('id') + '"]')
					.parent('li')
					.addClass('active');
			}
			if (cur_pos < 300) {
				$('.nav-menu ul:first li:first').addClass('active');
			}
		});
	});

	// Intro carousel
	var heroCarousel = $('#heroCarousel');
	var heroCarouselIndicators = $('#hero-carousel-indicators');
	heroCarousel
		.find('.carousel-inner')
		.children('.carousel-item')
		.each(function (index) {
			index === 0
				? heroCarouselIndicators.append(
						"<li data-target='#heroCarousel' data-slide-to='" + index + "' class='active'></li>",
				  )
				: heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "'></li>");
		});

	heroCarousel.on('slid.bs.carousel', function (e) {
		$(this).find('h2').addClass('animate__animated animate__fadeInDown');
		$(this).find('p, .btn-get-started').addClass('animate__animated animate__fadeInUp');
	});

	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});

	$('.back-to-top').click(function () {
		$('html, body').animate(
			{
				scrollTop: 0,
			},
			1500,
			'easeInOutExpo',
		);
		return false;
	});

	// Initiate the venobox plugin
	$(window).on('load', function () {
		$('.venobox').venobox();
	});

	// jQuery counterUp
	$('[data-toggle="counter-up"]').counterUp({
		delay: 10,
		time: 1000,
	});

	// Porfolio isotope and filter
	$(window).on('load', function () {
		var portfolioIsotope = $('.portfolio-container').isotope({
			itemSelector: '.portfolio-item',
			layoutMode: 'fitRows',
		});

		$('#portfolio-flters li').on('click', function () {
			$('#portfolio-flters li').removeClass('filter-active');
			$(this).addClass('filter-active');

			portfolioIsotope.isotope({
				filter: $(this).data('filter'),
			});
			aos_init();
		});

		// Initiate venobox (lightbox feature used in portofilo)
		$(document).ready(function () {
			$('.venobox').venobox();
		});
	});

	// Portfolio details carousel
	$('.portfolio-details-carousel').owlCarousel({
		autoplay: true,
		dots: true,
		loop: true,
		items: 1,
	});

	// Init AOS
	function aos_init() {
		AOS.init({
			duration: 1000,
			easing: 'ease-in-out-back',
			once: true,
		});
	}
	$(window).on('load', function () {
		aos_init();
	});
	// enviar cambios william
	$('#login').click(function () {
		if (!$('#frmLogin').validate()) {
			return false;
		} else {
			setTimeout(function () {
				if ($('#frmLogin').valid() === true) {
					var str = $('#txtUsuario').val();
					var regex = new RegExp('[a-zA-Z]+');
					if (str.match(regex)) {
						localStorage.setItem('user', str);
						$('#user').text(localStorage.getItem('user'));
						$('#modalLoginForm').modal('hide');
						Swal.fire({
							title: 'Login correcto!',
							text: 'Bienvenido ' + str,
							icon: 'success',
							showConfirmButton: false,
							confirmButtonColor: '#8CD4F5',
							timer: 2000,
							allowEscapeKey: false,
							allowOutsideClick: false,
							backdrop: `
								rgba(0,0,123,0.4)
								url("assets/img/loader.svg")
								right+10px top+10px/ 80px
								no-repeat
							`,
							customClass: {
								content: 'mb-3',
							},
							onBeforeOpen: () => {
								Swal.showLoading();
							},
						});
					}
					if (str.length == 0 || str.text == '' || str == 'undefined') $('#name').text('Bienvenido');
					$('.form-control').removeClass('is-valid');
					$('.form-group').removeClass('has-success');
					validator.resetForm();
				}
			}, 500);
		}
	});
	var validator = $('#frmLogin').validate({
		rules: {
			txtUsuario: {
				minlength: 4,
				maxlength: 10,
				required: true,
			},
			txtPass: {
				minlength: 8,
				maxlength: 15,
				minuscula: true,
				mayuscula: true,
				numeros: true,
				special: true,
				required: true,
			},
		},
		messages: {
			txtUsuario: {
				minlength: 'El usuario debe contener al menos {0} caracteres',
				maxlength: 'El usuario debe contener no mas de {0} caracteres',
				required: 'El campo es obligatorio',
			},
			txtPass: {
				minlength: 'El usuario debe contener al menos {0} caracteres',
				maxlength: 'El usuario debe contener no mas de {0} caracteres',
				minuscula: 'Debe contener al menos dos minusculas',
				mayuscula: 'Debe contener al menos dos mayusculas',
				numeros: 'Debe contener al menos dos numeros',
				special: 'Debe contener al dos caracteres especiales',
				required: 'El campo es obligatorio',
			},
		},
		highlight: function (element) {
			$(element).closest('.form-group').removeClass('has-success');
			$(element).closest('.form-group').addClass('has-error');
			$(element).closest('.form-control').removeClass('is-valid');
			$(element).closest('.form-control').addClass('is-invalid');
		},
		unhighlight: function (element) {
			$(element).closest('.form-group').removeClass('has-error');
			$(element).closest('.form-group').addClass('has-success');
			$(element).closest('.form-control').removeClass('is-invalid');
			$(element).closest('.form-control').addClass('is-valid');
		},
		errorElement: 'span',
		errorClass: 'help-block',
		errorPlacement: function (error, element) {
			if (element.parent('.input-group').length) {
				error.insertAfter(element.parent());
			} else {
				error.insertAfter(element);
			}
		},
	});
	//modo oscuro
	$('.switch').click(function () {
		$('body').toggleClass('dark');
		$(this).toggleClass('activo');
		if ($('body').hasClass('dark')) {
			localStorage.setItem('dark-mode', 'true');
		} else {
			localStorage.setItem('dark-mode', 'false');
		}
	});
	//guardo estado modo oscuro
	if (localStorage.getItem('dark-mode') === 'true') {
		$('body').addClass('dark');
		$('.switch').addClass('activo');
	} else {
		$('body').removeClass('dark');
		$('.switch').removeClass('activo');
	}
	//cerrar modal y comprobar login falso
$(window).on('load', function () {
		if (localStorage.getItem('user') !== null) {
			$('#user').text(localStorage.getItem('user'));
			alertify.notify(
				'Bienvenido de nuevo <i class="em em-wink" aria-role="presentation" aria-label="WINKING FACE"></i>',
				'custom',
				2,
			);
		} else {
			// para que no se cierre el modal
			$('#modalLoginForm').modal({ backdrop: 'static', keyboard: false });
		}
	});
	//maxlenght
	$('#txtUsuario').on('keypress', function () {
		if ($(this).val().length >= 10) {
			return false;
		}
	});
	$('#txtPass').on('keypress', function () {
		if ($(this).val().length >= 15) {
			return false;
		}
	});
	//keypress
	$('.letras').keypress(function (e) {
		//lo hago clase para generalizar un poco
		var expresion = /[a-zA-Z\s\b]/;
		if (expresion.test(String.fromCharCode(e.which))) {
			return expresion.test(String.fromCharCode(e.which));
		} else {
			//Swal.fire("Advertencia", "Solo letras sin espacios", "warning");
			return false;
		}
	});
	// mis metodos
	$.validator.addMethod('minuscula', function (value, element) {
		return /^(?:.*[a-z]){2,}/.test(value);
	});
	$.validator.addMethod('mayuscula', function (value, element) {
		return /^(?:.*[A-Z]){2,}/.test(value);
	});
	$.validator.addMethod('numeros', function (value, element) {
		return /^(?:.*[0-9]){2,}/.test(value);
	});
	$.validator.addMethod('special', function (value, element) {
		return /^(?:.*[&+#$;:{}`^~¿?*¨´=<'>[(\]\|/)!¡%@._°,-]){2,}/.test(value);
	});
	//mostrar pass
	$('#mostrarOcultarPass a').on('click', function (event) {
		if ($('#mostrarOcultarPass input').attr('type') == 'text') {
			$('#mostrarOcultarPass input').attr('type', 'password');
			$('#mostrarOcultarPass i').addClass('icofont-eye-blocked');
			$('#mostrarOcultarPass i').removeClass('icofont-eye');
		} else if ($('#mostrarOcultarPass input').attr('type') == 'password') {
			$('#mostrarOcultarPass input').attr('type', 'text');
			$('#mostrarOcultarPass i').removeClass('icofont-eye-blocked');
			$('#mostrarOcultarPass i').addClass('icofont-eye');
		}
	});
	//logout
	$('#logout').click(function () {
		Swal.fire({
			title: 'Are you sure you want to log out?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, logout please!',
		}).then((result) => {
			if (result.isConfirmed) {
				$('#user').text('');
				localStorage.removeItem('user');
				Swal.fire({
					title: 'Logout!',
					text: 'Your session is destroyed.',
					icon: 'success',
					showConfirmButton: false,
					timer: 2000,
					customClass: {
						content: 'mb-3',
					},
				});
				setTimeout(function () {
					location.reload();
				}, 500);
			} else
				alertify.notify(
					'Bienvenido de nuevo <i class="em em-wink" aria-role="presentation" aria-label="WINKING FACE"></i>',
					'custom',
					2,
				);
		});
	});
	//Fin cambios william
})(jQuery);

//#region API MAP

//Proveedor de tileLayer
var base = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 17,
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
});

//Creación del mapa con el proveedor.
var miMapa= L.map('map', {
    layers: [base],
    zoom: 16,
    fullscreenControl: true,
    fullscreenControlOptions: {
        title:"Expandir Mapa",
        titleCancel:"Salir"
    }
});

//Funcion para centrar en el marcador
function centerLeafletMapOnMarker(map, marker) {
	var latLngs = [ marker.getLatLng() ];
	var markerBounds = L.latLngBounds(latLngs);
	map.fitBounds(markerBounds);
}

// Añadir control de escala
var escala = L.control.scale({ position: 'bottomleft', metrical: false, maxWidth: 200});
miMapa.addControl(escala);

//Marcador Personalizado
var blackIcon = new L.Icon({
	iconUrl: 'assets/img/map/marker-icon-2x-black.png',
	shadowUrl: 'assets/img/map/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

//Establecer marcador con doble clic
miMapa.doubleClickZoom.disable();

miMapa.on('dblclick', e => {
    let latLng = miMapa.mouseEventToLatLng(e.originalEvent);
    L.marker([latLng.lat, latLng.lng]).addTo(miMapa)
});

navigator.geolocation.getCurrentPosition(
    (pos) => {
        const { coords } = pos;
		var gps = L.marker([coords.latitude, coords.longitude], {icon: blackIcon}).addTo(miMapa);
		centerLeafletMapOnMarker(miMapa, gps);
        gps.bindPopup("<center><b>MI UBICACIÓN</b><br>Ubicación Obtenida</>").openPopup();
    },
    (err) => {
        console.log(error);
    },
    {
        enableHighAccuracy: true,
        timeout: 5000,
		maximumAge: 0
    }
)

//Establecer marcador
let marker = L.marker([13.6739956, -89.2788313],{icon: blackIcon}).addTo(miMapa);

marker.bindPopup("<center><b>ITCA-FEPADE</b><br>La Escuela Especializada en Ingeniería ITCA Fepade está comprometida con la calidad académica y la pertinencia de nuestra oferta educativa.</>");
var centrar = miMapa;

centerLeafletMapOnMarker(centrar, marker);


// URL PLUGIN FULLSCREEN http://brunob.github.io/leaflet.fullscreen
// API DE GEOLOCALIZACION https://leafletjs.com/

//#endregion
