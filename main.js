$(document).ready(function() {
    $("#innerpageTitle").hide();
    $("#enterbutton").click(function() {
        $("#enterbutton").fadeOut(0);
        $("#innerpageTitle").fadeIn(700);

        $("#largecontainer").css({"background-color":"black"});

        $("#container1").css({"background-color":"black"});
        $("#container1").mouseover(function() {
            $("#object1").css("visibility", "visible");
            $("#container1").css({"background-color":"white"});
        });

        $("#container2").css({"background-color":"black"});
        $("#container2").mouseover(function() {
            $("#object2").css("visibility", "visible");
            $("#container2").css({"background-color":"white"});
        });

        $("#container3").css({"background-color":"black"});
        $("#container3").mouseover(function() {
            $("#object3").css("visibility", "visible");
            $("#container3").css({"background-color":"white"});
        });

        $("#container4").css({"background-color":"black"});
        $("#container4").mouseover(function() {
            $("#object4").css("visibility", "visible");
            $("#container4").css({"background-color":"white"});
        });
    });
});