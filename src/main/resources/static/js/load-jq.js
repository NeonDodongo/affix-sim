/** Mostly fancy fading...Some necessary global variables */

var strEquipId = null;
var intEquipId = null;
var clicked = false;
var affixing = false;


$(document).ready(function(){





     $("#add-base").click(function(){
        if (!clicked) {
            clicked = true;
            strEquipId = $(this).parent().parent().prop("id");
            intEquipId = 0;
            $("#add-base").text("Back");
            $("#e5").delay().fadeToggle();
            $("#e4").delay(40).fadeToggle();
            $("#e3").delay(60).fadeToggle();
            $("#e2").delay(80).fadeToggle();
            $("#e1").delay(100).fadeToggle();
            $("#search").delay(530).fadeToggle(1200);

        } else {
            clicked = false;
            strEquipId = null;
            intEquipId = null;
            $("#add-base").text("Add");
            $("#search").toggle();
            $("#e1").delay(40).fadeToggle();
            $("#e2").delay(60).fadeToggle();
            $("#e3").delay(80).fadeToggle();
            $("#e4").delay(100).fadeToggle();
            $("#e5").delay(120).fadeToggle();
        }

    });

    $("#add-e1").click(function(){
        if (!clicked) {
            clicked = true;
            strEquipId = $(this).parent().parent().prop("id");
            intEquipId = 1;
            $("#add-e1").text("Back");
            $("#e5").delay().fadeToggle();
            $("#e4").delay(40).fadeToggle();
            $("#e3").delay(60).fadeToggle();
            $("#e2").delay(80).fadeToggle();
            $("#base").delay(100).fadeToggle();
            $("#search").delay(530).fadeToggle(1200);

        } else {
            clicked = false;
            strEquipId = null;
            intEquipId = null;
            $("#add-e1").text("Add");
            $("#search").toggle();
            $("#base").delay(40).fadeToggle();
            $("#e2").delay(60).fadeToggle();
            $("#e3").delay(80).fadeToggle();
            $("#e4").delay(100).fadeToggle();
            $("#e5").delay(120).fadeToggle();
        }

    });

    $("#add-e2").click(function(){
        if (!clicked) {
            clicked = true;
            strEquipId = $(this).parent().parent().prop("id");
            intEquipId = 2;
            $("#add-e2").text("Back");
            $("#e5").delay().fadeToggle();
            $("#e4").delay(40).fadeToggle();
            $("#e3").delay(60).fadeToggle();
            $("#e1").delay(80).fadeToggle();
            $("#base").delay(100).fadeToggle();
            $("#search").delay(530).fadeToggle(1200);

        } else {
            clicked = false;
            strEquipId = null;
            intEquipId = null;
            $("#add-e2").text("Add");
            $("#search").toggle();
            $("#base").delay(40).fadeToggle();
            $("#e1").delay(60).fadeToggle();
            $("#e3").delay(80).fadeToggle();
            $("#e4").delay(100).fadeToggle();
            $("#e5").delay(120).fadeToggle();
        }
    });

    $("#add-e3").click(function(){
        if (!clicked) {
            clicked = true;
            strEquipId = $(this).parent().parent().prop("id");
            intEquipId = 3;
            $("#add-e3").text("Back");
            $("#e5").delay().fadeToggle();
            $("#e4").delay(40).fadeToggle();
            $("#e2").delay(60).fadeToggle();
            $("#e1").delay(80).fadeToggle();
            $("#base").delay(100).fadeToggle();
            $("#search").delay(530).fadeToggle(1200);

        } else {
            clicked = false;
            strEquipId = null;
            intEquipId = null;
            $("#add-e3").text("Add");
            $("#search").toggle();
            $("#base").delay(40).fadeToggle();
            $("#e1").delay(60).fadeToggle();
            $("#e2").delay(80).fadeToggle();
            $("#e4").delay(100).fadeToggle();
            $("#e5").delay(120).fadeToggle();
        }
    });

    $("#add-e4").click(function(){
        if (!clicked) {
            clicked = true;
            strEquipId = $(this).parent().parent().prop("id");
            intEquipId = 4;
            $("#add-e4").text("Back");
            $("#e5").delay().fadeToggle();
            $("#e3").delay(40).fadeToggle();
            $("#e2").delay(62).fadeToggle();
            $("#e1").delay(80).fadeToggle();
            $("#base").delay(100).fadeToggle();
            $("#search").delay(530).fadeToggle(1200);

        } else {
            clicked = false;
            strEquipId = null;
            intEquipId = null;
            $("#add-e4").text("Add");
            $("#search").toggle();
            $("#base").delay(40).fadeToggle();
            $("#e1").delay(60).fadeToggle();
            $("#e2").delay(80).fadeToggle();
            $("#e3").delay(100).fadeToggle();
            $("#e5").delay(120).fadeToggle();
        }
    });

    $("#add-e5").click(function(){
        if (!clicked) {
            clicked = true;
            strEquipId = $(this).parent().parent().prop("id");
            intEquipId = 5;
            $("#add-e5").text("Back");
            $("#e4").delay().fadeToggle();
            $("#e3").delay(40).fadeToggle();
            $("#e2").delay(60).fadeToggle();
            $("#e1").delay(80).fadeToggle();
            $("#base").delay(100).fadeToggle();
            $("#search").delay(530).fadeToggle(1200);


        } else {
            clicked = false;
            strEquipId = null;
            intEquipId = null;
            $("#add-e5").text("Add");
            $("#search").toggle();
            $("#base").delay(40).fadeToggle();
            $("#e1").delay(60).fadeToggle();
            $("#e2").delay(80).fadeToggle();
            $("#e3").delay(100).fadeToggle();
            $("#e4").delay(120).fadeToggle();
        }
    });

    $("#affix-header").click(function() {
        if (!affixing) {
            affixing = true;
            $("#stage").delay(100).fadeToggle();
            $("#affix-header-cont").animate({top: 1500});
            $("#affix").delay(600).fadeToggle();
        }
        else {
            affixing = false;
            $("#affix").delay(100).fadeToggle();
            $("#affix-header-cont").animate({bottom: 1500});
            $("#stage").delay(600).fadeToggle();
            $("#pot-affix").empty();
            $("#pass").empty();
            $("#fail").empty();
            $("#final").empty();
        }

    });

})