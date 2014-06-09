 jQuery(document).ready(function($) {
      
      /*start component products slider*/
      var ancMenu = $('.menu figure a');
      var attr;
      ancMenu.each(function(indice, elemento) {
         $(elemento).click(function(){
          attr = $(this).attr('href');
        $('.active').animate({
          opacity: 0,
          'z-index':20,
        },500, function(){
          $('.active').removeClass( "active" ).addClass( "inactive" );
          $(attr).animate({
            opacity:1,
            'z-index':30,
          });
          $(attr).removeClass( "inactive" ).addClass( "active" );
        });
          
       });
      });

});
var estMenu = 0;
$(".mostrarCarrito").click(function(){
  despMenu();
});
function despMenu(){
   if(estMenu == 0){
      $('.cart_detail').css('display','block')
     $('.cart_detail').animate({
         opacity:1,
     });
     estMenu= 1;
    }
    else if(estMenu == 1){
      $('.cart_detail').animate({
         opacity:0,
     },500,function(){
       $('.cart_detail').css('display','none');
     });
      estMenu= 0;
    };
};
   