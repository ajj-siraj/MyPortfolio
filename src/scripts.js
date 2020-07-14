$(document).ready(function () {

    //Initialize gifs to pre-load even before hover.
    let image1 = new Image();
    image1.src = "./img/thumbs/documentation-project.gif";
    let image2 = new Image();
    image2.src = "./img/thumbs/survey-project.gif";
    let image3 = new Image();
    image3.src = "./img/thumbs/guitarstore-project.gif";
    let image4 = new Image();
    image4.src = "./img/thumbs/cornflix.gif";
    
    //initialize bootstrap tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
    
    //projects hover -> switch to gif.
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
    $("#project-cornflix").hover(
        function () {
            $(this).attr("src", image4.src);
        },
        function () {
            $(this).attr("src", "./img/thumbs/cornflix-static.jpg");
        }
    );

});