$(document).ready(function () {
    $('#toggler-btn').on('click', function () {
        $(this).parent().find(".fa").removeClass("fa-arrow-down").addClass("fa-arrow-down-animated");
    });

    $('#toggler-btn').on('click', function () {
        $(this).parent().find(".fa").removeClass("fa-arrow-down-animated").addClass("fa-arrow-up");

    });
});