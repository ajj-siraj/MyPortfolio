$(document).ready(function () {
    
    //Initialize gifs to pre-load even before hover.
    let image1 = new Image();
    image1.src = "./img/thumbs/documentation-project.gif";
    let image2 = new Image();
    image2.src = "./img/thumbs/survey-project.gif";
    let image3 = new Image();
    image3.src = "./img/thumbs/guitarstore-project.gif";


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