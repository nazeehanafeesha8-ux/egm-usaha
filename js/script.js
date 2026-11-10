/*Slideshow*/
    var slides = document.querySelectorAll('.hero .slide');
    var current = 0;

    if(slides.length > 1){
        setInterval(function (){
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }, 5000);
    }

/*contact*/
var contactForm = document.getElementById('contact-form');

if(contactForm){
    contactForm.addEventListener('submit', function(e){
        e.preventDefault();
        var d = new FormData(e.target);
        var body = 'Name: ' + d.get('name') +
            '\nCompany: ' + d.get('company') +
            '\nPhone: ' + d.get('phone') + 
            '\nEmail: ' + d.get('email') +
            '\n\n' + d.get('message');
    window.location.href = 'mailto:nigelgkt@egmusaha.com?subject=' + 
        encodeURIComponent('Website enquiry from ' + d.get('name')) +
        '&body=' + encodeURIComponent(body);
    });
}


/*coverage*/
if(document.getElementById('coverage-map') && window.L){
var map = L.map('coverage-map', {
    zoomControl: false,
    dragging: false,
    scrollWheelZoom:false,
    doubleClickZoom: false,
    touchZoom: false,
    boxZoom: false,
    keyboard: false
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMao contributors'
    }).addTo(map);

    var places = [
        {name: 'Sarawak', lat:4.3995, lng: 113.9914, side: 'left'},
        {name: 'Sabah', lat: 5.9804, lng: 116.0735},
        {name:'Brunei', lat: 4.9031, lng: 114.9398, side: 'top'},
        {name:'Indonesia', lat: -1.2379, lng: 116.8529}
    ];

    var points = [];

    var pinIcon = L. divIcon({
        className: 'map-pin',
        html: '<i class="fa-solid fa-location-dot"></i>',
        iconSize: [34, 44],
        iconAnchor: [17, 44]
    });

    places.forEach(function (p){
        var side=p.side || 'right';
        var offset = side === 'left' ? [-18, -22] : side === 'top' ? [0, -46] : [18, -22];

        L.marker([p.lat, p.lng], {icon: pinIcon})
            .addTo(map)
            .bindTooltip(p.name, {
                permanent: true,
                direction: side,
                offset: offset,
                className: 'map-label'
            });

        points.push([p.lat, p.lng]);
    });

    map.fitBounds(points,{ padding: [40, 40]});

    window.addEventListener('load', function(){
        map.invalidateSize();
        map.fitBounds(points, { padding: [40, 40] });
    });

    window.addEventListener('resize', function (){
        map.invalidateSize();
    });
}


var sections = document.querySelectorAll('section[id]');
var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            var id = entry.target.id;
            navLinks.forEach(function (link) {
                link.classList.toggle('active', link.getAttribute('href') === '#' + id);
            });
        }
    });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach(function (section) {
    spy.observe(section);
});

/*Header shadow*/
var siteHeader = document.querySelector('header');

window.addEventListener('scroll', function(){
    if(window.scrollY > 10){
        siteHeader.classList.add(scrolled);
    }else{
        siteHeader.classList.remove('scrolled');
    }
});

/* Business bubbles */
var bubbleButtons = document.querySelectorAll('.bubble-toggle');

function closeAllBubbles() {
    bubbleButtons.forEach(function (btn) {
        btn.closest('.service-card').classList.remove('bubble-open');
        btn.setAttribute('aria-expanded', 'false');
    });
}

bubbleButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var card = btn.closest('.service-card');
        var isOpen = card.classList.contains('bubble-open');
        closeAllBubbles();
        if (!isOpen) {
            card.classList.add('bubble-open');
            btn.setAttribute('aria-expanded', 'true');
        }
    });
});

document.addEventListener('click', function (e) {
    if (!e.target.closest('.business-card')) {
        closeAllBubbles();
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeAllBubbles();
    }
});

/* Mobile menu */
var menuToggle = document.querySelector('.menu-toggle');
var navbar = document.querySelector('.navbar');

function setMenu(isOpen) {
    navbar.classList.toggle('nav-open', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    menuToggle.querySelector('i').className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}

if (menuToggle && navbar) {
    menuToggle.addEventListener('click', function () {
        setMenu(!navbar.classList.contains('nav-open'));
    });

    document.querySelectorAll('.nav-links a').forEach(function (link) {
        link.addEventListener('click', function () {
            setMenu(false);
        });
    });
}
