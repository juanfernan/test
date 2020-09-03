/*!
    * Start Bootstrap - Creative v6.0.3 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict


// Adivinanza
var contadorR = 0;    
var respuesta = 0;
var respuestaCorrecta = 2004; 
var intentosRestantes = 4;

function contadorRestantes(){
    var html = "";
    intentosRestantes--;
    console.log(intentosRestantes)
    html+=`<h3>${intentosRestantes}</h3>`;
    document.getElementById("intentosMostrar").innerHTML = html;

    
}
function contadorDeIntentos(){
    contadorRestantes();
    contadorR++;
    respuesta = parseInt(document.getElementById("respuestaObtenida").value) ;
    if(respuesta === this.respuestaCorrecta){
        var html ="";
        document.getElementById("botonIntento").disabled="true";
        document.getElementById("respuestaObtenida").disabled="true";
        html+=`<h5>¡Felicitaciones, es correcto!</h5> <h5>`;
        document.getElementById("pistasDar").innerHTML = html;


    }
    else{
    this.darPistas();
    }
};

function darPistas(){
    var html ="";
    if(this.contadorR === 1) {
        html+=`<h5>Te quedan 3 intentos</h5>`;
        document.getElementById("pistasDar").innerHTML = html;
    }
    else if(this.contadorR === 2) {
        html+=`<h5>Ayuda:</h5> <h5>Primer pista  </h5><h5>Fue en el mismo año que las olimpiadas de Atenas</h5>`;
        document.getElementById("pistasDar").innerHTML = html;
    }
    else if(this.contadorR === 3 ) {
        html+=`<h5>Ayuda:</h5> <h5>Segunda pista  </h5><h5>Fue entre el 2000 y el 2005</h5>`;
        document.getElementById("pistasDar").innerHTML = html;
    }
    else if(this.contadorR <= 4) {
        document.getElementById("botonIntento").disabled="true";
        document.getElementById("respuestaObtenida").disabled="true";
        html+=`<h5> Perdiste, si quiere saber mas sobre la historia de Ubuntu, puede encontrarla <a href="http://www.hortalinux.org/ca/historia-ubuntu-2/">aqui</a> </h5>`;
        document.getElementById("pistasDar").innerHTML = html;
    };

};

