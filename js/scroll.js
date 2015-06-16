/*global $*/

$("document").ready(function () {
    "use strict";
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
});
