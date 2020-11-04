$(document).ready(function(){
   var click = "";
   var bot_click = "";
    var score = 0;
    //pelin nollaus
    
function noll(){
     click = "";
    bot_click = "";
    
setTimeout(function(){    
     $("#bot_kivi").css("color",'white');
    $("#bot_paperi").css("color",'white');
    $("#bot_sakset").css("color",'white');
    
    $("#kivi").css("color",'white');
    $("#paperi").css("color",'white');
    $("#sakset").css("color",'white');
    $("#winning_txt").html("");
    
    $("#kivi_img").hide(300);
    $("#paperi_img").hide(300);
    $("#sakset_img").hide(300);
    
    $("#bot_kivi_img").hide(300);
    $("#bot_paperi_img").hide(300);
    $("#bot_sakset_img").hide(300);
    
    },3000);
        $("#score").html(score);
}    
    
    //peli
function peli(){
    
    setTimeout(function(){
         bot_click = Math.floor((Math.random() * 3)+1);
            
        
    switch (bot_click){
        case 1:
            $("#bot_kivi").css("color",'green');
            $("#bot_kivi_img").fadeIn(300);
            break;
        case 2:
            $("#bot_paperi").css("color",'green');
             $("#bot_paperi_img").fadeIn(300);
            break;
        case 3:
            $("#bot_sakset").css("color",'green');
             $("#bot_sakset_img").fadeIn(300);
            break;
    } 
     },1000);  
    
    setTimeout(function(){
      //häviöt
    if(click === bot_click){
        $("#winning_txt").html("Tasapeli");
        $("#winning_txt").css("background-color",'orange');
        noll();
    }    
    else if(click === 1 && bot_click === 2){
         $("#winning_txt").html("Hävisit");
        $("#winning_txt").css("background-color",'red');
        score -=1;
        noll();
    }else if(click === 2 && bot_click === 3){
         $("#winning_txt").html("Hävisit");
        $("#winning_txt").css("background-color",'red');
        score -=1;
        noll();
    }else if(click === 3 && bot_click === 1){
         $("#winning_txt").html("Hävisit");
        $("#winning_txt").css("background-color",'red');
        score -=1;
        noll();
    }
    
    
    //voitot
   if(click === 1 && bot_click === 3){
         $("#winning_txt").html("Voitit");
       $("#winning_txt").css("background-color",'green');
       score +=1;
       noll();
    }else if(click === 2 && bot_click === 1){
         $("#winning_txt").html("Voitit");
        $("#winning_txt").css("background-color",'green');
        score +=1;
       noll();
    }else if(click === 3 && bot_click === 2){
        $("#winning_txt").html("Voitit");
        $("#winning_txt").css("background-color",'green');
        score +=1;
        noll();
    }
    
    },2300);
}
//pelin napit    
    $("#kivi").click(function(){
        click = 1;
      $("#kivi").css("color",'red');
       $("#kivi_img").fadeIn(500);
        peli();
    });
    $("#paperi").click(function(){
        click = 2;
      $("#paperi").css("color",'red');
         $("#paperi_img").fadeIn(500);
        peli();
    });
    $("#sakset").click(function(){
         click = 3;
      $("#sakset").css("color",'red');
        $("#sakset_img").fadeIn(500);
        peli();
    });
    
   $("#score_board_watch").click(function(){
      $("#score_form").slideToggle(300); 
   });
  

});