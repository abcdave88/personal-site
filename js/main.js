console.log('hello world')

$(document).ready(function(){

   // $("celeste-gallery").fancybox()  

   $(function() {
    $('a.celeste-gallery').fancybox({
                   type:'image',
                   padding: 0,
                   scrolling: 'no',
                   helpers : {
                        overlay: {
                           css: {'background-color': '#000'},
                           opacity: 0.3
                        },
                        title : { type : 'inside' }
                   }
         });
});

   $(function() {
    $('a.tic-gallery').fancybox({
                   type:'image',
                   padding: 0,
                   scrolling: 'no',
                   helpers : {
                        overlay: {
                           css: {'background-color': '#000'},
                           opacity: 0.3
                        },
                        title : { type : 'inside' }
                   }
         });
});

  skrollr.init({
    smoothScrolling: false, 
    mobileDeceleration: 0.004
  });

  

  // $("a.celeste-gallery")
  //   .attr('rel', 'celeste')
  //   .fancybox({
  //       padding : 0
  //   });

  $('#jumbo2').hide();
  $('#jumbo3').hide();

function changeJumbo(){
 
  $('#jumbo1').delay(2500).fadeOut(1000, function(){
      $('#jumbo2').fadeIn(1000).delay(2500).fadeOut(1000, function(){
        $('#jumbo3').fadeIn(1000).delay(2500).fadeOut(1000, function(){
          $('#jumbo1').fadeIn(1000, function(){
              var i = 0;
              if (i < 1){
                changeJumbo();
              }
          });
        });
      });
  });
}
changeJumbo();


});//end of document.ready