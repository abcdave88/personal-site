console.log('hello world')

$(document).ready(function(){

  skrollr.init({
    smoothScrolling: false,
    mobileDeceleration: 0.004
  });



$('#jumbo2').hide();
$('#jumbo3').hide();

function changeJumbo(){
 
  $('#jumbo1').delay(3000).fadeOut(1500, function(){
      $('#jumbo2').fadeIn(1500).delay(3000).fadeOut(1500, function(){
        $('#jumbo3').fadeIn(1500).delay(3000).fadeOut(1500, function(){
          $('#jumbo1').fadeIn(1500, function(){
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