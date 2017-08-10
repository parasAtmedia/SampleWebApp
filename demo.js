$(document).ready(function () {
    $("#a_nav1").click(function () {
        $("#sections_nav1").toggle();
        $("#sections_nav2").hide();
        $("#sections_nav3").hide();
        $("#sections_nav4").hide();
        console.log("page1click");
    });

    $("#a_nav2").click(function () {
        $("#sections_nav2").toggle();
        $("#sections_nav1").hide();
        $("#sections_nav3").hide();
        $("#sections_nav4").hide();
        console.log("page2click");
    });

    $("#a_nav3").click(function () {
        $("#sections_nav3").toggle();
        $("#sections_nav2").hide();
        $("#sections_nav1").hide();
        $("#sections_nav4").hide();
        console.log("page3click");
    });

    $("#a_nav4").click(function () {
        $("#sections_nav4").toggle();
        $("#sections_nav2").hide();
        $("#sections_nav1").hide();
        $("#sections_nav3").hide();
        console.log("page4click");
    });
});
