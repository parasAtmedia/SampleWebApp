$(document).ready(function () {
    $("#opt1").click(function () {
        $("#page1").toggle();
        $("#page2").hide();
        $("#page3").hide();
        console.log("page1click");
    });

    $("#opt2").click(function () {
        $("#page2").toggle();
        $("#page1").hide();
        $("#page3").hide();
        console.log("page2click");
    });

    $("#opt3").click(function () {
        $("#page3").toggle();
        $("#page1").hide();
        $("#page2").hide();
        console.log("page3click");
    });
});
