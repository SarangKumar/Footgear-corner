$(document).ready(function() {
    $('.ham').click(function(){
        $('.sticky_options').css("display", "block");
        $('.top_section').css("border-radius", "0px");
        $('.sticky').css("width", "100vw");
        $('.sticky').css("height", "60px");
        $('.top_section').css("top","50px");
        $('.sticky').css("text-align", "center");

        // console.log('this is ham');

    });

});