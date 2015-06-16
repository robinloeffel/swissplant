$("document").ready(function () {
    $("[data-scroll-target]").click(function (event) {
        event.preventDefault();
        var scrollTarget = $(event.target).attr("data-scroll-target");
        $("html, body").animate({
            scrollTop: $("#" + scrollTarget).offset().top
        }, 500);
    });
});
