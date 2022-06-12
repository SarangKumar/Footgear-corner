$('#screen').css('display', 'none');

$(document).ready(function(){
    console.log('successfully loaded');

    $('#shoe_type').click(function(){

        let shoe_type= $('#shoe_type option:selected').text();
        console.log(shoe_type);

        $('.item').hide();
        
        if(shoe_type=="All"){
            $('.item').show();
        }
        else if(shoe_type=="Leather Shoes"){
            $('.leather_shoes').show();
        }
        else if(shoe_type=="Sneakers"){
            $('.sneakers').show();
        }
        else if(shoe_type=="Slippers"){
            $('.slippers').show();
        }
        else if(shoe_type=="Heels"){
            $('.heels').show();
        }
        else if(shoe_type=="Boots"){
            $('.boots').show();
        }
        else if(shoe_type=="Casual"){
            $('.casual').show();
        }
        else if(shoe_type=="Groofer"){
            $('.groofer').show();
        }
        else if(shoe_type=="Chevit"){
            $('.chevit').show();
        }
        // else if(shoe_type=="Shoes"){
        //     $('.groofer').show();
        // }

    });

    $(".card_image").click(function(){
        if($(this).attr('src')=='../images/icons/icons8-heart-96 (1).png'){
            $(this).fadeOut(100);
            $(this).attr('src','../images/icons/icons8-heart-96.png');
            $(this).fadeIn(100);
        }
        else{
            $(this).fadeOut(100);
            $(this).attr('src','../images/icons/icons8-heart-96 (1).png');
            $(this).fadeIn(100);
        }
    });
    // $('.content').hover(function(){
    //     $(.optional).css('display', 'inline');
    //     console.log('cool')
    // });
    $('.cross').click(function(){
        $('#screen').css('display', 'none');
        
    });

    $('.peep_btn').click(function(){
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
           });
    });
    
    $('.peep_btn').click(function(){
        let screen_address = $(this).attr('value');
        $('#screen').css('display', 'block');
        $('.zoom_box model-viewer').attr('src', screen_address);
        $(body).css('height', '100vh');
        
    });

    $('.content').hover(function(){
        $('.content').css("background-image", "linear-gradient(#49adff, #2A7FF6);");
        console.log('hi');
    });


});
