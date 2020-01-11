/* Owl Carousel */
$(function () {
    $("#slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
    });
});

/* Proizvodi */
$(function () {
    $("#slider-proizvodi").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
});

/* Tim */
$(function () {
    $("#slider-tim").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    });
});

// Smooth scroll
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        var section = $(this).attr("href");

        $("html,body").animate({
            scrollTop: $(section).offset().top
        }, 1250, "easeInOutExpo");
    });
});

// Promjena klase .container na .container-fluid za male uređaje
$(function () {
    if ($(window).width() < 768) {
        var newClass = $(".container");
        newClass.toggleClass("container-fluid");
    }

});

// Collapsed navbar
$(function () {
    $(".navbar-toggler-icon").click(function () {
        $(".navbar").addClass("bg-nav");
    });
});

$(window).scroll(function () {
    var navbar = $(".navbar");
    if ($(window).scrollTop() < 80) {
        navbar.removeClass("bg-nav");
    } else {
        navbar.addClass("bg-nav");
    }
});


$(function(){
    $(".send").on("click", function(){
        window.open("mailto:ipsumaaa@gmail.com?subject=" + document.getElementById("subject").value + "&body=" + document.getElementById("message").value + "%0A%0A" + document.getElementById("name").value + "%0A%0A");
    });
});