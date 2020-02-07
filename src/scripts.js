$(document).ready(function () {
    let image1 = new Image();
    image1.src = "./img/thumbs/documentation-project.gif";
    let image2 = new Image();
    image2.src = "./img/thumbs/survey-project.gif";
    let image3 = new Image();
    image3.src = "./img/thumbs/guitarstore-project.gif";

    $('.welcome-message').hide();
    $('.view-more-btn').hide();
    $('.about-message').hide();
    $('.projects-message').hide();
    $('.project-card').hide();
    // $('footer').hide();
    $('.welcome-message').fadeIn(1000);
    $('.view-more-btn').fadeIn(2000);
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('.about-message').fadeIn(1000);

        }
        if ($(this).scrollTop() > 1500) {
            $('.projects-message').fadeIn(1000);
            $('.project-card').fadeIn(1000);
        }


    });

    setTimeout(function () {
        $("#project-documentation").hover(
            function () {
                $(this).attr("src", image1.src);
            },
            function () {
                $(this).attr("src", "./img/thumbs/documentation-project-static.gif");
            }
        );
        $("#project-survey").hover(
            function () {
                $(this).attr("src", image2.src);
            },
            function () {
                $(this).attr("src", "./img/thumbs/survey-project-static.gif");
            }
        );
        $("#project-guitarstore").hover(
            function () {
                $(this).attr("src", image3.src);
            },
            function () {
                $(this).attr("src", "./img/thumbs/guitarstore-project-static.gif");
            }
        );
    }, 10);


});











// //Mobile menu collapse button animation toggle
// $('#toggler-btn').on('click', function () {
//     $('#clpse-icon').toggleClass("fa-arrow-up-animated");
// });

// // Bootstrap carousel: Projects
// $('.multi-item-carousel').carousel({
//     interval: false
// });

// // for every slide in carousel, copy the next slide's item in the slide.
// // Do the same for the next, next item.
// $('.multi-item-carousel .item').each(function () {
//     var next = $(this).next();
//     if (!next.length) {
//         next = $(this).siblings(':first');
//     }
//     next.children(':first-child').clone().appendTo($(this));

//     if (next.next().length > 0) {
//         next.next().children(':first-child').clone().appendTo($(this));
//     } else {
//         $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
//     }
// });