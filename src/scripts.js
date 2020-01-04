$(document).ready(function () {

    $('#toggler-btn').on('click', function(){
        $('#clpse-icon').toggleClass("fa-arrow-up-animated");
        // var state = $('#toggler-btn').attr('aria-expanded');
        // if(state){
        //     console.log("the if statement passed. Expanded is: ", state);
        //     $('#clpse-icon').removeClass("fa-arrow-up-animated").addClass("fa-arrow-down-animated");
        //     // $('#clpse-icon').addClass("fa-arrow-down-animated");
        // }

        // else{
        //     $('#clpse-icon').removeClass("fa-arrow-down-animated").addClass("fa-arrow-up-animated");
        //     // $('#clpse-icon').addClass("fa-arrow-up-animated");
        // }
    });

    //This idea could work, I'll keep it for reference:
    // $('#toggler-btn').on('shown.bs.collapse',function(){
    //     $('#clpse-icon').removeClass("fa-arrow-down").addClass("fa-arrow-up");
    // });
    // $('#toggler-btn').on('hidden.bs.collapse',function(){
    //     $('#clpse-icon').removeClass("fa-arrow-up").addClass("fa-arrow-down");
    // });


    // console.log($('#toggler-btn').attr('aria-expanded'));
    // if($('#toggler-btn').attr('aria-expanded')){
    //     console.log("the if statement passed");
    //     $('#toggler-btn').on('click', function(){
    //         $('#clpse-icon').addClass("fa-arrow-down-animated");
    //     });
    // }

    // else{
    //     console.log("the if statement FAILED");
    //     $('#toggler-btn').on('click', function(){
    //         $('#clpse-icon').addClass("fa-arrow-up-animated");
    //     });
    // }

    
    // $('#toggler-btn').on('click', function () {
    //     $(this).parent().find(".fa").removeClass("fa-arrow-down").addClass("fa-arrow-down-animated");
    // });

    // $('#toggler-btn').on('click', function () {
    //     $(this).parent().find(".fa").removeClass("fa-arrow-down-animated").addClass("fa-arrow-up");

    // });
});