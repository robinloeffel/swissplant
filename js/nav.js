/*global $*/

$("document").ready(function () {
    "use strict";
    var originalNavOffset = $("#landing").outerHeight();
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
});
