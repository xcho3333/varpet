var x=0;
var k=0;
var t=0;
var y=0;
$(".searchBtn").click(function () {
    if(x==0){
        $("#search").animate({width:"80%", padding:"5px 10px 9px", transition:"all 1s ease"});
        x++;
    }
    else {
        if(document.querySelector("#search").value==""){
            $("#search").animate({width:"0",paddingLeft:"0", paddingRight:"0"});
            x=0;
        }
    }
    if($(".enterField").hasClass("showEnterField")){
        $(".enterField").toggleClass("showEnterField");
    }

});
$(".enter").click(function(event){
    $(".enterField").toggleClass("showEnterField");
	event.stopPropagation();
});

$(".more").click(function (){
    if($("#conUs").css("display") == "none"){
        $("#conUs").addClass("activeMenu");
        $("#conUs").css({"top": "28px", "right": "76px"});
    }
    else{
        $("#conUs").removeClass("activeMenu");
        $("nav").css({"padding-bottom": "36px"});
    }
    if ($("#news").css("display") == "none") {
        $("#news").addClass("activeMenu");
        $("#news").css({"top": "56px", "right": "52px"});
        $("nav").css({"padding-bottom": "64px"})
    }
    else{
        $("#news").removeClass("activeMenu");
    }
    if ($("#prv").css("display") == "none") {
        $("#prv").addClass("activeMenu");
        $("#prv").css({"top": "84px", "right": "58px"});
        $("nav").css({"padding-bottom": "92px"})
    }
    else{
        $("#prv").removeClass("activeMenu");
    }
    if ($("#serv").css("display") == "none") {
        $("#serv").addClass("activeMenu");
        $("#serv").css({"top": "112px", "right": "36px"});
        $("nav").css({"padding-bottom": "130px"})
    }
    else{
        $("#serv").removeClass("activeMenu");
    }
    if ($("#aboutUs").css("display") == "none") {
        $("#aboutUs").addClass("activeMenu");
        $("#aboutUs").css({"top": "140px", "right": "86px"});
        $("nav").css({"padding-bottom": "158px"});
    }
    else{
        $("#aboutUs").removeClass("activeMenu");
    }
});
var y=0;
$(".toDown").click(function(){
    if(y==0){
    $(".dropDown").css({"display":"block"});
        y++;
     }
    else{
        $(".dropDown").css({"display":"none"});
        y=0;
    }
});
$("body").click(function(event){
    $(".dropDown").css({"display":"none"});
    $(".prvBody").css({"display":"none"});
    $("nav").css({"margin-bottom":"0px"});
    $(".servBody").css({"display":"none"});
    k=0;
    t=0;
    y=0;
	$(".enterField").removeClass("showEnterField");
});
$(".dropDown").click(function(event){
     event.stopPropagation();
});
$(".toDown").click(function(event){
     event.stopPropagation();
});
$("#serv").click(function(){
    event.stopPropagation();
    if(k==0){
        $(".servBody").css({"display":"block"});
        $(".prvBody").css({"display":"none"});
        $("nav").css({"margin-bottom":"213px"});
        k++;
        t=0;
        if($(".more").css("display")=="block" ){
            $("nav").css({"padding-bottom": "36px"});
            $(".del").removeClass("activeMenu");
        }
    }
    else{
        $(".servBody").css({"display":"none"});
        $(".prvBody").css({"display":"none"});
        $("nav").css({"margin-bottom":"0px"});
        k=0;
    }
});
$("#prv").click(function(event){
    event.stopPropagation();
    if(t==0){
        $(".servBody").css({"display":"none"});
        $(".prvBody").css({"display":"block"});
        $("nav").css({"margin-bottom":"213px"});
        t++;
        k=0;
        if($(".more").css("display")=="block" ){
            $("nav").css({"padding-bottom": "36px"});
            $(".del").removeClass("activeMenu");
        }
    }
    else{
        $(".servBody").css({"display":"none"});
        $(".prvBody").css({"display":"none"});
        $("nav").css({"margin-bottom":"0px"});
        t=0;
    }
});
$(".servBody").click(function(event){
    event.stopPropagation();
});
$(".prvBody").click(function(event){
    event.stopPropagation();
});
$(".enterField").click(function(event){
	event.stopPropagation();
});
