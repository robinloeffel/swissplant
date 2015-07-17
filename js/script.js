/*global $*/

$("document").ready(function () {
    "use strict";

    var originalNavOffset = $("#landing").outerHeight();

    setInterval(function () {
        rotate();
    }, 7500);

    $("[data-scroll-target]").click(function (event) {
        event.preventDefault();
        var scrollTarget = $(event.target).attr("data-scroll-target");
        $("html, body").animate({
            scrollTop: $("#" + scrollTarget).offset().top
        }, 500);
    });

    $("#landing i").click(function () {
        $("html, body").animate({
            scrollTop: $("#sortiment").offset().top
        }, 500);
    });

    $(window).on("scroll", function () {
        var currentPosition = $(window).scrollTop();
        if (currentPosition > originalNavOffset) {
            $("nav").css({
                "position": "fixed",
                "z-index": 9999,
                "top": 0,
                "left": 0
            });
            $("#landing").css({
                "margin-bottom": $("nav").outerHeight()
            });
        } else {
            $("nav").css({
                "position": "static",
                "z-index": "auto",
                "top": "auto",
                "left": "auto"
            });
            $("#landing").css({
                "margin-bottom": 0
            });
        }
    });

    function rotate() {
        if (!$("#landing h1").hasClass("hidden")) {
            $("#landing h1").addClass("hidden").fadeOut("slow", function () {
                $("#landing img").fadeIn("slow").removeClass("hidden");
            });
        } else {
            $("#landing img").addClass("hidden").fadeOut("slow", function () {
                $("#landing h1").fadeIn("slow").removeClass("hidden");
            });
        }
    }
});
