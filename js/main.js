const navbar = document.querySelector('.nav');


function initMap() {
    const loc = { lat: 42.361145, lng: -71.057083}

    const map = new google.maps.Map(document.querySelector('#map')
    ,{
        zoom: 14,
        center: loc
    });

    const marker = new google.maps.Marker({position: loc, map: map})
}

window.addEventListener('scroll', function(){
    if(window.scrollY > 150){
        navbar.style.opacity= 0.9;
    }
    else {
        navbar.style.opacity= 1;
    }
});

$('.navbar a, .btn').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100,
        },
        2000
      );
    }
  });