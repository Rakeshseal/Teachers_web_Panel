$( document ).ready(function(e) {
   
    /*Teacher Item Start*/
   $(".arrow-down1").click( function(){
     $(".arrow-up1").css("display", "block");
     $(".arrow-down1").css("display", "none");
     $(".item_li").css("display", "block");
   });

   $(".arrow-up1").click( function(){
    $(".arrow-down1").css("display", "block");
    $(".arrow-up1").css("display", "none");
    $(".item_li").css("display", "none");
  });
   
   /*Teacher Item End*/


   /*Form Item Start*/
   $(".arrow-down2").click( function(){
    $(".arrow-up2").css("display", "block");
    $(".arrow-down2").css("display", "none");
    $(".item_li2").css("display", "block");
  });

  $(".arrow-up2").click( function(){
   $(".arrow-down2").css("display", "block");
   $(".arrow-up2").css("display", "none");
   $(".item_li2").css("display", "none");
 });
  
  /*Form Item End*/


  /*Notifications Item Start*/
  $(".arrow-down3").click( function(){
    $(".arrow-up3").css("display", "block");
    $(".arrow-down3").css("display", "none");
    $(".item_li3").css("display", "block");
  });

  $(".arrow-up3").click( function(){
   $(".arrow-down3").css("display", "block");
   $(".arrow-up3").css("display", "none");
   $(".item_li3").css("display", "none");
 });
  
  /*Notifications Item End*/


  /*Events Item Start*/
  $(".arrow-down4").click( function(){
    $(".arrow-up4").css("display", "block");
    $(".arrow-down4").css("display", "none");
    $(".item_li4").css("display", "block");
  });

  $(".arrow-up4").click( function(){
   $(".arrow-down4").css("display", "block");
   $(".arrow-up4").css("display", "none");
   $(".item_li4").css("display", "none");
 });
  
  /*Events Item End*/


  /*Maps Item Start*/
  $(".arrow-down5").click( function(){
    $(".arrow-up5").css("display", "block");
    $(".arrow-down5").css("display", "none");
    $(".item_li5").css("display", "block");
  });

  $(".arrow-up5").click( function(){
   $(".arrow-down5").css("display", "block");
   $(".arrow-up5").css("display", "none");
   $(".item_li5").css("display", "none");
 });
  
  /*Maps Item End*/


  /*Charts Item Start*/
  $(".arrow-down6").click( function(){
    $(".arrow-up6").css("display", "block");
    $(".arrow-down6").css("display", "none");
    $(".item_li6").css("display", "block");
  });

  $(".arrow-up6").click( function(){
   $(".arrow-down6").css("display", "block");
   $(".arrow-up6").css("display", "none");
   $(".item_li6").css("display", "none");
 });
  
  /*Charts Item End*/

  /*left Menu Button Operation start*/

  //Menu button Function
 $(".menu_ico").click( function(){
   $(".left_sec").css("width", "60%");
   $(".x_ico").css("display", "block");
   $(".menu_ico").css("display", "none");
   $(".dash_cont").css("display", "block");
   
 });


 //X-Button Function

 $(".x_ico").click( function(){
  $(".left_sec").css("width", "20%");
  $(".menu_ico").css("display", "block");
  $(".x_ico").css("display", "none");
  $(".dash_cont").css("display", "none");
  
});


  /*left Menu Button Operation End*/


 
});