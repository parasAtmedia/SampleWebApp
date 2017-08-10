$(document).ready(function () {
    $("#a_nav1").click(function () {

        $("#sections_nav1").show();
        $("#sections_nav2").hide();
        $("#sections_nav3").hide();
        $("#sections_nav4").hide();
        console.log("page1click");
    });

    $("#a_nav2, #btn_sections_nav1").click(function () {
        $("#sections_nav2").show();
        $("#sections_nav1").hide();
        $("#sections_nav3").hide();
        $("#sections_nav4").hide();
        console.log("page2click");
    });

    $("#a_nav3, #btn_sections_nav2").click(function () {
        $("#sections_nav3").show();
        $("#sections_nav2").hide();
        $("#sections_nav1").hide();
        $("#sections_nav4").hide();
        console.log("page3click");
    });

    $("#a_nav4, #btn_sections_nav3").click(function () {
        $("#sections_nav4").show();
        $("#sections_nav2").hide();
        $("#sections_nav1").hide();
        $("#sections_nav3").hide();
        console.log("page4click");
    });

    $("#submit_btn_sections_nav4").click(function f(){
    		console.log("Form click ");
    	var formData = JSON.stringify($("#preferences_form").serializeArray());
    	document.alert(formData);
		console.log(formData);
		$.ajax({
		  type: "POST",
		  url: "http://172.16.170.26:5555/register",
		  data: formData,
		  success: function(){ console.log("Hello");},
		  dataType: "json",
		  contentType : "application/json"
			});
	    
	    });
});

function fnChangeBorder(index){
    console.log("clicked "+ index);
    //console.log($(".select td img"));
    //console.log(document.getElementById("img"+index+"_sections_nav2"));
    $("img").css({"border-width":"0px"});
    $("#img"+index+"_sections_nav2").css({"border":"1px solid blue"});
}
