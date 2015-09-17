/*global $*/

$("document").ready(function () {
    "use strict";

    var rotateCount = 1;

    setInterval(function () {
        rotate();
    }, 10000);

    function rotate() {
        switch (rotateCount) {
        case 1:
            $(".cover-parent-background.rotate.one").removeClass("top");
            $(".cover-parent-background.rotate.two").addClass("top");
            rotateCount++;
            break;
        case 2:
            $(".cover-parent-background.rotate.two").removeClass("top");
            $(".cover-parent-background.rotate.three").addClass("top");
            rotateCount++;
            break;
        case 3:
            $(".cover-parent-background.rotate.three").removeClass("top");
            $(".cover-parent-background.rotate.one").addClass("top");
            rotateCount = 1;
            break;
        }
    }

    $("[data-scroll-target]").click(function (event) {
        event.preventDefault();
        var scrollTarget = $(event.target).attr("data-scroll-target");
        $("html, body").animate({
            scrollTop: ($("#" + scrollTarget).offset().top) - (89)
        }, 500);
    });
});
